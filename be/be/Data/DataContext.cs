using be.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace be.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options) {}

    private DbSet<Note> Notes { get; set; } = default!;
    private DbSet<User> Users { get; set; } = default!;
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Note>()
            .HasOne(n => n.User)
            .WithMany(u => u.Notes)
            .HasForeignKey(p => p.UserId);
    }
}