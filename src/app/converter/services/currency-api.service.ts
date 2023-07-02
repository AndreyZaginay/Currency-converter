import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { CURRENCY_API } from '../tokens/currency.api';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  private readonly apiKey: string = 'YwtnW/A5gWe7qWjKAo6DoQ==K9ilba2hrwbZ17FN';

  constructor(private readonly http: HttpClient, @Inject(CURRENCY_API) private readonly api: string) { }

  getConvertedCurrency(mainCurrency: string, convertedCurrency: string, amount: number): Observable<Currency> {
    const options = {
      fromObject: {
        want: convertedCurrency,
        have: mainCurrency,
        amount: amount
      }
    } as HttpParamsOptions;
    const params = new HttpParams(options);
    return this.http.get<Currency>(`${this.api}`, {params, headers: {'X-Api-Key': this.apiKey}});
  }
}