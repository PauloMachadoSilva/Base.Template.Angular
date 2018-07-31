import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AboutComponent } from 'core/about/pages/about.component';

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the about page', () => {
        expect(component).toBeDefined();
    });
});
