import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      // {
      //   product: 'https://via.placeholder.com/150',
      //   name: 'Shirts',
      //   quantity: 2,
      //   price: 25,
      //   id: 1
      // }
    ]
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'quantity',
    'price',
    'total',
    'action'
  ];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotalPrice(items: Array<CartItem>): number {
    return this.cartService.getTotalPrice(items)
  }

  OnClearCart() {
    this.cartService.clearCart();
  };

  OnRemoveItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  OnRemoveQuantity(item: CartItem) {
    this.cartService.removeQuantity(item);
  }

  OnAddQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }


}
