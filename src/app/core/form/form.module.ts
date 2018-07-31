import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from 'core/form/form-routing.module';
import { FormComponent } from 'core/form/pages/form/form.component';
import { PlanFormComponent } from 'core/form/components/plan-form/plan-form.component';
import { DependentFieldsComponent } from 'core/form/components/dependent-fields/dependent-fields.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormRoutingModule
    ],
    declarations: [
        FormComponent,
        PlanFormComponent,
        DependentFieldsComponent
    ],
    exports: [
        FormRoutingModule,
        FormComponent
    ]
})
export class FormModule {}
