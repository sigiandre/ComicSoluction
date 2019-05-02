using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comics.Domain.Entities;
using Comics.Domain.Interfaces;
using Comics.Site.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Comics.Site.Controllers
{
    public class ParametrosController : Controller
    {
        private readonly IParametroRepository _repo;
        private IMemoryCache _cache;

        public ParametrosController(IParametroRepository repo, IMemoryCache memoryCache)
        {
            _repo = repo;
            _cache = memoryCache;
        }

        public IActionResult Index()
        {
            List<Parametro> listaParametros;

            // se busca la lista de parametros en cache y si existe se carga
            if (!_cache.TryGetValue(CacheKeys.Parametros, out listaParametros))
            {
                // si no existe se obtiene usando el repositorio correspondiente
                listaParametros = _repo.TraerTodos().ToList();

                // se definen configuraciones de cache
                // se define una expiracion relativa de 5 minutos
                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromMinutes(5));

                // se agrega en cache
                _cache.Set(CacheKeys.Parametros, listaParametros, cacheEntryOptions);
            }

            return View("Index", listaParametros);
        }
    }
}