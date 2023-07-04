using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Database.Entities;

[Index(nameof(ScreenId), nameof(RowNumber), nameof(ColumnNumber), IsUnique = true)]
public class Seat
{
    [Key]
    public int Id { set; get; }
    public int ScreenId { set; get; }
    
    public int RowNumber { set; get; }
    public int ColumnNumber { set; get; }
    
    [ForeignKey(nameof(ScreenId))]
    public Screen? ScreenNavigation { set; get; }
}