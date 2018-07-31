import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PlanFormComponent} from 'core/form/components/plan-form/plan-form.component';
import {DependentFieldsComponent} from 'core/form/components/dependent-fields/dependent-fields.component';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FormComponent,
                PlanFormComponent,
                DependentFieldsComponent
            ],
            imports: [
                ReactiveFormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#toggleDependents', () => {
        it('should turn hasDependents true if the value is false', () => {
            expect(component.hasDependents).toBeFalsy();
            component.toggleDependents();
            expect(component.hasDependents).toBeTruthy();
        });

        it('should turn hasDependents false if the value is true', () => {
            expect(component.hasDependents).toBeFalsy();
            component.toggleDependents();
            component.toggleDependents();
            expect(component.hasDependents).toBeFalsy();
        });
    });

    describe('#handleSubmit', () => {
        it('should return the planForm value', () => {
            const planForm = {
                value: '4gb'
            };
            const planValue = component.handleSubmit(planForm);

            expect(planForm.value).toBe(planValue);
        });
    });
});
