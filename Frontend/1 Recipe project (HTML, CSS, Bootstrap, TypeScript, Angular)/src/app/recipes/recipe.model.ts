//This file is used as a model.

import { Ingredient } from "../sharedaround/ingredient.model";

//This should be a blueprint of the objects we create. The class logic is suitable for this
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgPa: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPa;
        this.ingredients = ingredients;
    }
}