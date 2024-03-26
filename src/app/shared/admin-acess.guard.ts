import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const adminAcessGuard: CanActivateFn = (route): boolean => {
  const userservice = inject(UserService);
  const router: Router = inject(Router);
  console.log(route.url[0].path);

  if (route.url[0].path == 'fooddetails') {
    if (userservice.adminAcess) return true;
    else {
      router.navigate(['/login']);
      return false;
    }
  } else {
    if (userservice.adminAcess) return true;
    else return false;
  }
};
