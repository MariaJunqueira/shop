import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";

import { environment } from 'environments/environment';

import { CurrencyApi } from '@models/currency-api';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Currency } from '@models/currency';
import { CurrencyHelper } from './currency.helper';
import { DEFAULT_PRODUCTS_CURRENCY } from 'app/core/constants/currency.constants';

@Injectable()
export class CurrencyService {
  private currencyApi = environment.currencyApi;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private currencyHelper: CurrencyHelper) { }

  getCurrency() {
    let currentCurrency: string = this.localStorageService.get('currency');
    let url = `${this.currencyApi.url}?access_key=${this.currencyApi.access_key}&currencies=${currentCurrency},${DEFAULT_PRODUCTS_CURRENCY}&format=1`;
    return this.http.get<CurrencyApi>(url).pipe(
      tap((currencies: CurrencyApi) => this.mapCurrencies(currencies, currentCurrency))
    );
  }

  mapCurrencies(currencies: CurrencyApi, currentCurrency) {
    if (!currencies.success) {
      throw new Error("Houston we have a problem");
    }

    this.currencyHelper.convertCurrency(currencies, currentCurrency);
  }

}
