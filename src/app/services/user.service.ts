import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { jsonDataUrl } from '../shared/constants/user.constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = jsonDataUrl.user;
  public loggedIn: boolean;
  public adminAcess: boolean;

  constructor(private httpReq: HttpClient) {}

  public addUser(data: any) {
    return this.httpReq.post(this.userUrl, data);
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

  public getUserName(): string | undefined {
    return sessionStorage.getItem('username')?.toString();
  }

  public updateLoginStatus() {
    const username = sessionStorage.getItem('username');
    if (username == null) this.loggedIn = false;
    else {
      this.loggedIn = true;
      this.getUserDetail(username).subscribe((value: any) => {
        value[0].role.join('') == 'useradmin'
          ? (this.adminAcess = true)
          : (this.adminAcess = false);
      });
    }
  }

  public updateUserDetails(id: number, userData: any) {
    return this.httpReq.put(`${this.userUrl}/${id}`, userData.value);
  }
}
