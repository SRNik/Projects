namespace CookiesCookbook.Recipes.Ingredients;
public abstract class Ingredient
{
    public abstract int ID { get; }
    public abstract string Name { get; }
    public virtual string PreparaionInstructions { get; } = "Add to other ingredients.";

    public override string ToString()
    {
        return $"{ID}. {Name}";
    }
}

