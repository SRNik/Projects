import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../sharedaround/data-storage.service";
import { RecipeService } from "./recipe.service";

//this resolver will be called before the recipes.component which will fetch the data from Firebase before it manages to trigger its ngOnInit
@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService) { }

    resolve() {
        const recipes = this.recipesService.getRecipes();

        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        } else {
            return recipes
        }
    }


}