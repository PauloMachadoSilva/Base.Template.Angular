import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {BrazilianCurrencyPipe} from 'shared/pipes/brazilian-currency/brazilian-currency.pipe';

describe('brazilianCurrency', () => {
    let pipe: BrazilianCurrencyPipe;

    beforeEach(() => {
        registerLocaleData(localePt, 'pt');
        pipe = new BrazilianCurrencyPipe('pt');
    });

    it('should transform 20 to R$ 20,00', () => {
        const value = 20;
        const transformedValue = pipe.transform(value);

        expect(transformedValue).toEqual('R$ 20,00');
    });

    it('should transform 20.2 to R$ 20,20', () => {
        const value = 20.2;
        const transformedValue = pipe.transform(value);

        expect(transformedValue).toEqual('R$ 20,20');
    });

    it('should transform 20.99 to R$ 20,99', () => {
        const value = 20.99;
        const transformedValue = pipe.transform(value);

        expect(transformedValue).toEqual('R$ 20,99');
    });

    it('should transform 20.999 to R$ 21,00', () => {
        const value = 20.999;
        const transformedValue = pipe.transform(value);

        expect(transformedValue).toEqual('R$ 21,00');
    });

    it('should transform 2000 to R$ 2.000,00', () => {
        const value = 2000;
        const transformedValue = pipe.transform(value);

        expect(transformedValue).toEqual('R$ 2.000,00');
    });

    it('should transform -20 to -R$ 20,00', () => {
        const value = -20;
        const transformedValue = pipe.transform(value);

        expect(transformedValue).toEqual('-R$ 20,00');
    });
});
