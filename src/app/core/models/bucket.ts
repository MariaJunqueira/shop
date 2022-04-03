import { Currency } from './currency';
import { Product } from './product';

export class Bucket {
  id: number;
  products: Array<Product>;
  currency: Currency;
}
