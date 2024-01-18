using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using be.BusinessLogicServices.Business;
using be.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace be.Controllers;

[ApiController]
[Route("api/users")]
public class UsersController : Controller
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [Route("/login")]
    [HttpPost]
    public IActionResult Login([FromBody] LoginDto loginDto)
    {
        var email = loginDto.Email;
        var password = loginDto.Password;
        _userService.ValidateUser(loginDto.Email, password);

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("KEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEY"));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: "your-issuer",
            audience: "your-audience",
            claims: new[] { new Claim("username", email) },
            expires: DateTime.Now.AddMinutes(1920),
            signingCredentials: credentials
        );

        return Ok(new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token)
        });

        return Unauthorized();
    }

    [Route("/register")]
    [HttpPost]
    public async Task<IActionResult> Register(RegisterDto registerDto)
    {
        await _userService.CreateUser(registerDto.Email, registerDto.Username, registerDto.Password);
        return Ok();
    }
}