import { TestBed, async } from '@angular/core/testing';
import { FooterComponent } from 'shared/components/footer/footer.component';
describe('FooterComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FooterComponent
            ],
        }).compileComponents();
    }));
    it('should create the footer', async(() => {
        const fixture = TestBed.createComponent(FooterComponent);
        const button = fixture.debugElement.componentInstance;
        expect(button).toBeTruthy();
    }));
});
