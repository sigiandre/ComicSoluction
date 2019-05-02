using Comics.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Comics.Domain.Interfaces
{
    public interface IUsuarioLoginRepository
    {
        Task<bool> UserLogin(UsuarioLogin _userlogin);
    }
}
