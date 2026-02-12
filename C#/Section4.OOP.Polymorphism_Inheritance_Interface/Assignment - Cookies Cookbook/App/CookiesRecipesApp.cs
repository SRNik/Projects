using CookiesCookbook.Recipes;

namespace CookiesCookbook.App;

public class CookiesRecipesApp
{
    private readonly IRecipesRepository _recipesRepositry;   //Want to print if we have saved recipes. It is a repositury because it gets access to the data source which is the file
    private readonly IRecipesUserInterface _recipesUserInterface;    //The user interface. What is displayed in the console

    public CookiesRecipesApp(IRecipesRepository recipesRepositry, IRecipesUserInterface recipesUserInterface)
    {
        _recipesRepositry = recipesRepositry;
        _recipesUserInterface = recipesUserInterface;
    }

    public void Run(string filePath)
    {
        var allRecipes = _recipesRepositry.Read(filePath); //reading all recipes
        _recipesUserInterface.PrintExistingRecipes(allRecipes);

        _recipesUserInterface.PromptToCreateRecipes(); //prompt the instruction

        var ingredients = _recipesUserInterface.ReadIngredientsFromUser();

        if (ingredients.Count() > 0)
        {
            var recipe = new Recipe(ingredients);
            allRecipes.Add(recipe);    //Adding new recipes into the old one
            _recipesRepositry.Write(filePath, allRecipes);

            _recipesUserInterface.ShowMessage("Recipe added successfully: ");
            _recipesUserInterface.ShowMessage(recipe.ToString());

        }
        else
        {
            _recipesUserInterface.ShowMessage("No ingredients have been selected. Recipes will not be saved");
        }

        _recipesUserInterface.Exit();
    }
}
