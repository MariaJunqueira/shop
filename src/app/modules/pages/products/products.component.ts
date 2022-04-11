import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '@services/currency/currency.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrency();
  }

  getCurrency() {
    this.currencyService.getCurrencies().subscribe();
  }
}
