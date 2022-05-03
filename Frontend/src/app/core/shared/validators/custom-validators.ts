import { FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ALPHA_NUMERIC_ONLY = /^([A-Za-z]|[0-9])+$/;

export const ALPHA_ONLY = /^([A-Za-z]|[0-9])+$/;

export const NUMBERS_ONLY = /^([0-9])+$/;

export default class CustomValidator {

    static emailValidator(control: FormControl): { [s: string]: boolean } | any {
        if (control.value && !control.value.match(EMAIL_REGEX)) {
            return { invalid: true };
        }
    }

    static alPhaNumericValidator(control: FormControl): { [s: string]: boolean } | any {
        if (control.value && !control.value.match(ALPHA_NUMERIC_ONLY)) {
            return { invalid: true };
        }
    }

    static alPhaValidator(control: FormControl): { [s: string]: boolean } | any {
        if (control.value && !control.value.match(ALPHA_ONLY)) {
            return { invalid: true };
        }
    }

    static numbersOnlyValidator(control: FormControl): { [s: number]: boolean } | any {
        if (control.value && !control.value.match(NUMBERS_ONLY)) {
            return { invalid: true };
        }
    }

    static stringMatch(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);
            if (checkControl?.errors && !checkControl.errors['matching']) {
                return null;
            }
            if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }
    
}