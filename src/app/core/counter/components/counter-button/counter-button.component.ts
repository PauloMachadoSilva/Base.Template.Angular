import { Component, Input, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { CounterStorageService } from 'core/counter/services/counter-storage/counter-storage.service';
import { CounterService } from 'shared/services/counter/counter.service';

@Component({
    selector: 'app-counter-button',
    templateUrl: './counter-button.template.html',
    styleUrls: ['./_counter-button.sass']
})
export class CounterButtonComponent implements OnInit {
    @Input() public label = 'Increment';
    public counter: number;

    constructor(
        private angulartics2: Angulartics2,
        private counterService: CounterService,
        private counterStorageService: CounterStorageService
    ) {}

    public ngOnInit() {
        this.counter = this.counterStorageService.getStore('COUNTER') || 0;
    }

    public click() {
        this.counter = this.counterService.increment(this.counter);
        this.counterStorageService.setStore('COUNTER', this.counter);
        this.angulartics2.eventTrack.next({
            action: 'myAction',
            properties: {
                category: 'myCategory'
            },
        });
    }
}
