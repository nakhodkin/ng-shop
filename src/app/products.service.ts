import { Injectable } from '@angular/core';

import { IProduct } from './product';
import { ProductModel } from './product.model';
import { Category } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<IProduct> {
    return [
      new ProductModel('Iphone X', 'The best mobile phone', 600, Category.Phones, true),
      new ProductModel('Macbook Pro', 'The best notebook', 2000, Category.Notebooks, true),
    ];
  }
}
