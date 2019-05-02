using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comics.Domain.Entities;
using Comics.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Comics.Site.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository _repo;

        public UsuarioController(IUsuarioRepository repo)
        {
            _repo = repo;
        }

        public IActionResult Index()
        {
            List<Usuario> usuario = _repo.TraerTodos().ToList();
            return View(usuario);
        }

        public IActionResult Crear()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Crear([FromBody]Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            _repo.Agregar(usuario);
            await _repo.GuardarAsync();
            return Json(
                new
                {
                    exito = true,
                    mensaje = "Usuario agregada con éxito"
                });
        }

        public async Task<IActionResult> Editar(int id)
        {
            Usuario usuario = await _repo.TraerPorIdAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return View(usuario);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Editar([FromBody]Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return View(usuario);
            }
            _repo.Editar(usuario);
            try
            {
                await _repo.GuardarAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if ((await ComicExisteAsync(usuario.Id)) == false)
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
                     mensaje = "Usuario modificado con éxito"
                 });
        }
        private async Task<bool> ComicExisteAsync(int id)
        {
            return (await _repo.TraerPorIdAsync(id) != null);
        }

        public async Task<IActionResult> Detalles(int id)
        {
            Usuario usuario = await _repo.TraerPorIdAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return View(usuario);
        }

        public async Task<IActionResult> Eliminar(int id)
        {
            Usuario usuario = await _repo.TraerPorIdAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return View(usuario);
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
            return RedirectToAction("Index");
        }
    }
}