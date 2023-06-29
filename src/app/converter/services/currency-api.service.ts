import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { CURRENCY_API } from '../tokens/currency.api';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  private readonly apiKey: string = 'YwtnW/A5gWe7qWjKAo6DoQ==K9ilba2hrwbZ17FN';

  constructor(private readonly http: HttpClient, @Inject(CURRENCY_API) private readonly api: string) { }

  getCurrencies(): Observable<any> {
    const options = {
      fromObject: {   
        apikey: this.apiKey
      }
    } as HttpParamsOptions;
    const params = new HttpParams(options);
    return this.http.get<any>(`${this.api}`, {params})
  }

  getConvertedCurrency(mainCurrency: string, convertedCurrency: string, amount: number) {
    // const options = {
    //   fromObject: {   
    //     apikey: this.apiKey
    //   }
    // } as HttpParamsOptions;
    // const params = new HttpParams(options);
    return this.http.get<any>(`${this.api}?want=${convertedCurrency}&have=${mainCurrency}&amount=${amount}`, {headers: {'X-Api-Key': this.apiKey}});
  }
}


