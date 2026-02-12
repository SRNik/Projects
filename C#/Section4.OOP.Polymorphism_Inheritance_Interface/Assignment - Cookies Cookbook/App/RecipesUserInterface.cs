using CookiesCookbook.Recipes.Ingredients;
using CookiesCookbook.Recipes;

namespace CookiesCookbook.App;

public class RecipesUserInterface : IRecipesUserInterface
{
    private readonly IIngredientsRegister _ingredientsRegister;

    public RecipesUserInterface(IIngredientsRegister ingredientsRegister)
    {
        _ingredientsRegister = ingredientsRegister;
    }
    public void ShowMessage(string msg)
    {
        Console.WriteLine(msg);
    }

    public void Exit()
    {
        Console.WriteLine("Press any key to close :)");
        Console.ReadKey();
    }

    public void PrintExistingRecipes(IEnumerable<Recipe> allRecipes)
    {
        if (allRecipes.Any())
        {
            Console.WriteLine($"Existing recipes are: \n");

            int cnt = 1;
            foreach (var recipe in allRecipes)
            {
                Console.WriteLine($"*****{cnt}*****");
                Console.WriteLine($"{recipe} \n");
                cnt++;
            }
        }
    }
    public void PromptToCreateRecipes()
    {
        IngredientsRegister allIngredients = new IngredientsRegister();

        Console.WriteLine($"Create a new cookie recipe! Available ingredients are \n");
        foreach (Ingredient i in _ingredientsRegister.All)
        {
            Console.WriteLine(i);
        }
    }

    public IEnumerable<Ingredient> ReadIngredientsFromUser()
    {
        bool stop = false;
        var ingredients = new List<Ingredient>();

        while (!stop)
        {
            Console.WriteLine("Add an ingredient by its ID or type anything else if finishes");

            var userInput = Console.ReadLine();

            if (int.TryParse(userInput, out int id))
            {
                var selectedIngredient = _ingredientsRegister.GetById(id);//Returns the id or null
                if (selectedIngredient is not null)
                {
                    ingredients.Add(selectedIngredient);
                }
            }
            else
            {
                stop = true;
            }

        }

        return ingredients;

    }
}
