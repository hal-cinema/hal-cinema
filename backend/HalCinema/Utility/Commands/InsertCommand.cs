using Database;
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
        var totalPages = await FetchAndStoreMovies(tmDbClient, dbContext, genresList, settings);
        return totalPages;
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

    private static async Task<int> FetchAndStoreMovies(TMDbClient tmDbClient, CinemaContext dbContext, List<Genre> genresList, InsertSettings settings)
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
        return response.TotalPages;
    }

    private static async Task AddMovies(CinemaContext dbContext, IEnumerable<SearchMovie> moviesList, InsertSettings settings, TMDbClient tmDbClient, List<Genre> genresList)
    {
        foreach (var baseMovie in moviesList)
        {
            var detail = await tmDbClient.GetMovieAsync(baseMovie.Id, settings.Language, null, MovieMethods.Credits | MovieMethods.ReleaseDates);
            var movie = new Movie(
                baseMovie.Title,
                baseMovie.Overview,
                baseMovie.ReleaseDate ?? DateTime.MinValue,
                baseMovie.BackdropPath,
                baseMovie.PosterPath,
                baseMovie.Adult,
                detail.Runtime ?? 0,
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
