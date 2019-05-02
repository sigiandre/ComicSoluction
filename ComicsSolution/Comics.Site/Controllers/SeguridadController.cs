using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Comics.Site.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

namespace Comics.Site.Controllers
{
    public class SeguridadController : Controller
    {
        public IActionResult MiCuenta()
        {
            return View();
        }

        public async Task<IActionResult> Login(UsuarioLogin usuario)
        {
            if (usuario.Email == "andre@gmail.com" && usuario.Password == "123" )
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, usuario.Email),
                    new Claim(ClaimTypes.Role, "Estudiante")
                };
                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), new AuthenticationProperties());
                return RedirectToAction("Index", "Tienda");
            }
            ViewBag.MensajeError = "Credenciales no validas";
            return View("MiCuenta");
        }
    }
}