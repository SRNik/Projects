//List of data reeived in json => parse it => display it in the console

using Assignement___Game_Data_Parser.Models;

public interface IGamesPrinter
{
    void Print(List<VideoGame> videoGames);
}