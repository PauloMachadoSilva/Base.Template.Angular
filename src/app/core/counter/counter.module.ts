import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';

import { CounterComponent } from 'core/counter/pages/counter.component';
import { CounterButtonComponent } from 'core/counter/components/counter-button/counter-button.component';

import { CounterRoutes } from 'core/counter/pages/counter.routes';
import { CounterStorageService } from 'core/counter/services/counter-storage/counter-storage.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    declarations: [
        CounterComponent,
        CounterButtonComponent
    ],
    exports: [
        RouterModule,
        CounterComponent
    ],
    imports: [
        Angulartics2Module,
        RouterModule.forChild(CounterRoutes),
        SharedModule
    ],
    providers: [
        CounterStorageService
    ]
})
export class CounterModule { }
