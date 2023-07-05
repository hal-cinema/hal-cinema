using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class VersionController : ControllerBase
{
    [HttpGet]
    public ActionResult<Response> Get()
    {
        return new ActionResult<Response>(new Response(true, null, "1.0.0"));
    }
}
