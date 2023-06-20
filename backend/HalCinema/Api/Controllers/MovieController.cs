using Api.Models;
using Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class MovieController : ControllerBase
{
    private readonly CinemaContext _context;
    public MovieController(CinemaContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<Response> Get()
    {
        return new Response(true, null, _context.Movies.Include(x => x.Genres).AsNoTracking().ToList());
    }
}
