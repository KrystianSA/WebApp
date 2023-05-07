using Microsoft.EntityFrameworkCore;
using RecruitmentTask.Entities;

namespace RecruitmentTask.Data
{
    public class DataDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=LAPTOP-FGS0SEO7\\SQLEXPRESS01;encrypt=false;Initial Catalog=WebApp;Integrated Security=True");
        }
    }
}
