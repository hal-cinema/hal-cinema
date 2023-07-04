using System.Diagnostics;
using Database.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Database;

public class CinemaContext: IdentityDbContext<User, Role, int>
{
    // MEMO
    // DateTimeはJST
    
    public CinemaContext(string connectionString) : this(new DbContextOptionsBuilder().UseNpgsql(connectionString).Options) { }
    public CinemaContext(DbContextOptions options) : base(options) { }
    public DbSet<Movie> Movies { set; get; } = null!;
    public DbSet<Genre> Genres { set; get; } = null!;
    public DbSet<Screen> Screens { set; get; } = null!;
    public DbSet<Seat> Seats { set; get; } = null!;
    public DbSet<Schedule> Schedules { set; get; } = null!;
    public DbSet<Reserve> Reserves { set; get; } = null!;
    public DbSet<Ticket> Tickets { set; get; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSnakeCaseNamingConvention();
        optionsBuilder.EnableSensitiveDataLogging();
        optionsBuilder.LogTo(s =>
        {
            Debug.WriteLine(s);
        });
        optionsBuilder.UseValidationCheckConstraints(); // [Range(0,2)]とかかくとCHECK ("" >= 0 AND "Rating" <= 2)のような制約を作ってくれる
        optionsBuilder.UseEnumCheckConstraints(); // チェック制約を使ってC#のenumで定義したintの値しか入れれないようにする
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        base.OnConfiguring(optionsBuilder);
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Movie>().HasMany(x => x.Genres).WithMany(x => x.Movies);
    }
}