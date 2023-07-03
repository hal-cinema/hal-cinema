using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities;

public class Ticket
{
    public int Id { set; get; }
    public int ReserveId { set; get; }
    public int SeatId { set; get; }
    
    [ForeignKey(nameof(SeatId))]
    public Seat? Seat { set; get; }

    [ForeignKey(nameof(ReserveId))]
    public Reserve? Reserve { set; get; }
}