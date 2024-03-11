import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { jsonDataUrl } from '../shared/constants/user.constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // TODO: move the baseurl to env file ==> http://localhost:3000
  private userUrl = jsonDataUrl.user;
  private dietUrl = jsonDataUrl.diet;
  public loggedIn: boolean;
  public adminAcess: boolean = false;

  constructor(private httpReq: HttpClient) {}

  addUser(data: any) {
    this.httpReq.post(this.userUrl, data).subscribe((d) => console.log(d));
  }

  getAllUserDetails() {
    return this.httpReq.get(this.userUrl);
  }

  setUserName(username: string) {
    sessionStorage.setItem('username', username);
  }

  DeleteUserName() {
    sessionStorage.removeItem('username');
  }

  getUserDetail(username: any) {
    return this.httpReq.get(this.userUrl + '?userusername=' + username);
  }

  getUserName(): string | undefined {
    return sessionStorage.getItem('username')?.toString();
  }

  // TODO: updateLoginStatus

  updateLoginStatus() {
    const username = sessionStorage.getItem('username');
    if (username == null) this.loggedIn = false; 
    else {
      this.loggedIn = true;
      this.getUserDetail(username).subscribe((value) => {
        const userData: any = value;
        userData[0].role.join('') == 'useradmin'
          ? (this.adminAcess = true)
          : (this.adminAcess = false);
      });
    }
  }

  // TODO: update call
  updateUserDetails(id: number, userData: any) {
    console.log(`${this.userUrl}/${id}`);
    console.log(`service: `, userData.value);
   return  this.httpReq.put(`${this.userUrl}/${id}`, userData.value);
      //  this.httpReq.put(this.url + '/'+ id, userData.value);
  }


}
