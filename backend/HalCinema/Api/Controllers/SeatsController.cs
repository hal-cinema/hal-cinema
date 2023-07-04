using Api.Models;
using Database;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class SeatsController : ControllerBase
{
    private readonly CinemaContext _dbContext;

    public SeatsController(CinemaContext dbContext)
    {   
        _dbContext = dbContext;
    }
    
    [HttpGet("{scheduleId:int}")]
    public async Task<ActionResult<Response>> Get(int scheduleId)
    {
        var schedule = await _dbContext.Schedules.FindAsync(scheduleId);
        if (schedule == null) return NotFound(new Response(false, "Schedule not found", null));
    
        var screen = _dbContext.Screens.First(x => x.Id == schedule.ScreenId);
        var seats = _dbContext.Seats.Where(x => x.ScreenId == screen.Id).ToList();
        var seatsIds = seats.Select(x => x.Id).ToList();
        var availableSeats = _dbContext.Tickets.Where(x => seatsIds.Contains(x.SeatId)).ToList();
    
        var availableSeatIds = new HashSet<int>(availableSeats.Select(s => s.SeatId));

        var seatsStatus = seats.Select(x => new SeatStatus
        {
            SeatId = x.Id,
            IsAvailable = !availableSeatIds.Contains(x.Id)
        }).ToList();

        return Ok(new Response(true, string.Empty, seatsStatus));
    }

}