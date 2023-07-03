using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Database.Entities;

[Index(nameof(ScreenId), nameof(Row), nameof(Column), IsUnique = true)]
public class Seat
{
    [Key]
    public int Id { set; get; }
    public int ScreenId { set; get; }
    
    public int Row { set; get; }
    public int Column { set; get; }
    
    [ForeignKey(nameof(ScreenId))]
    public Screen? ScreenNavigation { set; get; }
}