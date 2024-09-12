import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input('prod') product: Product | undefined;
  //Example of how the product array can look like
  // product: Product | undefined = {
  //   id: 1,
  //   title: 'Pullover',
  //   price: 25,
  //   category: 'Shirts',
  //   description: 'Description',
  //   image: 'https://via.placeholder.com/150'
  // };

  @Output() addToCart = new EventEmitter();




  constructor() { }

  ngOnInit(): void {

  }

  OnAddToCart() {
    this.addToCart.emit(this.product);
  }

}
