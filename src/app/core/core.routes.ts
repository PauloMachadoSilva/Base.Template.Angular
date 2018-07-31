import { Routes } from '@angular/router';

export const CoreRoutes: Routes = [
    { path: 'about', loadChildren: 'app/core/about/about.module#AboutModule' },
    { path: 'counter', loadChildren: 'app/core/counter/counter.module#CounterModule' },
    { path: 'form', loadChildren: 'app/core/form/form.module#FormModule' }
];
