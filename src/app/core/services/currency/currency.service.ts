import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { CurrencyApi } from '@models/currency-api';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { CurrencyHelper } from './currency.helper';
import { DEFAULT_PRODUCTS_CURRENCY } from 'app/core/constants/currency.constants';

@Injectable()
export class CurrencyService {
  private currencyApi = environment.currencyApi;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private currencyHelper: CurrencyHelper) { }

  /**
   * 
   * @returns {Observable<CurrencyApi>} A observable with the api request return
   * @throws {Error} - Error message
   * @public
   */
  getCurrencies(): Observable<CurrencyApi> {
    let currentCurrency: string = this.getCurrency();
    let url = `${this.currencyApi.url}?access_key=${this.currencyApi.access_key}&currencies=${currentCurrency},${DEFAULT_PRODUCTS_CURRENCY}&format=1`;
    return this.http.get<CurrencyApi>(url).pipe(
      tap((currencies: CurrencyApi) => this.mapCurrencies(currencies, currentCurrency))
    );
  }


  /**
   * Maps the currencies returned by the api to verify it was or not a successful request
   * @private
   */
  private mapCurrencies(currencies: CurrencyApi, currentCurrency: string) {
    if (!currencies.success) {
      throw new Error("Houston we have a problem");
    }

    this.currencyHelper.convertCurrency(currencies, currentCurrency);
  }


  /**
   * Function to set the current currency chosen by the user
   * @param {string} currency - The current currency to be stored in the local storage
   * @public 
   */
  setCurrency(currency: string) {
    this.localStorageService.set('currency', currency);
  }

  /**
   * Function to get the current currency chosen by the user
   * @returns {string} - The current currency stored in the local storage
   * @public 
   */
  getCurrency(): string {
    return this.localStorageService.get('currency');
  }
}
