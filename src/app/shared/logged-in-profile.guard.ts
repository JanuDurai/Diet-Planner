import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { UserService } from '../services/user.service';

export const loggedInProfileGuard: CanActivateFn = (route, state): boolean => {
  return route.url[0].path == 'login'
    ? inject(UserService).loggedIn == true
      ? false
      : true
    : inject(UserService).loggedIn == true
    ? true
    : false;
};
