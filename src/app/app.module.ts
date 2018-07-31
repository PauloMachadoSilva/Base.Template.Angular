import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { CoreModule } from 'core/core.module';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from 'app/app.component';
import { routes } from 'app/app.routes';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        RouterModule.forRoot(routes),
        Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
