//List of data reeived in json => parse it => display it in the console

//input by the user
//searching for the file - keep asking until any existing file has been added
//logging any exception
//display the result

public class LocalFileReader : IFileReader
{
    public string Read(string fileName)
    {
        return File.ReadAllText(fileName);
    }
}




//Console.ReadKey();

