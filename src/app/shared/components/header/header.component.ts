import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.template.html',
    styleUrls: ['./_header.sass']
})
export class HeaderComponent {
    constructor(private router: Router) {}

    public goToStep(step) {
        this.router.navigate(step);
    }
}
