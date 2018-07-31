import {AbstractControl, ValidatorFn} from '@angular/forms';

export function regexpValidator(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        return !reg.test(control.value) ? {'regexp': true} : null;
    };
}
