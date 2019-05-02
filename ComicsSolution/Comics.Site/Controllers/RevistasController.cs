using Comics.Domain.Entities;
using Comics.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comics.Site.Controllers
{
    public class RevistasController : Controller
    {
        private readonly IComicRepository _repo;

        public RevistasController(IComicRepository repo)
        {
            _repo = repo;
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
        public async Task<IActionResult> Crear(Comic comic)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            _repo.Agregar(comic);
            await _repo.GuardarAsync();
            return RedirectToAction("Index");
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
        public async Task<IActionResult> Editar(Comic comic)
        {
            if (!ModelState.IsValid)
            {
                return View(comic);
            }
            _repo.Editar(comic);
            try
            {
                await _repo.EditarAsync();
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

            return RedirectToAction("Index");
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
        [ActionName("Eliminar")]
        public async Task<IActionResult> EliminarComic(int id)
        {
            if (await _repo.EliminarAsync(id))
            {
                await _repo.GuardarAsync();
            }
            return RedirectToAction("Index");
        }
    }
}