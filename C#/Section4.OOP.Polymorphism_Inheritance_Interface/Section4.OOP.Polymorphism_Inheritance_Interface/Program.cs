
//A library is a collection of prewritten code that we can use to make our programming easier. For example rxjs and JsonSerializer.
//Only open source libraries accept free usage of them. You need to usually pay for the rest

//

using System.Text.Json;

object person = new Person()
{
    FirstName = "Rade",
    LastName = "Nikolic",
    YearOfBirth = 1997
};

var asJson = JsonSerializer.Serialize(person); //serializing an object to json
Console.WriteLine($"This is the serialized object: {asJson}");

var personJson = "{\"FirstName\":\"Rade\",\"LastName\":\"Nikolic\",\"YearOfBirth\":1997}";
var asObject = JsonSerializer.Deserialize<Person>(personJson);
Console.WriteLine(asObject);


Console.ReadKey();

public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int YearOfBirth { get; set; }
}

public abstract class Dessert { };

public interface IBakeable  
{
    string GetInstructions();   //all the components of the interface are public and virtual implicitly (logically, because you must use the method when inheriting it)
}

public class Panettone : Dessert, IBakeable
{
    public string GetInstructions() => "Bake at 180 degrees Celsius for 35 minutes";    //Mandatory to use all the compnents of the interface if inherited. Also, the method must be public
}

public class Pizza : IBakeable
{
    public Ingredient ingred;
    string tettt = null;
    private List<Ingredient> _ingredients = new List<Ingredient>();     //Here we have polymorhism. The list can be created based on every derived class that inherites the base class Ingredient

    public void AddIngredient(Ingredient ingredient) => _ingredients.Add(ingredient);

    public string GetInstructions() => "Bake at 250 degrees";

    public override string ToString() => $"This is a pizza with {string.Join(", ", _ingredients)}";
}



public abstract class Ingredient     //Our base class. An abstract class, which means it cannot be instantiated.
{
    public  Ingredient(int priceIfExtraTopping)
    {
        Console.WriteLine("Contructor from the Ingredient class!");
        PriceIfExtraTopping = priceIfExtraTopping;
    }

    public int PriceIfExtraTopping { get; }
    public override string ToString() => Name;
    public virtual string Name { get; } = "Some ingredient";

    public abstract void Prepare(); //Implicity virtual

    public int PubField = 10;
    public string PublicMethod() => "This method is public and can be used by any derived class!";  //Can be used by derived classes and outside

    protected string ProtectedMethod() => "This method is public and can be used by any derived class!";  //Can be used by derived classes but not outside (when instanciating it)

    private string PrivateMethod() => "This method is public and can be used by any derived class!"; //Cannot

}

public abstract class Cheese : Ingredient
{
    public Cheese(int priceIfExtraTopping) : base(priceIfExtraTopping)
    {
    }

}

public class Cheddar : Ingredient
{
    public Cheddar(int priceIfExtraToppping, int agedForMonths) : base(priceIfExtraToppping)
    {
        AgedForMonths = agedForMonths; 
        Console.WriteLine("Contructor from the Cheddar class!");
    }
    public override string Name => $"{base.Name}, more specifically, a Cheddar cheese aged for {AgedForMonths} months";
    public int AgedForMonths { get; }

    public override void Prepare() => Console.WriteLine("Grate and sprinkle over pizza.");

    public void UseMethodsFromBaseClass()
    {
        Console.WriteLine(PublicMethod());
        Console.WriteLine(ProtectedMethod());
        //Console.WriteLine(PrivateMethod());
    }

}

public class TomatoSauce : Ingredient
{
    public TomatoSauce(int priceIfExtraTopping) : base(priceIfExtraTopping)
    {

    }
    public override string Name => "Tomato sauce";
    public int TomatoesIn100Grams { get; }

    public sealed override void Prepare() => Console.WriteLine("Cook tomatoes with basil, garlic and salt. " + "Spread on pizza.");
}

public sealed class Mozzarella : Cheese
{
    public Mozzarella(int priceIfExtraTopping) : base(priceIfExtraTopping)
    {
    }

    public override string Name => "Mozzarella";
    public bool IsLight { get; }

    public override void Prepare() => Console.WriteLine("Slice thinly and place on top of the pizza.");
}

//public class SpecMoxxarella : Mozzarella
//{

//}

public enum Season
{
    Spring,
    Summer,
    Autummn,
    Winter
}