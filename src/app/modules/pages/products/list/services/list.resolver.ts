import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '@models/product';
import { ProductService } from '@services/product/product.service';

@Injectable()
export class ListResolver {
  constructor(private productService: ProductService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productService.getAllProducts();
  }
}
