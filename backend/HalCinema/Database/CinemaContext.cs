using System.Diagnostics;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database;

public class CinemaContext: DbContext
{
    // MEMO
    // DateTimeはJST
    
    public CinemaContext(string connectionString) : this(new DbContextOptionsBuilder().UseNpgsql(connectionString).Options) { }
    public CinemaContext(DbContextOptions options) : base(options) { }
    public DbSet<Movie> Movies { set; get; } = null!;
    public DbSet<Genre> Genres { set; get; } = null!;
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
        modelBuilder.Entity<Movie>().HasMany(x => x.Genres).WithMany(x => x.Movies);
    }
}