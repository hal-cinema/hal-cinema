using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Database.Entities;

public class Genre
{
    public Genre(int id, string name)
    {
        Id = id;
        Name = name;
    }
    
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int Id { set; get; }

    [MinLength(1)]
    public string Name { set; get; }
    
    [JsonIgnore]
    public List<Movie> Movies { set; get; } = null!;
}