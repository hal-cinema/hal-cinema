using Api.Models;
using Database.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class SinUpController : ControllerBase
{
    private readonly UserManager<User> _userManager;

    public SinUpController(UserManager<User> userManager)
    {
        _userManager = userManager;
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> SinUp(SignUpRequest signUpRequest)
    {
        var user = new User
        {
            Email = signUpRequest.Email,
            UserName = signUpRequest.UserName,
            EmailConfirmed = true,
        };

        var result = await _userManager.CreateAsync(user, signUpRequest.Password);
        if (result.Succeeded)
        {
            return Ok(new { Message = "User created successfully" });
        }
        return BadRequest(result.Errors);
    }
}