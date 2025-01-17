using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SB.Domain;
using SB.Infrastructure.Services;

namespace SB.API.Mantenimiento.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class EntidadesController : ControllerBase
    {
        private readonly IEntidadService _entidadService;
        private readonly ILogger<EntidadesController> _logger;

        public EntidadesController(IEntidadService entidadService, ILogger<EntidadesController> logger)
        {
            _entidadService = entidadService;
            _logger = logger;
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            _logger.LogInformation("Solicitud recibida para obtener entidades.");
            var entidades = _entidadService.ObtenerEntidades();
            _logger.LogInformation("Se obtuvieron {Count} entidades.", entidades.Count);
            return Ok(entidades);
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post([FromBody] Entidad entidad)
        {
            _logger.LogInformation($"Solicitud recibida para registrar entidad. de nombre {entidad.Nombre}, web{entidad.SitioWeb}");
            var nuevaEntidad = _entidadService.CrearEntidad(entidad);
            _logger.LogInformation("Entidad registrada correctamente.");
            return Ok(nuevaEntidad);
        }
    }
}
