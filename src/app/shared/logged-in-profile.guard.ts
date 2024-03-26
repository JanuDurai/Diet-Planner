import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const loggedInProfileGuard: CanActivateFn = (route) => {
  const userservice = inject(UserService);
  const router: Router = inject(Router);
  const username = userservice.getUserName();
  if (route.url[0].path == 'login' || route.url[0].path == 'register') {
    if (username) {
      router.navigate(['/home']);
      return false;
    } else return true;
  } else if (username) {
    return true;
  } else router.navigate(['/login']);
  return false;
};
