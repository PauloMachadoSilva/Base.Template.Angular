import {fullNameValidator} from 'shared/validators/full-name/full-name.validator';
import {FormControl} from '@angular/forms';

describe('fullNameValidator', () => {
    describe('valid', () => {
        it('should be valid with two words', () => {
            const value = 'paul rogers';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toBeNull();
        });

        it('should be valid with two words with at least 2 letters', () => {
            const value = 'pa ro';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toBeNull();
        });

        it('should be valid with more than two words', () => {
            const value = 'paul daniel rogers';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toBeNull();
        });
    });

    describe('fullName', () => {
        it('should be invalid with numbers', () => {
            const value = '1paul rogers';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toEqual({'fullName': value});
        });

        it('should be invalid with symbols', () => {
            const value = '@paul rogers';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toEqual({'fullName': value});
        });

        it('should be invalid with just one word', () => {
            const value = 'paul';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toEqual({'fullName': value});
        });

        it('should be invalid with one word and a single letter', () => {
            const value = 'paul r';
            const control = new FormControl(value);
            expect(fullNameValidator(control)).toEqual({'fullName': value});
        });
    });
});
