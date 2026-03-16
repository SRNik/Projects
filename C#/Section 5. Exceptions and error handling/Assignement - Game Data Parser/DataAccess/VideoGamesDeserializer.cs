//List of data reeived in json => parse it => display it in the console

//input by the user
//searching for the file - keep asking until any existing file has been added
//logging any exception
//display the result

using Assignement___Game_Data_Parser.Models;
using System.Text.Json;

public class VideoGamesDeserializer : IVideoGamesDeserializer
{
    private readonly IUserInteractor _userInteractor;
    public VideoGamesDeserializer(IUserInteractor userInteractor)
    {
        _userInteractor = userInteractor;
    }

    public List<VideoGame> DeserializeFrom(string fileName, string fileContent)
    {

        try
        {
            return JsonSerializer.Deserialize<List<VideoGame>>(fileContent);  //Deserializing to object(s) in a list
        }
        catch (JsonException ex)
        {
            _userInteractor.PrintError($"JSON in the '{fileName}' file was not in a valid format. JSON body: \n  {fileContent}");

            throw new JsonException($"{ex.Message} - The file name is {fileName}", ex); //catched by the logger exception. A global try-cacth in program.cs
        }

    }
}




//Console.ReadKey();

