import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    //Retrieving the emmpty cart object from the private property
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    //Returning new array with only quantity value´=> adding the elements' value and returning an integer
    this.itemsQuantity = cart.items
      .map((i) => i.quantity)
      .reduce((prev, current) => prev + current, 0);
  }


  constructor(private cartService: CartService) { }

  getTotalPrice(items: Array<CartItem>): number {
    return this.cartService.getTotalPrice(items);
  }

  OnClearCart() {
    this.cartService.clearCart();
  }

}
