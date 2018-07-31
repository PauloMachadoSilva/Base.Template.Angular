import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { AppComponent } from 'app/app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let angulartics2GoogleTagManagerStub: Partial<Angulartics2GoogleTagManager>;

    beforeEach(async(() => {
        angulartics2GoogleTagManagerStub = {};

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                {provide: Angulartics2GoogleTagManager, useValue: angulartics2GoogleTagManagerStub }
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
