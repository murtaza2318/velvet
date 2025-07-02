using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace VelvetLeash.API.Data
{
    public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();

            // ✅ Updated connection string without instance name
            string cs = "Server=DESKTOP-4RVQ5JB;Database=VelvetLeash;User Id=sa;Password=wolke;TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(cs);

            return new ApplicationDbContext(optionsBuilder.Options);
        }
    }
}
