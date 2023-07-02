import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CurrencyApiService } from './services/currency-api.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{
  public dollarExchangeRate$: Observable<string> = this.currencyApiService.getConvertedCurrency('USD', 'UAH', 1).pipe(
    map(result => result.new_amount)
  );
  public euroExchangeRate$: Observable<string> = this.currencyApiService.getConvertedCurrency('EUR', 'UAH', 1).pipe(
    map(result => result.new_amount)
  );

  public currencies: string[] = ['UAH', 'USD', 'EUR'];
  public firstCurrency!: string;
  public secondCurrency!: string;
  public currencyAmount!: number;
  public converterResult$!: Observable<number>;
  
  constructor (private readonly currencyApiService: CurrencyApiService) {}

  ngOnInit(): void {
  }

  getCurrency() {
    if(!this.firstCurrency || !this.secondCurrency || ! this.currencyAmount) return;
  this.converterResult$ = this.currencyApiService.getConvertedCurrency(this.firstCurrency, this.secondCurrency, this.currencyAmount)
    .pipe(map(currency => currency.new_amount));
  }
}
