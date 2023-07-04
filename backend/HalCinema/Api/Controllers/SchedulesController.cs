using Api.Models;
using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class ScheduleController : ControllerBase
{
    private readonly CinemaContext _context;
    private const int Limit = 10;
    public ScheduleController(CinemaContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<PageableResponse>> Get(int? nextPageToken) 
    {
        IQueryable<Schedule> query = _context.Schedules;
        
        if (nextPageToken.HasValue)
        {
            query = query.Where(item => item.Id > nextPageToken);
        }
        var items = await query.OrderBy(item => item.Id).Take(Limit).Include(x => x.Movie).ThenInclude(x => x.Genres).ToListAsync();
        return Ok(new PageableResponse(items.Count == Limit ? items.Last().Id : null, null, items));
    }
}