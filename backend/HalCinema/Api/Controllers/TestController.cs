using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class TestController : ControllerBase
{
    [HttpGet]
    public string SayHello()
    {
        return "Hello world";
    }
}
