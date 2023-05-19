import { InjectionToken } from "@angular/core";

export const CURRENCY_API = new InjectionToken<string>('fixer api for convertator', { factory: () => 'https://api.apilayer.com/fixer/latest' });
