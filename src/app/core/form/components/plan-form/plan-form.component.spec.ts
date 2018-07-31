import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanFormComponent} from './plan-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DependentFieldsComponent} from 'core/form/components/dependent-fields/dependent-fields.component';
import {SimpleChange} from '@angular/core';

describe('PlanFormComponent', () => {
    let component: PlanFormComponent;
    let fixture: ComponentFixture<PlanFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
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
        fixture = TestBed.createComponent(PlanFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#ngOnChanges', () => {
        it('shouldn\'t handle dependents changes when there are no dependents', () => {
            component.ngOnChanges({});

            expect(component.dependents).toBe(null);
        });

        it('should create a control of dependents if there are dependents', () => {
            component.ngOnChanges({
                hasDependents: new SimpleChange(false, true, true)
            });

            expect(component.dependents).toBeTruthy();
        });

        it('should delete a control of dependents if there are no dependents', () => {
            component.ngOnChanges({
                hasDependents: new SimpleChange(false, true, true)
            });

            component.ngOnChanges({
                hasDependents: new SimpleChange(true, false, false)
            });

            expect(component.dependents).toBe(null);
        });
    });

    describe('#addDependent', () => {
        it('should add a dependent if there is a control of dependents', () => {
            component.ngOnChanges({
                hasDependents: new SimpleChange(false, true, true)
            });

            component.addDependent();

            expect(component.dependents.length).toBe(1);
        });
    });

    describe('#handleSubmit', () => {
        let planForm;

        beforeEach(() => {
            planForm = null;

            component.Submit = (form) => {
                planForm = form;
            };

            fixture.detectChanges();

            spyOn(component, 'Submit').and.callThrough();
        });

        it('shouldn\'t submit if the form is invalid', () => {
            component.handleSubmit();

            expect(planForm).toBeNull();
            expect(component.Submit).not.toHaveBeenCalled();
        });

        it('should submit if the form is valid', () => {
            expect(component.planForm.invalid).toBeTruthy();
            component.planForm.setValue({
                plan: '4gb',
                name: 'paul rogers'
            });
            expect(component.planForm.invalid).toBeFalsy();
            component.handleSubmit();

            expect(planForm).not.toBeNull();
            expect(component.Submit).toHaveBeenCalled();
        });
    });
});
