import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const adminAcessGuard: CanActivateFn = (): boolean => {
  const userservice = inject(UserService);
  return userservice.adminAcess == true ? true : false;
};
