import {sandboxOf} from 'angular-playground';
import {FooterComponent} from 'shared/components/footer/footer.component';

export default sandboxOf(FooterComponent)
    .add('default', {
        template: `<div style="height: 100px; width: 100%; position: relative;">
    <app-footer></app-footer>
</div>`
    });
