import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const PasswordMatchValidation:ValidatorFn = (form:AbstractControl):ValidationErrors| null => {
  
      const password=form.get('userpassword');
      const confirmpassword = form.get('userconfirmpassword');

      if(!password || !confirmpassword) return null;

      return password.value ===confirmpassword.value ? null : {passwordMismatch: true}
}
