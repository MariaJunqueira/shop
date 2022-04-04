import { Component, Input } from '@angular/core';

import { Product } from '@models/product';
import { CurrencyHelper } from '@services/currency/currency.helper';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {

  @Input() product: Product;

  constructor(private currencyHelper: CurrencyHelper) { }

  get value() {
    return this.currencyHelper.convertValue(this.product.value);
  }

  get symbol() {
    return this.currencyHelper.currency?.symbol;
  }
}
