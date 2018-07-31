import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-dependent-fields',
    templateUrl: './dependent-fields.component.html',
    styleUrls: ['./dependent-fields.component.sass']
})
export class DependentFieldsComponent {
    @Input() public group;
}
