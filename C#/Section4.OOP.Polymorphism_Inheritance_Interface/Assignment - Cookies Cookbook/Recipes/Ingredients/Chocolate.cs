namespace CookiesCookbook.Recipes.Ingredients;

public class Chocolate : Ingredient
{
    public override int ID => 4;
    public override string Name { get; } = "Chocolate";
    public override string PreparaionInstructions => $"Melt in a water bath. {base.PreparaionInstructions}";
}

