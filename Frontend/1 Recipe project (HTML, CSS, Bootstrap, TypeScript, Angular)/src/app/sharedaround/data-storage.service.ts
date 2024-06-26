// We take care of all http requests here
import { HttpClient } from '@angular/common/http'

import { Injectable } from "@angular/core";
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    saveRecipes() {
        const recipes = this.recipeService.getRecipes()

        this.http.put('https://ng-course-recipe-book-d518b-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(respData => {
                console.log(respData);
            })
    }

    fetchRecipes() {

        return this.http.get<Recipe[]>('https://ng-course-recipe-book-d518b-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}