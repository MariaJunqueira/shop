import { Injectable } from '@angular/core';

import { PRODUCTS } from 'assets/data/products.data';
import { of } from 'rxjs';

@Injectable()
export class ProductService {
  constructor() { }

  getAllProducts() {
    return of(PRODUCTS);
  }

}
