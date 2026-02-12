using CookiesCookbook.Recipes.Ingredients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CookiesCookbook.Recipes;
public class Recipe
{
    //IEnumerable is essential if we want to use for each look
    //Any type that implements IEnumerable<Type> interface can be iterated with a foreach loop
    public IEnumerable<Ingredient> Ingredients { get; } 
    public Recipe(IEnumerable<Ingredient> ingredients)
    {
        Ingredients = ingredients;
    }

    public override string ToString()   //överriding the default logic of ToString. We want the object value, not the object name
    {
        var steps = new List<string>();
        foreach(var i in Ingredients)
        {
            steps.Add($"{i.Name}. {i.PreparaionInstructions}");
        }

        return string.Join(Environment.NewLine, steps);
    }
}

