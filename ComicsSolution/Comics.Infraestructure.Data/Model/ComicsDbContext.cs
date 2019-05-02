using Comics.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Comics.Infraestructure.Data.Model
{
    public class ComicsDbContext : DbContext
    {
        public ComicsDbContext(DbContextOptions<ComicsDbContext> options) : base(options)
        {
        }

        public DbSet<Comic> Comics { get; set; }
        public DbSet<Parametro> Parametros { get; set; }

        public  DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comic>().ToTable("Comic");
            modelBuilder.Entity<Parametro>().ToTable("Parametro");
            modelBuilder.Entity<Usuario>().ToTable("Usuario");
        }
    }
}
