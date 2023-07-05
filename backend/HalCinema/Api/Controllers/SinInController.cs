// ReSharper disable InvertIf
using Api.Models;
using Database.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class SinInController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    public SinInController(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> SinIn(SignInRequest loginRequest)
    {
        var user = await _userManager.FindByEmailAsync(loginRequest.Email);

        if (user != null && await _userManager.CheckPasswordAsync(user, loginRequest.Password))
        {
            await _signInManager.SignInAsync(user, isPersistent: loginRequest.RememberMe);

            return Ok();
        }
        return Unauthorized();
    }

}