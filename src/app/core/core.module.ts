import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreRoutes } from 'core/core.routes';

@NgModule({
    imports: [
        RouterModule.forChild(CoreRoutes)
    ]
})
export class CoreModule { }
