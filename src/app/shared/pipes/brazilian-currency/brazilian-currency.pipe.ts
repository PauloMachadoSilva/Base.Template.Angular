import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({name: 'brazilianCurrency'})
export class BrazilianCurrencyPipe extends CurrencyPipe implements PipeTransform {
    transform(value: any): string | null {
        return super.transform(value, 'BRL', 'symbol', '1.2-2');
    }
}
