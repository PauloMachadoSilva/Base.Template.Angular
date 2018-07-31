import {regexpValidator} from 'shared/validators/regexp/regexp.validator';
import {FormControl} from '@angular/forms';

describe('regexpValidator', () => {
    describe('valid', () => {
        it('should be valid when the expression match', () => {
            const control = new FormControl('123');
            const validator = regexpValidator(/(\d){1,}/);
            expect(validator(control)).toBeNull();
        });
    });

    describe('regexp', () => {
        it('should be invalid when the expression doesn\'t match', () => {
            const control = new FormControl('rick');
            const validator = regexpValidator(/(\d){1,}/);
            expect(validator(control)).toEqual({'regexp': true});
        });
    });
});
