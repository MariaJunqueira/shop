export class Currency {
  symbol: string;
  quote: number;

  constructor(symbol: string, quote: number) {
    this.symbol = symbol;
    this.quote = quote;
  }
}
