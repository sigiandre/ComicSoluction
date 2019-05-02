using Comics.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Comics.Domain.Interfaces;
using System.Linq;
using System.Threading.Tasks;
using Comics.Infraestructure.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace Comics.Infraestructure.Data.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ComicsDbContext _db;

        public UsuarioRepository(ComicsDbContext db)
        {
            this._db = db;
        }

        public void   Agregar(Usuario _usuario)
        {
            _db.Add<Usuario>(_usuario);
        }

        public void Editar(Usuario _usuario)
        {
            _db.Usuario.Attach(_usuario).State = EntityState.Modified;
        }

        public async Task<bool> EliminarAsync(int id)
        {
            var _usuario = await TraerPorIdAsync(id);
            if (_usuario != null)
            {
                _db.Remove<Usuario>(_usuario);
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task GuardarAsync()
        {
            await _db.SaveChangesAsync();
        }

        public async Task<Usuario> TraerPorIdAsync(int id)
        {
            return await _db.Usuario.FindAsync(id);
        }

        public  IQueryable<Usuario> TraerTodos()
        {
            return _db.Usuario.AsQueryable();
        }
    }
}
