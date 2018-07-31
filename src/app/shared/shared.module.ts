import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HeaderComponent } from 'shared/components/header/header.component';
import { FooterComponent } from 'shared/components/footer/footer.component';
import { CounterService } from 'shared/services/counter/counter.service';
import { BrazilianCurrencyPipe } from 'shared/pipes/brazilian-currency/brazilian-currency.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BrazilianCurrencyPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ReactiveFormsModule,
        BrazilianCurrencyPipe,
        CurrencyPipe
    ],
    providers: [
        CounterService
    ]
})
export class SharedModule { }
