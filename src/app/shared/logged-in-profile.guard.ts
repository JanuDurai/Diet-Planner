import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../services/user.service';

export const loggedInProfileGuard: CanActivateFn = (route) => {
  const username = sessionStorage.getItem('username');
  // const router = inject(Router);
  // const userservice = inject(UserService);

  // if (route.url[0].path == 'login' || route.url[0].path == 'register') {
  //   // if (username) {
  //   //   return router.createUrlTree(['/home']);
  //   // } else {
  //     return router.createUrlTree(['/login']);
  //   }
  // // }
  //  else if(username)
  //      return router.createUrlTree(['/home']);
  //      else
  //      return router.createUrlTree(['/login']);
  //  }



//  if(route.url[0].path == 'login' || route.url[0].path=='register' && username == null )
//               return true;
//         else if(route.url[0].path == 'login' || route.url[0].path=='register' && username)
//              return false;
//         else   if (route.url[0].path != 'login' && route.url[0].path != 'register'&& username) 
//              return true
        
//         if(route.url[0].path != 'login' && route.url[0].path !='register' && username == null )
//              return false;
         
//       else 

//      return false;  



     if(route.url[0].path == 'login' || route.url[0].path == 'register'){
       if(username){
         return false;
       }
       else
        return true;
     }
     else if(username){
       return true;
     }
     else
      return false;

  



};