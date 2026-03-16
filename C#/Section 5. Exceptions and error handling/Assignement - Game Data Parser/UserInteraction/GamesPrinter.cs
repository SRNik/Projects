//List of data reeived in json => parse it => display it in the console

//input by the user
//searching for the file - keep asking until any existing file has been added
//logging any exception
//display the result

using Assignement___Game_Data_Parser.Models;

public class GamesPrinter : IGamesPrinter
{
    private readonly IUserInteractor _userInteractor;

    public GamesPrinter(IUserInteractor userInteractor)
    {
        _userInteractor = userInteractor;
    }

    public void Print(List<VideoGame> videoGames)
    {
        if (videoGames.Count > 0)
        {
            _userInteractor.PrintMessage("\n" + "Loaded games are");
            for (int i = 0; i < videoGames.Count; i++)
            {
                _userInteractor.PrintMessage(videoGames[i].ToString());
            }
        }
        else
        {
            _userInteractor.PrintMessage("No games are present in the input file.");
        }
    }
}




//Console.ReadKey();

