import { Product } from './product';

/**
 * Class representing the Basket 
 */
export class Basket {
  product: Product;
  quantity: number;

  /**
   * @constructor
   * @param {Product} product 
   * @param {number} quantity 
   */
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  /**
   * @returns {Product} The product added in to the Basket
   * @public 
   */
  getProduct(): Product {
    return this.product;
  }

  /**
  * @returns {number} The quantity of the product added in the Basket
  * @public 
  */
  getQuantity(): number {
    return this.quantity;
  }
}
