import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { jsonDataUrl } from '../shared/constants/user.constant';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../shared/userdataInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = jsonDataUrl.user;
  public adminAcess = false;
  public loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpReq: HttpClient) {}

  public addUser(userdata: UserDetails) {
    return this.httpReq.post(this.userUrl, userdata);
  }

  public getAllUserDetails() {
    return this.httpReq.get(this.userUrl);
  }

  public setUserName(username: string) {
    sessionStorage.setItem('username', username);
  }

  public deleteUserName() {
    sessionStorage.removeItem('username');
  }

  public getUserDetail(username: any) {
    return this.httpReq.get(this.userUrl + '?username=' + username);
  }

  public getUserName() {
    return sessionStorage.getItem('username')?.toString();
  }

  public updateUserDetails(id: string, userData: any) {
    this.deleteUserName();
    this.setUserName(userData.value.username);
    return this.httpReq.put(`${this.userUrl}/${id}`, userData.value);
  }

  public updateLoginStatus() {
    const username = this.getUserName();
    if (username == null) this.loginStatus.next(false);
    else {
      this.loginStatus.next(true);
      this.getUserDetail(username).subscribe((value: any) => {
        value[0].role.join('') == 'useradmin'
          ? (this.adminAcess = true)
          : (this.adminAcess = false);
      });
    }
  }

  public isloggedIn() {
    return this.loginStatus.getValue() == true ? true : false;
  }
}
