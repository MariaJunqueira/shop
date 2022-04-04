import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '@models/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>('../../../../assets/data/products.json');
  }
}
