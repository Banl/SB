using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SB.Domain;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SB.API.Mantenimiento.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<EntidadesController> _logger;

        public AuthController(IConfiguration configuration, ILogger<EntidadesController> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost("token")]
        public IActionResult GetToken([FromBody] ClientCredentials credentials)
        {
            _logger.LogInformation("Login attempt for client {ClientId}.", credentials.ClientId);
           var validClients = _configuration.GetSection("ValidClients").Get<Dictionary<string, string>>();

            if (validClients.ContainsKey(credentials.ClientId) &&
                validClients[credentials.ClientId] == credentials.ClientSecret)
            {
                var token = GenerateJwtToken(credentials.ClientId);
                _logger.LogInformation("Token generated for client {ClientId}.", credentials.ClientId);
                return Ok(new { Token = token });
            }
            _logger.LogWarning("Invalid credentials for client {ClientId}.", credentials.ClientId);
            return Unauthorized();
        }

        private string GenerateJwtToken(string clientId)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("clientId", clientId),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var tokenOptions = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: signinCredentials
            );

            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }
    }
}
