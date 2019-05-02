using Comics.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Comics.Domain.Interfaces
{
    // patrón Repositorio
    public interface IComicRepository
    {
        IQueryable<Comic> TraerTodos(); // select * from
        Task<IEnumerable<Comic>> BuscarAsync(Expression<Func<Comic, bool>> filtro);
        //Buscar(c => c.Nombre = xyz)
        //Buscar(c => c.Año = 1999)
        Task<Comic> TraerPorIdAsync(int id);
        void Agregar(Comic comic);
        void Editar(Comic comic);
        Task<bool> EliminarAsync(int id);
        Task GuardarAsync();
        Task EditarAsync();
    }
}
