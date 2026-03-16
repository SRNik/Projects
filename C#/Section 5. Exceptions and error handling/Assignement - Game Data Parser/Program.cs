//List of data reeived in json => parse it => display it in the console

//input by the user
//searching for the file - keep asking until any existing file has been added
//logging any exception
//display the result

var userInteractor = new ConsoleUserInteractor();
var app = new GameDataParserApp(userInteractor, new GamesPrinter(userInteractor), new VideoGamesDeserializer(userInteractor), new LocalFileReader());
var logger = new Logger("log.txt"); //which file the info should be logged to, right in the class' creation

try
{
    app.Run();
}
catch (Exception ex)
{
    Console.WriteLine("Sorry! The application has experienced an unexpected error and will have to be closed :(");
    logger.Log(ex);
}
Console.WriteLine("Press any key to close");
Console.ReadKey();


