import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { CounterButtonComponent } from 'core/counter/components/counter-button/counter-button.component';
import { CounterService } from 'shared/services/counter/counter.service';
import { CounterStorageService } from 'core/counter/services/counter-storage/counter-storage.service';
import { Angulartics2 } from 'angulartics2';

describe('CounterButtonComponent', () => {
    let component: CounterButtonComponent;
    let fixture: ComponentFixture<CounterButtonComponent>;
    let counterServiceStub: Partial<CounterService>;
    let counterStorageServiceStub: Partial<CounterStorageService>;
    let p: HTMLElement;
    let input: HTMLInputElement;
    let angulartics2Stub;

    beforeEach(async(() => {
        angulartics2Stub = {
            eventTrack: {
                next: () => { return; }
            }
        };

        counterServiceStub = {
            increment: () => 1
        };
        counterStorageServiceStub = {
            getStore: () => 0,
            setStore: () => 0
        };

        TestBed.configureTestingModule({
            declarations: [
                CounterButtonComponent
            ],
            providers: [
                {provide: Angulartics2, useValue: angulartics2Stub },
                {provide: CounterService, useValue: counterServiceStub },
                {provide: CounterStorageService, useValue: counterStorageServiceStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterButtonComponent);
        component = fixture.componentInstance;
        p = fixture.nativeElement.querySelector('p');
        input = fixture.nativeElement.querySelector('input');
        fixture.detectChanges();
    });

    it('should create the counter button', () => {
        expect(component).toBeDefined();
    });

    it('should use default label on input', () => {
        expect(input.value).toBe('Increment');
    });

    it('should use inputed label on input', () => {
        component.label = 'Aumentar';
        fixture.detectChanges();
        expect(input.value).toBe('Aumentar');
    });

    it('should increment number of clicks', () => {
        expect(component.counter).toBe(0);
        input.click();
        expect(component.counter).toBe(1);
    });

    it('should have number of clicks on view', () => {
        component.ngOnInit();
        expect(p.textContent).toContain('Número de clicks: 0');
    });

});
