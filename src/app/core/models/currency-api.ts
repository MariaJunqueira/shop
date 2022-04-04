export interface CurrencyApi {
  success: boolean;
  terms?: string;
  privacy?: string;
  timestamp?: number;
  source?: string;
  quotes?: {};
  error?: {
    code: number;
    info: string;
  }
}