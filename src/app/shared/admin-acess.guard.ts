import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

export const adminAcessGuard: CanActivateFn = (
  route,
  state
): Observable<boolean> => {
  const username = sessionStorage.getItem('username');
  return inject(UserService)
    .getUserDetail(username)
    .pipe(
      map((value: any) => {

     
        return value[0].role.join('') === 'useradmin' ? true : false;
      })
    );
};
