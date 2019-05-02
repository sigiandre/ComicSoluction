using System.Linq;
using Comics.Domain.Entities;
using Comics.Domain.Interfaces;
using Comics.Infraestructure.Data.Model;

namespace Comics.Infraestructure.Data.Repositories
{
    public class ParametroRepository : IParametroRepository
    {
        private readonly ComicsDbContext _db;

        public ParametroRepository(ComicsDbContext db)
        {
            _db = db;
        }

        public IQueryable<Parametro> TraerTodos()
        {
            return _db.Parametros.AsQueryable();
        }

    }
}
