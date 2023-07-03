namespace Database.Entities;

public enum ScreenType
{
    Large = 1,
    Medium = 2,
    Small = 3
}

public class Screen
{
    public Screen(string name)
    {
        Name = name;
    }

    public int Id { set; get; }
    public string Name { set; get; }
    public ScreenType ScreenType { set; get; }
}