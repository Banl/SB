using SB.Domain;

namespace SB.Infrastructure.Services
{
    public interface IArchivoPlanoService
    {
        void GuardarEntidades(List<Entidad> entidades);
        List<Entidad> LeerEntidades();
    }
}