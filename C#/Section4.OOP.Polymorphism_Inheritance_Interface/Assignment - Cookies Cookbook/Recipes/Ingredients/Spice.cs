namespace CookiesCookbook.Recipes.Ingredients;

public abstract class Spice : Ingredient
{
    public override string PreparaionInstructions => $"Take a half tablespoon. {base.PreparaionInstructions}";
}

