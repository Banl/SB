using SB.Domain;

namespace SB.Infrastructure.Services
{
    public class EntidadService : IEntidadService
    {
        private readonly ArchivoPlanoService _archivoPlanoService;

        public EntidadService(ArchivoPlanoService archivoPlanoService)
        {
            _archivoPlanoService = archivoPlanoService;
        }

        public List<Entidad> ObtenerEntidades()
        {
            return _archivoPlanoService.LeerEntidades();
        }

        public Entidad CrearEntidad(Entidad nuevaEntidad)
        {
            var entidades = _archivoPlanoService.LeerEntidades();
            nuevaEntidad.Id = entidades.Count > 0 ? entidades.Max(e => e.Id) + 1 : 1;
            entidades.Add(nuevaEntidad);
            _archivoPlanoService.GuardarEntidades(entidades);
            return nuevaEntidad;
        }
    }
}