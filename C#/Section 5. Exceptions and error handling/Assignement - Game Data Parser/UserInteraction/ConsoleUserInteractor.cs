//List of data reeived in json => parse it => display it in the console

//input by the user
//searching for the file - keep asking until any existing file has been added
//logging any exception
//display the result

public class ConsoleUserInteractor : IUserInteractor
{
    public void PrintMessage(string message)
    {
        Console.WriteLine(message);
    }

    public void PrintError(string message)
    {
        var originalColor = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(message);
        Console.ForegroundColor = originalColor;
    }

    public string ReadValidFilePath()
    {
        void Start() => Console.WriteLine("Enter the name of the file you want to read:");

        bool isFilePathValid = false;
        string fileName = default;  //default value of dt string => null

        do
        {
            Start();
            fileName = Console.ReadLine();

            if (fileName is null)
            {
                Console.WriteLine("The file cannot be null ");
            }
            else if (fileName == string.Empty)
            {
                Console.WriteLine("The file cannot be empty ");
            }
            else if (!File.Exists(fileName))
            {
                Console.WriteLine("The file does not exist ");
            }
            else
            {
                isFilePathValid = true;
            }

        }
        while (!isFilePathValid);
        return fileName;
    }
}


