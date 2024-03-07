import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const loggedInProfileGuard: CanActivateFn = (route, state) => {

  return inject(UserService).loggedIn == true? true:false ;

};
