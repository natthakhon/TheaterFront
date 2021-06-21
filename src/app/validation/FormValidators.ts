import {ValidationErrors,ValidatorFn,AbstractControl} from '@angular/forms'

export class FormValidators{
    public static PasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');      
        return regex.test(control.value) ? null : { password: 'Password must contain at least 1 lower character, 1 number, 1 special character, 1 capital with at least 8 characters length' };
      };
  }
  
  