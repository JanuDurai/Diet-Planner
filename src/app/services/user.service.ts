import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { jsonDataUrl } from '../shared/constants/user.constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // TODO: move the baseurl to env file ==> http://localhost:3000
  public url = jsonDataUrl.user;
  public loggedIn: boolean;

  constructor(private httpReq: HttpClient) {}

  addUser(data: any) {
    this.httpReq.post(this.url, data).subscribe((d) => console.log(d));
  }

  getAllUserDetails() {
    return this.httpReq.get(this.url);
  }

  setUserName(username: string) {
    sessionStorage.setItem('username', username);
  }

  DeleteUserName() {
    sessionStorage.removeItem('username');
  }

  getUserDetail(username: any) {
    return this.httpReq.get(this.url + '?userusername=' + username);
  }

  getUserName(): string | undefined {
    return sessionStorage.getItem('username')?.toString();
  }

  // TODO: updateLoginStatus

  updateLoginStatus() {
    if (sessionStorage.getItem('username') == null) this.loggedIn = false;
    else this.loggedIn = true;
  }

  // TODO: update call
  updateUserDetails(id: number, userData: any) {
    console.log(this.url + '?id=' + id, userData);
    console.log(`service: `, userData);
    console.log(id);
    this.httpReq.put(this.url + '?id=' + id, userData);
  }
}
