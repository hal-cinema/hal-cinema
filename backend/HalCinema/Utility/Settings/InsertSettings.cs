using Spectre.Console.Cli;

namespace Utility.Settings;

public class InsertSettings : CommandSettings
{
    public InsertSettings(string apiKey, string language, string connectionString)
    {
        ApiKey = apiKey;
        Language = language;
        ConnectionString = connectionString;
    }

    [CommandArgument(0, "<ApiKey>")]
    public string ApiKey { set; get; }
    
    [CommandArgument(1, "<ConnectionString>")]
    public string ConnectionString { set; get; }
    
    [CommandOption("--begin-count")]
    public int BeginCount { set; get; }
    
    [CommandOption("--end-count|-e")]
    public int? EndCount { set; get; }
    
    [CommandOption("--language|-l")] 
    public string Language { set; get; } = "ja-JP";
    
    [CommandOption("--region|-r")]
    public string Region { set; get; } = "JP";
}