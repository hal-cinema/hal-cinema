using Database.Entities;

namespace Api.Models;

public class SeatRequest
{
    public int SeatId { set; get; }
    public SeatType SeatType { set; get; }
}

public class ReserveRequest
{
    public ReserveRequest(List<SeatRequest> seats)
    {
        Seats = seats;
    }

    public int ScheduleId { set; get; }
    public List<SeatRequest> Seats { get; set; }
}