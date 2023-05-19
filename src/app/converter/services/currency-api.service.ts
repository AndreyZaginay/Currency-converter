import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { CURRENCY_API } from '../tokens/currency.api';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  private readonly apiKey: string = 'nhd8bUb3PIpWLMyxz38L9Wp6phnAPgMP';

  currency: any[] = [];

  constructor(private readonly http: HttpClient, @Inject(CURRENCY_API) private readonly api: string) { }

  getCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}?apikey=${this.apiKey}`)
  }

  getStatickCurrency(baseCurrency: string) {
    return this.http.get<any[]>(`${this.api}?apikey=${this.apiKey}&base=${baseCurrency}`)
  }
}


