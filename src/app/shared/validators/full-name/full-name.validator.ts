import {regexpValidator} from 'shared/validators/regexp/regexp.validator';
import {AbstractControl} from '@angular/forms';

const FULL_NAME_VALIDATOR_REGEX = /^[-'.,a-zA-Z\u00C0-\u017F]{2,}[\s]{1,}[a-zA-Z\u00C0-\u017F]{2,}[a-zA-Z\u00C0-\u017F\s]{0,}$/;
const fullNameRegexp = regexpValidator(FULL_NAME_VALIDATOR_REGEX);

export const fullNameValidator = (control: AbstractControl): {[key: string]: any} => {
    return fullNameRegexp(control) ? {'fullName': control.value} : null;
};
