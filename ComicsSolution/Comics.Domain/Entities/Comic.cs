using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Comics.Domain.Entities
{
    public class Comic
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column(TypeName ="varchar(250)")]
        [Required]
        public string Nombre { get; set; }

        [Column(TypeName ="char(4)")]
        [Required]
        public string Año { get; set; }

        [Column(TypeName ="varchar(1500)")]
        [Required]
        public string Foto { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime FechaRegistro { get; set; }
    }
}
