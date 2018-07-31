import {Component} from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.sass']
})
export class FormComponent {
    public hasDependents = false;

    public toggleDependents() {
        this.hasDependents = !this.hasDependents;
    }

    public handleSubmit(planForm) {
        return planForm.value;
    }
}
