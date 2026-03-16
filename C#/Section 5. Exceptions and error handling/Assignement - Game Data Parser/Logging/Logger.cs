public class Logger
{
    private readonly string _logFileName;

    public Logger(string logFileName)
    {
        _logFileName = logFileName;
    }

    public void Log(Exception ex)
    {
        //look if the file exists
        //add exception
        var entry =     //Multiline string to append to the log file
$@"[{DateTime.Now}]
Exception message: {ex.Message}
Stack trace: {ex.StackTrace} 


";
        File.AppendAllText(_logFileName, entry);  //it appends in existing file. If no file found, it will create a new one and append.

    }
}