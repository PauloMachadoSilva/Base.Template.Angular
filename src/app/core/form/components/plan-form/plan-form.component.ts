import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {fullNameValidator} from 'shared/validators/full-name/full-name.validator';

@Component({
    selector: 'app-plan-form',
    templateUrl: './plan-form.component.html',
    styleUrls: ['./plan-form.component.sass']
})
export class PlanFormComponent implements OnInit, OnChanges {
    @Input() public Submit: Function;
    @Input() public hasDependents = false;

    public planForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    private _handleDependentsChange(change) {
        if (change.currentValue) {
            this.planForm.setControl('dependents', this._formBuilder.array([]));
            return;
        }

        if (!change.firstChange) {
            this.planForm.removeControl('dependents');
        }
    }

    public ngOnInit() {
        this.createForm();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.hasDependents) {
            this._handleDependentsChange(changes.hasDependents);
        }
    }

    public addDependent() {
        this.dependents.push(this._formBuilder.group({
            payment: ['', Validators.required]
        }));
    }

    public createForm() {
        this.planForm = this._formBuilder.group({
            plan: ['', Validators.required],
            name: ['', [Validators.required, fullNameValidator]]
        });
    }

    public get dependents(): FormArray | null {
        return this.planForm.get('dependents') as FormArray;
    }

    public handleSubmit() {
        if (this.planForm.invalid) {
            return;
        }

        this.Submit(this.planForm);
    }
}
