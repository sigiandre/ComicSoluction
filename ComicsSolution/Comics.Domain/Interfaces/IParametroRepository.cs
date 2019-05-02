using Comics.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Comics.Domain.Interfaces
{
    // patrón Repositorio
    public interface IParametroRepository
    {
        IQueryable<Parametro> TraerTodos();

    }
}
