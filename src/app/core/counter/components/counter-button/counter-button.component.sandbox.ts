import { sandboxOf, SandboxOfConfig } from 'angular-playground';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { SandboxRouterModule } from 'app/app.routes.sandbox';
import { CounterButtonComponent } from 'core/counter/components/counter-button/counter-button.component';
import { CounterStorageService } from 'core/counter/services/counter-storage/counter-storage.service';
import { CounterService } from 'shared/services/counter/counter.service';

const sandboxConfig: SandboxOfConfig = {
    imports: [
        SandboxRouterModule,
        Angulartics2Module.forRoot([Angulartics2GoogleTagManager])
    ],
    providers: [
        CounterService,
        CounterStorageService
    ],
    label: 'Counter'
};

export default sandboxOf(CounterButtonComponent, sandboxConfig)
    .add('Simple text', {
        template: `<app-counter-button label="Clique aqui"></app-counter-button>`
    })
    .add('Big text', {
        template: `<app-counter-button label="Clique aqui caso queira ver algo muito incrível"></app-counter-button>`
    })
    .add('Stylish', {
        template: `<app-counter-button label="Estilizado"></app-counter-button>`
    });
