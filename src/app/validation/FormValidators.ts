import {ValidationErrors,ValidatorFn,AbstractControl} from '@angular/forms'

export class FormValidators{
    public static PasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const regex = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{10}$');      
        return regex.test(control.value) ? null : { password: 'Password must contain at least 1 number, 1 special character, 1 capital with total of 10 character length' };
      };
  }
  
  