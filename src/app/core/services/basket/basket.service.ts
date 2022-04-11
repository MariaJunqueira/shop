import { Injectable } from '@angular/core';

import { Basket } from '@models/basket';
import { Product } from '@models/product';

@Injectable()
export class BasketService {
  constructor() { }
  items: Basket[] = [];

  /**
   * @param product 
   * @param quantity 
   */
  addToBasket(product: Product, quantity: number) {
    const basket: Basket = new Basket(product, quantity);
    !this.updateItem(basket) && this.addNewItem(basket);
    this.updateBasket(basket);
  }

  /**
   * Saves the products in the basket in the local storage
   * @param basket
   */
  updateBasket(basket: Basket) {
    //TODO: send item to update in the backend
  }

  /**
   * Add a new item into the basket
   * @param basket 
   */
  addNewItem(basket: Basket) {
    this.items.push(basket)
  }

  /**
   * Try to update a item in the basket, if the item was alread added previously.
   * @param basket 
   * @returns true if the item was updated or false if it is not in the basket
   */
  updateItem(basket: Basket): boolean {
    let updated: boolean = false;
    this.items.map((item: Basket) => {
      if (item.getProduct().id === basket.getProduct().id) {
        item.quantity += basket.quantity;
        updated = item.getProduct().id === basket.getProduct().id;
      }
    });
    return updated;
  }

  /**
   * Remove a item by product from basket
   * @param product 
   */
  removeItem(product: Product) {
    this.items.filter((item: Basket) => item.getProduct().id !== product.id);
  }

  /**
   * Get all itens added in the basket
   * @returns Basket[]
   */
  getItems(): Basket[] {
    return this.items;
  }

  /**
  * Removes all itens added in the basket
  * @returns Basket[]
  */
  clearBasket() {
    this.items = [];
  }

}
