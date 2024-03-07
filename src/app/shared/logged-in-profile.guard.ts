import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const loggedInProfileGuard: CanActivateFn = (route, state):boolean => {

  return inject(UserService).loggedIn == true? true:false ;

};

export const loginGuard:CanActivateFn=(route,state):boolean =>{


  return inject(UserService).loggedIn == true? false:true ;

}