using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Database.Entities;

public class Movie
{
    public Movie(string title, string overview, DateTime releaseDate, string backDropPath, string videoPath, bool isAdult, int runtimeMinutes, DateTime createAt, string directorSummary, string performerSummary)
    {
        Title = title;
        Overview = overview;
        ReleaseDate = releaseDate;
        BackDropPath = backDropPath;
        VideoPath = videoPath;
        IsAdult = isAdult;
        RuntimeMinutes = runtimeMinutes;
        CreateAt = createAt;
        DirectorSummary = directorSummary;
        PerformerSummary = performerSummary;
    }

    [Key]
    public int Id { set; get; }
    
    [MinLength(1)]
    public string Title { set; get; }
    
    [MinLength(1)]
    public string Overview { set; get; }
    
    [MinLength(1)]
    public string BackDropPath { set; get; }
    
    [MinLength(1)]
    public string VideoPath { set; get; }
    
    [MinLength(1)] 
    public string DirectorSummary { get; set; }

    [MinLength(1)]
    public string PerformerSummary { set; get; }

    [Range(0, int.MaxValue)]
    public int RuntimeMinutes { set; get; }
    
    public bool IsAdult { set; get; }
    
    public DateTime ReleaseDate { set; get; }
    
    [JsonIgnore]
    public DateTime CreateAt { set; get; }
    
    public List<Genre> Genres { set; get; } = null!;
}