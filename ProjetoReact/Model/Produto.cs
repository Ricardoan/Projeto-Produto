using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoReact.Model
{

    [Table("produto")]
    public class Produto
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Descricaoproduto { get; set; }

        [Required]
        public DateTime dataInicial { get; set; }
        [Required]
        public string tipo { get; set; }

        public bool promoção { get; set; }

        public string valor { get; set; }
    }
}
