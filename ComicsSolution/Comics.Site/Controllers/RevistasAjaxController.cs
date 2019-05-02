using Comics.Domain.Entities;
using Comics.Domain.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Comics.Site.Controllers
{
    public class RevistasAjaxController : Controller
    {
        private readonly IComicRepository _repo;
        private readonly IHostingEnvironment he;

        public RevistasAjaxController(IComicRepository repo, IHostingEnvironment e)
        {
            _repo = repo;
            this.he = e;
        }

        public IActionResult Index()
        {
            List<Comic> comics = _repo.TraerTodos().ToList();
            return View(comics);
        }

        public IActionResult Crear()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Crear([FromBody]Comic comic)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            _repo.Agregar(comic);
            await _repo.GuardarAsync();
            return Json(
                new
                {
                    exito = true,
                    mensaje = "Revista agregada con éxito"
                });
        }

        public async Task<IActionResult> Editar(int id)
        {
            Comic comic = await _repo.TraerPorIdAsync(id);
            if (comic == null)
            {
                return NotFound();
            }
            return View(comic);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Editar([FromBody]Comic comic)
        {
            if (!ModelState.IsValid)
            {
                return View(comic);
            }
            _repo.Editar(comic);
            try
            {
                await _repo.GuardarAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if ((await ComicExisteAsync(comic.Id)) == false)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Json(
                 new
                 {
                     exito = true,
                     mensaje = "Revista modificada con éxito"
                 });
        }
        private async Task<bool> ComicExisteAsync(int id)
        {
            return (await _repo.TraerPorIdAsync(id) != null);
        }

        public async Task<IActionResult> Detalles(int id)
        {
            Comic comic = await _repo.TraerPorIdAsync(id);
            if (comic == null)
            {
                return NotFound();
            }
            return View(comic);
        }

        public async Task<IActionResult> Eliminar(int id)
        {
            Comic comic = await _repo.TraerPorIdAsync(id);
            if (comic == null)
            {
                return NotFound();
            }
            return View(comic);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Eliminar")]
        public async Task<IActionResult> EliminarComic(int id)
        {
            if (await _repo.EliminarAsync(id))
            {
                await _repo.GuardarAsync();
            }
            return Json(
                new
                {
                    exito = true,
                    mensaje = "Revista eliminada con éxito"
                });
        }


    }
}