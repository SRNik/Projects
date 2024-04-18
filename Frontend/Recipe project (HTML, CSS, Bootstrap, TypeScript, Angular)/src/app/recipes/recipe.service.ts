import { Recipe } from "./recipe.model";
import { Ingredient } from "../sharedaround/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// This is the central part where we manage our recipes
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

    //Private keyword makes it impossible to access the array from outside. Do not want the user to be able to change the core array
    // private recipes: Recipe[] = [ //The "datatype" is the model itself as an array
    //     new Recipe('Lasagna', 'Delicious',
    //         'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2019/01/iStock-504045128.jpg?x39145',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Pasta plates', 12),
    //             new Ingredient('Onion', 1),
    //             new Ingredient('Crushed tomatoes', 2)
    //         ]),
    //     new Recipe('Burek', 'Amazing!',
    //         'https://shared.cdn.smp.schibsted.com/v2/images/2a622956-6824-4881-b5b6-e6dd817760b7?fit=crop&h=600&w=800&s=936d9c15645c4ea50ecb28e2bf1b550f914d1ae8',
    //         [
    //             new Ingredient('Meat', 2),
    //             new Ingredient('Dough', 2)
    //         ])
    // ];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {

    }

    //Returns the updated array
    getRecipes() {
        return this.recipes.slice() //gives a copy of the array above
    }

    getRecipe(i: number) {
        return this.recipes[i];
    }

    setRecipes(fecthedRecipes) {
        this.recipes = fecthedRecipes;  //Fetching the recipes from the DB (firbase console)
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

    addRecipe(addRecipe: Recipe) {
        this.recipes.push(addRecipe);
        this.recipesChanged.next(this.recipes.slice());
    };

    updateRecipe(index: number, updatedRecipe: Recipe) {
        this.recipes[index] = updatedRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1); //removing 1 element from the array in position index
        this.recipesChanged.next(this.recipes.slice());
    }
}