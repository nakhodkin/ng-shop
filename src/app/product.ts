import { Category } from './category.enum';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  reviews?: Array<string>;
}
