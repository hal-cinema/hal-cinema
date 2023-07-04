using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class ReserveRequest
{
    public ReserveRequest(List<int> seatIds, string creditCard)
    {
        SeatIds = seatIds;
        CreditCard = creditCard;
    }
    public int ScheduleId { set; get; }
    
    [MinLength(14)]
    [MaxLength(16)]
    public string CreditCard { set; get; } // 学校の課題のため、カードの決済はしないので雑に送ってみる
    public List<int> SeatIds { get; set; }
}