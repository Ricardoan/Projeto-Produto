using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjetoReact.Model
{

    [Table("Carrinho")]
    public class Carrinho
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string DescricaoCarrinho { get; set; }

        [Required]
        public DateTime dataInicial { get; set; }
        [Required]
        public string tipo { get; set; }

        public bool promoção { get; set; }

        public string preço { get; set; }

        public Pessoa usuario { get; set; }
    }
}
