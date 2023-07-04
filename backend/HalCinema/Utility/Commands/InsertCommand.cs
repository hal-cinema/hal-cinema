using Database;
using Database.Entities;
using Microsoft.EntityFrameworkCore;
using Spectre.Console;
using Spectre.Console.Cli;
using TMDbLib.Client;
using TMDbLib.Objects.General;
using TMDbLib.Objects.Movies;
using TMDbLib.Objects.Search;
using Utility.Settings;
using Genre = Database.Entities.Genre;
using Movie = Database.Entities.Movie;

namespace Utility.Commands;

public class InsertCommand : AsyncCommand<InsertSettings>
{
    public override async Task<int> ExecuteAsync(CommandContext context, InsertSettings settings)
    {
        var tmDbClient = new TMDbClient(settings.ApiKey);
        await using var dbContext = new CinemaContext(settings.ConnectionString);
        
        await DeleteAndCreateDatabase(dbContext);

        var genresList = await FetchAndStoreGenres(tmDbClient, dbContext, settings.Language);
        await FetchAndStoreMovies(tmDbClient, dbContext, genresList, settings);
        await GenerateDummyScreenSeat(dbContext);
        await GenerateDummySchedule(dbContext, 3, 20);
        return 0;
    }
    private static async Task GenerateDummyScreenSeat(CinemaContext dbContext)
    {
        dbContext.Screens.Add(new Screen("スクリーン1")
        {
            ScreenType = ScreenType.Large,
            Seats = GenerateDummySeat(10, 7).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン2")
        {
            ScreenType = ScreenType.Large,
            Seats = GenerateDummySeat(10, 7).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン3")
        {
            ScreenType = ScreenType.Large,
            Seats = GenerateDummySeat(10, 7).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン3")
        {
            ScreenType = ScreenType.Medium,
            Seats = GenerateDummySeat(8, 5).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン5")
        {
            ScreenType = ScreenType.Medium,
            Seats = GenerateDummySeat(8, 5).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン6")
        {
            ScreenType = ScreenType.Small,
            Seats = GenerateDummySeat(5, 4).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン7")
        {
            ScreenType = ScreenType.Small,
            Seats = GenerateDummySeat(5, 4).ToList()
        });
        dbContext.Screens.Add(new Screen("スクリーン8")
        {
            ScreenType = ScreenType.Small,
            Seats = GenerateDummySeat(5, 4).ToList()
        });
        await dbContext.SaveChangesAsync();
    }
    
    private static async Task GenerateDummySchedule(CinemaContext dbContext, int daysToGenerate, int maxMoviesPerDay)
    {
        var cached = DateTime.Now;
        var timeSpan = TimeSpan.FromMinutes(20);
        var now = new DateTime(cached.Year, cached.Month, cached.Day, 9, 0, 0);
        var movies = await dbContext.Movies.AsNoTracking().ToListAsync();
        for (var i = 0; i < daysToGenerate; i++)
        {
            var dateTime = now.AddDays(i);
            var moviesPerDayQueue = new Queue<Movie>(movies.Select(x => (x, Guid.NewGuid())).OrderBy(x => x.Item2).Take(maxMoviesPerDay).Select(x => x.x));
            
            var schedules = dbContext.Screens.AsNoTracking().ToList().Select(x =>
            {
                var schedules = new List<Schedule>();
                while (moviesPerDayQueue.Count > 0 && (schedules.Count < 1 || (schedules.Count > 0 && schedules.Last().EndAt < dateTime.AddHours(23))))
                {
                    var movie = moviesPerDayQueue.Dequeue();
                    var startAt = schedules.Count <= 0 ? dateTime : schedules.Last().EndAt.AddMinutes(timeSpan.Minutes);
                    schedules.Add(new Schedule
                    {
                        StartAt = startAt,
                        EndAt = startAt.AddMinutes(movie.RuntimeMinutes),
                        MovieId = movie.Id,
                        ScreenId = x.Id
                    });
                }
                return schedules;
            }).SelectMany(x => x);
            
            dbContext.Schedules.AddRange(schedules);
            await dbContext.SaveChangesAsync();
        }
    }
    
    private static IEnumerable<Seat> GenerateDummySeat(int rowLength, int columnLength)
    {
        return Enumerable.Range(0, rowLength).Select(x =>
        {
            return Enumerable.Range(0, columnLength).Select(y => new Seat
            {
                RowNumber = x,
                ColumnNumber = y
            });
        }).SelectMany(x => x);
    }

    private static async Task DeleteAndCreateDatabase(DbContext dbContext) // TODO これはテスト用のコードなので削除する
    {
        await dbContext.Database.EnsureDeletedAsync();
        await dbContext.Database.EnsureCreatedAsync();
    }

    private static async Task<List<Genre>> FetchAndStoreGenres(TMDbClient tmDbClient, CinemaContext dbContext, string language)
    {
        var genres = await tmDbClient.GetMovieGenresAsync(language);
        var genresList = genres.Select(x => new Genre(x.Id, x.Name)).ToList();
        dbContext.Genres.AddRange(genresList);
        await dbContext.SaveChangesAsync();
        return genresList;
    }

    private static async Task FetchAndStoreMovies(TMDbClient tmDbClient, CinemaContext dbContext, List<Genre> genresList, InsertSettings settings)
    {
        SearchContainer<SearchMovie>? response = null;
        var currentPage = settings.BeginCount;
        while (response == null || currentPage < (settings.EndCount ?? response.TotalPages))
        {
            response = await tmDbClient.GetMoviePopularListAsync(language: settings.Language, page: currentPage, region: settings.Region);
            currentPage++;
            var moviesList = response.Results.Where(x => !string.IsNullOrWhiteSpace(x.BackdropPath) && !string.IsNullOrWhiteSpace(x.PosterPath));
            await AddMovies(dbContext, moviesList, settings, tmDbClient, genresList);
        }
    }

    private static async Task AddMovies(CinemaContext dbContext, IEnumerable<SearchMovie> moviesList, InsertSettings settings, TMDbClient tmDbClient, List<Genre> genresList)
    {
        foreach (var baseMovie in moviesList)
        {
            var detail = await tmDbClient.GetMovieAsync(baseMovie.Id, settings.Language, null, MovieMethods.Credits | MovieMethods.ReleaseDates | MovieMethods.Videos);
            var movie = new Movie(
                baseMovie.Title,
                baseMovie.Overview,
                baseMovie.ReleaseDate ?? DateTime.MinValue,
                baseMovie.BackdropPath,
                baseMovie.PosterPath,
                detail.Videos?.Results.Where(x => x.Type == "Trailer" && x.Site == "YouTube").Select(x => x.Key).FirstOrDefault(),
                baseMovie.Adult,
                detail.Runtime ?? int.MaxValue,
                DateTime.Now,
                string.Join("/", detail.Credits.Crew.Select(y => y.Name)),
                string.Join("/", detail.Credits.Cast.Select(y => y.Name))
            )
            {
                Genres = detail.Genres.Select(x => genresList.Find(g => g.Id == x.Id) ?? new Genre(x.Id, x.Name)).ToList()
            };

            dbContext.Add(movie);
            await dbContext.SaveChangesAsync();

            ShowToConsole(movie);
            await Task.Delay(300);
        }
    }

    public static void ShowToConsole(Movie movie)
    {
        AnsiConsole.MarkupLine($"Title: {movie.Title} Id: {movie.Id}");
    }
}
