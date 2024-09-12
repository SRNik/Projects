import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreAPIService } from 'src/app/services/storeAPI.service';

const ROW_HEIGHT: { [id: number]: number } = { 1: 200, 3: 350, 4: 320 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {
  //Amount of columns
  columns = 1;
  //Row height
  rowHeight = ROW_HEIGHT[this.columns];
  //which category has been selected
  chosenCategory: string | undefined;
  products: Array<Product> | undefined
  sort = 'desc';
  count = '10';
  //Purpose of this variable is to fetch the Observabel and erase it in the destroy lifecycle - Reason: To eras memory
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeAPIService: StoreAPIService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsSubscription = this.storeAPIService.getAllProducts(this.count, this.sort, this.chosenCategory)
      .subscribe(_prods => {
        this.products = _prods;
      });
    console.log(`This is the fetched products array ${this.products}`)
  }

  onSortChange(_sort: string) {
    this.sort = _sort;
    this.getProducts();
  }

  onShowItemsChange(_count: number) {
    this.count = _count.toString();
    this.getProducts();
  }

  onColumnsCountChange(colNum: number) {
    this.columns = colNum;
    this.rowHeight = ROW_HEIGHT[this.columns];
  }

  onShowCategory(category: string) {
    this.chosenCategory = category;
    this.getProducts();
  }

  //Key names not the same as cartitem because the API uses different key names
  OnAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      quantity: 1,
      price: product.price,
      id: product.id
    })
  }


  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }


}
