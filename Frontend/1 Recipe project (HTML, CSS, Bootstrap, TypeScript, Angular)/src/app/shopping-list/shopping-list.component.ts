import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../sharedaround/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; //empty array to add all the ingredients
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients(); //retrieves the latest ingredient list from the service
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredientsChanged: Ingredient[]) => {
          this.ingredients = ingredientsChanged
        }); //updating the ingredientlist
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);  //Adding the specific item (index) the user selected. Fetched later on in shopping-edit
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
