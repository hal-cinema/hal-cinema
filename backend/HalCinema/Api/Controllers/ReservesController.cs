using Api.Models;
using Database;
using Database.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class ReserveController : ControllerBase
{
    private readonly CinemaContext _cinemaContext;
    private readonly UserManager<User> _userManager;
    public ReserveController(CinemaContext cinemaContext, UserManager<User> userManager)
    {
        _cinemaContext = cinemaContext;
        _userManager = userManager;
    }
    
    [Authorize]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Reserve>> Get(int id)
    {
        var user = await _userManager.GetUserAsync(HttpContext.User);
        if (user == null) return StatusCode(500, "User is null"); // TODO ミドルウェアに委託

        var reserve = await _cinemaContext.Reserves.Include(x => x.Tickets).ThenInclude(x => x.Seat).FirstOrDefaultAsync(x => x.Id == id && x.UserId == user.Id);
        if (reserve == null) return NotFound();
        return reserve;
    }
    
    [Authorize]
    [HttpPost]
    public async Task<ActionResult<Response>> Post([FromBody] ReserveRequest requestRequest) // 学校課題のためクレカの決済はしない
    {
        var transaction = await _cinemaContext.Database.BeginTransactionAsync();
        try
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            if (user == null) return StatusCode(500, "User is null"); // TODO ミドルウェアに委託

            var seats = _cinemaContext.Seats.Where(x => requestRequest.SeatIds.Contains(x.Id)).AsNoTracking().ToList();
            _cinemaContext.Reserves.Add(new Reserve(Reserve.ComputeCardHash(requestRequest.CreditCard))
            {
                UserId = user.Id,
                Tickets = seats.Select(x => new Ticket
                {
                    SeatId = x.Id,
                    ScheduleId = requestRequest.ScheduleId
                }).ToList()
            });

            await _cinemaContext.SaveChangesAsync();
            await transaction.CommitAsync();
            return Ok(new Response(true, nameof(Ok), null));
        }
        catch (DbUpdateException)
        {
            await transaction.RollbackAsync();
            return Conflict(new Response(false, "Booking failed", null));
        }
        catch (Exception)
        {
            await transaction.RollbackAsync();
            return StatusCode(500, new Response(false, "Internal Server Error", null));
        }

    }
}