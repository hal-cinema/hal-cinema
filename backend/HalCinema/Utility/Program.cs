using Spectre.Console.Cli;
using Utility.Commands;

namespace Utility;

public class Program
{
    public static int Main(string[] args)
    {
        var commandApp = new CommandApp();
        commandApp.Configure(x =>
        {
            x.AddCommand<InsertCommand>("insert");
        });
        return commandApp.Run(args);
    }
}