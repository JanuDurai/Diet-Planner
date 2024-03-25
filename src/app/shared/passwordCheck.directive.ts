import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordMatchValidation: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {
  const password = form.get('password');
  const confirmpassword = form.get('confirmpassword');

  if (!password || !confirmpassword) {
    return null;
  }

  if (confirmpassword.errors && !confirmpassword.errors?.['passwordMismatch']) {
    return null;
  }

  if (password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    confirmpassword.setErrors(null);
    return null;
  }
  
};

