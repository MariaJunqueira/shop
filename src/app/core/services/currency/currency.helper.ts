import { Injectable } from "@angular/core";

import { Currency } from "@models/currency";
import { CurrencyApi } from "@models/currency-api";
import { DEFAULT_API_CURRENCY, DEFAULT_PRODUCTS_CURRENCY } from "app/core/constants/currency.constants";

@Injectable()
export class CurrencyHelper {

  #currency: Currency;
  /**
   * This double conversion is need because the free option of the api doesn't offer a 
   * "change source" option so is necessary to convert from USD to GBP and then to the 
   * currency chosen by the user
   * @todo In the case of change for a paying plan of the api, change this function
   * @param {CurrencyApi} currencies - The return of the currency api
   * @param {string} currentCurrency - The currency chosen by the user
   * @public
   */
  convertCurrency(currencies: CurrencyApi, currentCurrency: string) {
    const GBP = DEFAULT_API_CURRENCY.quote / currencies.quotes[`${DEFAULT_API_CURRENCY.symbol}${DEFAULT_PRODUCTS_CURRENCY}`];
    const NEW_CURRENCY = GBP * currencies.quotes[`${DEFAULT_API_CURRENCY.symbol}${currentCurrency}`];
    this.currency = new Currency(currentCurrency, NEW_CURRENCY);
  }

  /**
   * Calculates the value in the currency chosen by the user 
   * @param {number} value - The actual value of the product in GBP
   * @returns {number} - The value converted to the current currency
   * @public
   */
  convertValue(value: number): number {
    return parseFloat((value * this.currency?.quote).toFixed(2));
  }

  /**
   * Get accessor of the private variable currency
   * @return {Currency} - currency 
   * @public
   */
  get currency(): Currency {
    return this.#currency;
  }

  /**
   * Set accessor of the private variable currency
   * @params {Currency} - currency 
   * @public
   */
  set currency(currency: Currency) {
    this.#currency = currency;
  }

}