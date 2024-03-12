import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordMatchValidation: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {
  const password = form.get('password');
  const confirmpassword = form.get('confirmpassword');

  if (!password || !confirmpassword) return null;

  return password.value === confirmpassword.value
    ? null
    : { passwordMismatch: true };
};
