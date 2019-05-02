using Comics.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comics.Domain.Interfaces
{
    public interface IUsuarioRepository
    {
        IQueryable<Usuario> TraerTodos(); // select * from
        Task<Usuario> TraerPorIdAsync(int id);
        void Agregar(Usuario comic);
        void Editar(Usuario comic);
        Task<bool> EliminarAsync(int id);
        Task GuardarAsync();
    }
}
