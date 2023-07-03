using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities;

public class Reserve
{
    public Reserve(string creditCardHash)
    {
        CreditCardHash = creditCardHash;
    }

    public int Id { set; get; }
    public int ScheduleId { set; get; }
    public int UserId { set; get; }
    public string CreditCardHash { set; get; }
    
    [ForeignKey(nameof(UserId))]
    public User? User { set; get; }

    [ForeignKey(nameof(ScheduleId))]
    public Schedule? Schedule { set; get; }
}