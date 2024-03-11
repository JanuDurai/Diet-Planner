import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const adminAcessGuard: CanActivateFn = (route, state) => {
  const username = sessionStorage.getItem('username');

  //  inject(UserService)
  //   .getUserDetail(username)
  //   .subscribe((value) => {
  //     const userDetail: any = value;
  //     return userDetail[0].role.join('') == 'useradmin' ? true : false;
  //   });

  //  userService.getUserDetail(username).subscribe((value) => {
  //   const userData: any = value;
  //   userData[0].role.join('') == 'useradmin'
  //     ? (this.adminAcess = true)
  //     : (this.adminAcess = false);
  // });
  return true;
};
