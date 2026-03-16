//List of data reeived in json => parse it => display it in the console

using Assignement___Game_Data_Parser.Models;

public interface IVideoGamesDeserializer
{
    List<VideoGame> DeserializeFrom(string fileName, string fileContent);
}