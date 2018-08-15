import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { CartService } from '../cart.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  faCartPlus = faCartPlus;
  products$: Observable<Array<IProduct>>;
  isEmpty: boolean;
  cartServiceSubscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.cartService.channel$;
    this.cartServiceSubscription = this.cartService.channel$.subscribe(products => {
      console.log(products);
      this.isEmpty = products.length === 0;
    });
  }

  ngOnDestroy() {
    this.cartServiceSubscription.unsubscribe();
  }

  removeProduct(product: IProduct) {
    this.cartService.removeProduct(product);
  }

}
