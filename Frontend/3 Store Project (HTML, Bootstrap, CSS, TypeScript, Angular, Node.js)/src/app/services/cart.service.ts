import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //The cart will behave like an observable/subject
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem) {
    //Creating an array with all items in current cart
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    //If same id exist, still add the same id/product
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    //The next method will update the cart (add the new value) with the items array as an object. Specific logic for BehaviorSubject
    this.cart.next({ items });
    this._snackBar.open('1 item added to chart', 'OK', { duration: 3000 });
    console.log(this.cart.value)
  }


  removeQuantity(item: CartItem) {
    let itemForRemoval: CartItem | undefined;

    //Creating new array by loopiong thorugh an exosting one
    let filteredItems = this.cart.value.items.map((_item) => {

      //If the id is same => subtract the quantity with 1
      if (_item.id === item.id) {
        _item.quantity -= 1;

        //If the qunatyt is 0 => remove the whole item
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      //Only display the specific snackbar when the quantity of the item is > 0
      if (_item.quantity > 0) {
        this._snackBar.open('1 quantity from the product is removed from the cart', 'OK', { duration: 3000 });
      }

      //Must return the manipulated item in the filteredItems array
      return _item
    });

    if (itemForRemoval) {
      filteredItems = this.removeItem(itemForRemoval);
    }

    //Updating the cart with the updated array of items (changed quantity)
    this.cart.next({ items: filteredItems });


  }


  //Returning the total price of all the items within the items array
  getTotalPrice(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  };

  clearCart() {
    //Emitting empty string to the BehaviorSubject, aka the cart
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared', 'OK', { duration: 3000 });
  }

  removeItem(item: CartItem): Array<CartItem> {
    //Create new array without the removed item
    const filteredItems = this.cart.value.items.filter((_item) => {
      //Return true to keep the item, false to remove it
      return _item.id !== item.id;
    });

    this.cart.next({ items: filteredItems });
    this._snackBar.open('Product is removed from the cart', 'OK', { duration: 3000 });

    return filteredItems;

  }

}
