namespace CookiesCookbook.Recipes.Ingredients;

public abstract class Flour : Ingredient
{
    public override string PreparaionInstructions => $"Sieve. {base.PreparaionInstructions}";
}

