import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from './services/currency-api.service';
import { Observable, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{
  public dollarRexchangeRate$!: Observable<string>;
  public euroRexchangeRate$!: Observable<string>;
  // public currencyList$!: Observable<> 

  constructor (private readonly currencyApiCurrency: CurrencyApiService) {}

  ngOnInit(): void {
    this.currencyApiCurrency.getCurrencies().subscribe(console.log);
    this.dollarRexchangeRate$ = this.getCurrency('USD');
    this.euroRexchangeRate$ = this.getCurrency('EUR');
  }

  getCurrency(currency: string) {
    return this.currencyApiCurrency.getStatickCurrency(currency).pipe(
      map(({rates}: any) => (rates.UAH.toFixed(2)))
    )
  }
}
