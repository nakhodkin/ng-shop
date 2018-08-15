import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../product';
import { Category } from '../category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product')
  product: IProduct;

  @Output('buy')
  buy: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  get imageUrl() {
    if (this.product.category === Category.Notebooks) {
      return 'https://picsum.photos/286/180?image=0';
    }

    if (this.product.category === Category.Phones) {
      return 'https://picsum.photos/286/180?image=3';
    }
  }

  ngOnInit() {
  }

  onBuy(): void {
    this.buy.emit(this.product);
  }

}
