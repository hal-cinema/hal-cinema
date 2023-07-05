using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities;

public class Schedule
{
    public int Id { set; get; }
    public int MovieId { set; get; }
    public int ScreenId { set; get; }
    public DateTime StartAt { set; get; }
    public DateTime EndAt { set; get; }
    
    [ForeignKey(nameof(MovieId))]
    public Movie Movie { set; get; } = null!;
    
    [ForeignKey(nameof(ScreenId))]
    public Screen Screen { set; get; } = null!;
}  