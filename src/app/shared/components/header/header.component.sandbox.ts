import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { SandboxRouterModule } from 'app/app.routes.sandbox';
import { HeaderComponent } from 'shared/components/header/header.component';

const sandboxConfig: SandboxOfConfig = {
    imports: [
        SandboxRouterModule,
    ]
};

export default sandboxOf(HeaderComponent, sandboxConfig)
    .add('default', {
        template: '<app-header></app-header>'
    });
