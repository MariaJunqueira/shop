import { Product } from './product';

export class Basket {
  product: Product;
  quantity: number;

  /**
   * @param product 
   * @param quantity 
   */
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getProduct() {
    return this.product;
  }

  getQuantity() {
    return this.quantity;
  }
}
