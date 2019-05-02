using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Comics.Domain.Entities
{
    public class UsuarioLogin
    {
        [Column(TypeName = "varchar(250)")]
        [Required]
        public string Email { get; set; }

        [Column(TypeName = "varchar(50)")]
        [Required]
        public string Password { get; set; }
    }
}
