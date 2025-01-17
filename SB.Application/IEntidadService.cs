using SB.Domain;
public interface IEntidadService
{
    List<Entidad> ObtenerEntidades();
    Entidad CrearEntidad(Entidad nuevaEntidad);
}
