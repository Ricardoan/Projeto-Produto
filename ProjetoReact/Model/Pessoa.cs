using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoReact.Model
{
    [Table("Pessoa")]
    public class Pessoa
    {

        [Key]
        public int Id { get; set; }

        [Required] // campo obrigatório
        [StringLength(255)] // tamnho da string com msn de erro
      
        public string Nome { get; set; }

        [Required] // campo obrigatório
        [StringLength(11)]     
        public string CPF { get; set; }
    }
}
