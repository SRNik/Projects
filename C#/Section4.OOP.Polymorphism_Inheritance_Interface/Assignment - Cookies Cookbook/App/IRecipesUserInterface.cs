using CookiesCookbook.Recipes.Ingredients;
using CookiesCookbook.Recipes;

namespace CookiesCookbook.App;

public interface IRecipesUserInterface
{
    void ShowMessage(string message);
    void Exit();
    void PrintExistingRecipes(IEnumerable<Recipe> allRecipes);
    void PromptToCreateRecipes();
    IEnumerable<Ingredient> ReadIngredientsFromUser();
}
