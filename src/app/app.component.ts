import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    constructor(private angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {}
}
