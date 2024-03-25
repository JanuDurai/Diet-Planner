import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

export const adminAcessGuard: CanActivateFn = (): boolean => {
  const userservice = inject(UserService);
  // const username = userservice.getUserName();
  // return userservice
  //   .getUserDetail(username)
  //   .pipe(
  //     map((value: any) => {
  //       // return value[0].role.join('') === 'useradmin' ? true : false;
  //     })
  //   );
  return userservice.adminAcess==true ? true:false;

};
