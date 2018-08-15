import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable, Subject } from 'rxjs';
import { filter, scan, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private channel = new Subject<IProduct>();
  public channel$: Observable<Array<IProduct>> = this.channel.asObservable().pipe(
    startWith([]),
    scan((acc, value) => {
      const indexValue = acc.indexOf(value);
      if (indexValue !== -1) {
        return [
          ...acc.slice(0, indexValue),
          ...acc.slice(indexValue + 1)
        ];
      }
      return acc.concat(value);
    })
  );

  constructor() { }

  addProduct(product: IProduct): void {
    product.isAvailable = false;
    this.channel.next(product);
  }

  removeProduct(product: IProduct): void {
    product.isAvailable = true;
    this.channel.next(product);
  }

}
