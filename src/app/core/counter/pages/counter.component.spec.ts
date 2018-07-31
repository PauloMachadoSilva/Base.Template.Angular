import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CounterComponent } from 'core/counter/pages/counter.component';
import { BrazilianCurrencyPipe } from 'shared/pipes/brazilian-currency/brazilian-currency.pipe';

describe('CounterComponent', () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CounterComponent,
                BrazilianCurrencyPipe
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the counter page', async(() => {
        expect(component).toBeDefined();
    }));
});
