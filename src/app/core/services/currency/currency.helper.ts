import { Injectable } from "@angular/core";
import { Currency } from "@models/currency";
import { CurrencyApi } from "@models/currency-api";
import { DEFAULT_API_CURRENCY, DEFAULT_PRODUCTS_CURRENCY } from "app/core/constants/currency.constants";

@Injectable()
export class CurrencyHelper {

  #currency: Currency;
  /*
    This double conversion is need because the free option of the api doesn't offer a 
    "change source" option so is necessary to convert from USD to GBP and then to the 
    currency choose by the user
    TODO: In the case of change for a paying plan of the api, change this function
    */
  convertCurrency(currencies: CurrencyApi, currentCurrency: string) {
    const GBP = DEFAULT_API_CURRENCY.quote / currencies.quotes[`${DEFAULT_API_CURRENCY.symbol}${DEFAULT_PRODUCTS_CURRENCY}`];
    const NEW_CURRENCY = GBP * currencies.quotes[`${DEFAULT_API_CURRENCY.symbol}${currentCurrency}`];
    this.currency = new Currency(currentCurrency, NEW_CURRENCY);
  }

  convertValue(value: number) {
    return (value * this.currency?.quote).toFixed(2);
  }

  get currency(): Currency {
    return this.#currency;
  }

  set currency(currency: Currency) {
    this.#currency = currency;
  }

}