//List of data reeived in json => parse it => display it in the console

//input by the user
//searching for the file - keep asking until any existing file has been added
//logging any exception
//display the result

using Assignement___Game_Data_Parser.Models;

public class GameDataParserApp
{
    //Using private readonly fields intead of private properties. No need of compiler generated fields 
    private readonly IUserInteractor _userInteractor;
    private readonly IGamesPrinter _gamesPrinter;
    private readonly IVideoGamesDeserializer _videoGamesDeserializer;
    private readonly IFileReader _fileReader;
    public GameDataParserApp(IUserInteractor userInterface, IGamesPrinter gamesPrinter, IVideoGamesDeserializer videoGamesDeserializer, IFileReader fileReader)
    {
        _userInteractor = userInterface;
        _gamesPrinter = gamesPrinter;
        _videoGamesDeserializer = videoGamesDeserializer;
        _fileReader = fileReader;
    }

    public void Run()
    {
        string fileName = _userInteractor.ReadValidFilePath();
        var fileContent = _fileReader.Read(fileName);
        List<VideoGame> videoGames = _videoGamesDeserializer.DeserializeFrom(fileName, fileContent);
        _gamesPrinter.Print(videoGames);
    }

}


