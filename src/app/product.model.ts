import { Category } from './category.enum';
import { IProduct } from './product';

export class ProductModel implements IProduct {

  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean,
    public reviews?: Array<string>
  ) {}

}
