import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from '../products.service';
import { IProduct } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<IProduct> = [];
  cartProductsSubscription: Subscription;

  @Output('buy')
  buy: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.cartProductsSubscription = this.cartService.channel$.subscribe(console.warn);
  }

  ngOnDestroy() {
    this.cartProductsSubscription.unsubscribe();
  }

  onBuy(product: IProduct): void {
    this.cartService.addProduct(product);
  }

}
