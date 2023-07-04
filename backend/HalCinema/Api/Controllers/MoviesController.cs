using Api.Models;
using Database;
using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class MoviesController : ControllerBase
{
    private readonly CinemaContext _context;
    private const int Limit = 10;
    public MoviesController(CinemaContext context)
    {
        _context = context;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Movie>> Get(int id)
    {
        var movie = await _context.Movies.Include(x => x.Genres).FirstOrDefaultAsync(x => x.Id == id);
        if (movie == null) return NotFound();
        return movie;
    }
    
    [HttpGet]
    public async Task<ActionResult<PageableResponse>> Get(int? nextPageToken)
    {
        IQueryable<Movie> query = _context.Movies;
        
        if (nextPageToken.HasValue)
        {
            query = query.Where(item => item.Id > nextPageToken);
        }
        var items = await query.OrderBy(item => item.Id).Take(Limit).Include(x => x.Genres).ToListAsync();
        return new PageableResponse(items.Count == Limit ? items.Last().Id : null, null, items );
    }
}
