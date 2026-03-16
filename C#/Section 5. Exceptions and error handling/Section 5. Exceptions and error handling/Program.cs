//Generally onyly acceptable to rethrow a general Exception When the exception is not handled but only logged or shown to the user and then rethrown

//Global try-catch block = Try catch which catches any exception not caught elsewehere. It should surround the entry point to the applicaition. In the C# appliocation it is the Main method in the progtam class.
//Entry point = the first method that i called => In the C# appliocation it is the Main method in the progtam class
//So you can also use general Exception for global because we never know exactly which exception we will get in the whole application

//What should we and should we not put into the catch block? We should not have exception thrown directly in the catch block (except  rethrowing exceptions with "throw"). The catch block wsould be simple
//You can have nested try caych blocks inside the catch. But not a good practive to do it. It i messy and unreadable


//public class PersonDataReader
//{
//    private readonly IPeopleRepository _peopleRepository;
//    private readonly ILogger _logger;

//    public PersonDataReader(IPeopleRepository peopleRepository, ILogger logger)
//    {
//        _peopleRepository = peopleRepository;
//        _logger = logger;
//    }

//    public PersonDataReader ReadPersonData(int personId)
//    {
//        try
//        {
//            return _peopleRepository.Read(personId);
//        }
//        catch (Exception ex)
//        {
//            _logger.Log(ex);    //log the exception/runtiome error
//            throw;  //rethrow
//        }
//    };

//}


//It can happen that the try throws the saame exception everytime, but only differ in value of properties. Here we can use Exception filters to distinguish the exceptions it threr type is the samee
//Example is with HttpRequestException weith status code


//try
//{
//    var dataFromWeb = SendHttpRequest("www.someAddress.com/get/someResource");
//}
//catch (HttpRequestException ex) when (ex.Message == "403")
//{
//    Console.WriteLine("It was forbidden to access the resource.");
//    throw;
//}
//catch (HttpRequestException ex) when (ex.Message == "404")
//{
//    Console.WriteLine("Resource not found");
//    throw;
//}
//catch (HttpRequestException ex) when (ex.Message == "500")
//{
//    Console.WriteLine("Server error");
//    throw;
//}

//How do we define custom exceptions? We can create our own exception classes by deriving from the exception base class
//The class name must have a suffix Exception
//Did not write the detail. Too much
//public class CustomException: Exception
//{

//}

//When shoulkd we define custom exceptions?
//Always think twice before creating a custom exception
//The Principle of Least Surprise = The code should behave in a way that most developers will expect it to behave

//157
//Method signature = what the name of the method infdicates
//There is a problem when a method has an ecception, because it is not understood by just the name that it consists of an exception. Which can be missed out by the developer
int CalculateEmployeeAge(Employee Employee)
{
    if(Employee.Year < 1900)
        throw new ArgumentOutOfRangeException("Not good! Too old"); //Not implicitly understood
    return 29;
}

//There are two extreme schools of using exception: One that love it, and another that hate it.
// The negative with exception is that 1. Has negatvie imact on performance (only if they are thrown in the try) 2. Hard to follow code. 3. Exceptions can be "hidden" in methods. See previous lecture
// goto stqtemnet are considered bad practice because it will lead to spaghetti code (do not need to know goto logic)
//Many people try to avoid exceptions because of the problems and compications exceptions bring
// There are issues to not use exceptions at all and to use exceptions too much. So where is the balance? See the next 2 lectures

//When should we throw exceptions explicitly from our code?
//Exceptions should be explicitly thrown for exceptional behaviour (like not receving any list with elements, as an argument, when we do a for loop on it in the method), not for controlling the flow of the program
//Exceptions should not occur often.
//If normal program flow runs regularly into exceptions, you are doing something wrong

//We should catch exceptions when we have something meaningful to do about them ( return a value instead of an exception, rethrow the exception, emit message to user, trigger another method, etc.)
//Logging is usually made in the global try-catch (the highest possible level
//Locally: Sepcific exception types 2. Only meaningful handling 
//Globally: All exceptions shopuld be caught 2. General handlinh, Exception type 3. Write to log