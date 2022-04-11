import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrencyHelper } from '@services/currency/currency.helper';
import { CurrencyService } from '@services/currency/currency.service';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductModule } from '../../components/product/product.module';
import { SearchModule } from '../../components/search/search.module';
import { SortModule } from '../../components/sort/sort.module';
import { ListComponent } from './list/list.component';
import { ListResolver } from './list/services/list.resolver';
import { ProductsComponent } from './products.component';
import { productsRoutesModule } from './products.routes.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild(productsRoutesModule),
    SearchModule,
    SortModule,
  ],
  declarations: [ProductsComponent, ListComponent],
  providers: [ProductService, ListResolver, CurrencyService, CurrencyHelper],
})
export class ProductsModule { }
