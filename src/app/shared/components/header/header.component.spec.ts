import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HeaderComponent } from 'shared/components/header/header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let navLinks: HTMLElement;
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            providers: [
                { provide: Router, useValue: routerSpy }
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        navLinks = fixture.nativeElement.querySelectorAll('a');
        fixture.detectChanges();
    });

    it('should create the counter page', async(() => {
        expect(component).toBeDefined();
    }));

    it('should tell router to navigate when link clicked', () => {
        navLinks[0].click();
        const spy = routerSpy.navigate as jasmine.Spy;
        const navArgs = spy.calls.mostRecent().args[0];
        expect(navArgs[0]).toBe('/about');
    });

    it('should tell router to navigate when link clicked', () => {
        navLinks[1].click();
        const spy = routerSpy.navigate as jasmine.Spy;
        const navArgs = spy.calls.mostRecent().args[0];
        expect(navArgs[0]).toBe('/counter');
    });
});
