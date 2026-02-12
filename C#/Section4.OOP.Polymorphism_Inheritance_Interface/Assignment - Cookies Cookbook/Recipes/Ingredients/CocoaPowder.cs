using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CookiesCookbook.Recipes.Ingredients;

public class CocoaPowder : Ingredient
{
    public override int ID => 2;
    public override string Name { get; } = "CocoaPowder";
}
