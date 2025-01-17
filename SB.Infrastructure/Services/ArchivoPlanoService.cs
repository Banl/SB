using SB.Domain;

namespace SB.Infrastructure.Services
{
    public class ArchivoPlanoService : IArchivoPlanoService
    {
        private readonly string _filePath;

        public ArchivoPlanoService(string filePath)
        {
            _filePath = filePath;
        }

        public List<Entidad> LeerEntidades()
        {
            if (!File.Exists(_filePath))
                return new List<Entidad>();

            return File.ReadAllLines(_filePath)
                       .Select(line =>
                       {
                           var parts = line.Split('|');
                           return new Entidad
                           {
                               Id = int.Parse(parts[0]),
                               Nombre = parts[1],
                               SitioWeb = parts[2]
                           };
                       })
                       .ToList();
        }

        public void GuardarEntidades(List<Entidad> entidades)
        {
            var lines = entidades.Select(e => $"{e.Id}|{e.Nombre}|{e.SitioWeb}");
            File.WriteAllLines(_filePath, lines);
        }
    }
}
