import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from 'core/about/pages/about.component';
import { AboutRoutes } from 'core/about/pages/about.routes';

@NgModule({
    declarations: [
        AboutComponent
    ],
    exports: [
        RouterModule,
        AboutComponent
    ],
    imports: [
        RouterModule.forChild(AboutRoutes)
    ]
})
export class AboutModule { }
