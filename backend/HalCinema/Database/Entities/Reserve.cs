using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;
using System.Text;

namespace Database.Entities;

public class Reserve
{
    public Reserve(string creditCardHash)
    {
        CreditCardHash = creditCardHash;
        Tickets = new List<Ticket>();
    }

    public int Id { set; get; }
    public int UserId { set; get; }
    public string CreditCardHash { set; get; }
    
    [ForeignKey(nameof(UserId))]
    public User? User { set; get; }
    
    public List<Ticket> Tickets { set; get; }

    public static string ComputeCardHash(string card)
    {
        return string.Join(",", SHA256.HashData(Encoding.UTF8.GetBytes(card)));
    }
}