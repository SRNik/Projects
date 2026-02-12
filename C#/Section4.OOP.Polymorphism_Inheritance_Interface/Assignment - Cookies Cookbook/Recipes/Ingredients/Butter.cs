namespace CookiesCookbook.Recipes.Ingredients;

public class Butter : Ingredient
{
    public override int ID => 3;
    public override string Name { get; } = "Butter";
    public override string PreparaionInstructions => $"Melt on low heat. {base.PreparaionInstructions}";
}

