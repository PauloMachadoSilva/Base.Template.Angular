import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DependentFieldsComponent} from 'core/form/components/dependent-fields/dependent-fields.component';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

describe('DependentFieldsComponent', () => {
    let component: DependentFieldsComponent;
    let fixture: ComponentFixture<DependentFieldsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DependentFieldsComponent
            ],
            imports: [
                ReactiveFormsModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        const formBuilder = new FormBuilder();
        fixture = TestBed.createComponent(DependentFieldsComponent);
        component = fixture.componentInstance;
        component.group = formBuilder.group({
            payment: ['', Validators.required]
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
