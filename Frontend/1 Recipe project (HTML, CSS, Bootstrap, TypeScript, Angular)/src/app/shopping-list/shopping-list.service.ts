
import { Subject } from "rxjs";

import { Ingredient } from "../sharedaround/ingredient.model";


export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();


    private ingredients: Ingredient[] = [
        new Ingredient('Onion', 1),
        new Ingredient('Meat', 5),
    ];

    getIngredients() {
        return this.ingredients.slice(); //gets the copy of the ingredient above
    }

    //Getting ingredient we selected to edit
    getIngredient(index: number) {
        return this.ingredients[index]
    }


    //Adding one ingredient at a time
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    //Adding all the ingredients from the recipe component to the shopping list
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);  //Using spread to select each element from the array
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}