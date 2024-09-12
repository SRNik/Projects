import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    console.log('start')
    //Fetching the value of the cart in the service when the app component is triggerred and everytime the observable/subject in the service changes value
    //Note that only the subscribe method will be triggerred when the cart is updated
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
    })
  }

}
