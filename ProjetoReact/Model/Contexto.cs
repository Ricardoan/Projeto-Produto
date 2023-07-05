
using Microsoft.EntityFrameworkCore;
using ProjetoReact.Model;

namespace ProjetoReact.Model
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            //Database.EnsureCreated();
        }
       
        public DbSet<Produto> produto { get; set; }
        public DbSet<Pessoa> Pessoa { get; set; }
        public DbSet<Carrinho> carrinho{ get; set; }
    }
}
