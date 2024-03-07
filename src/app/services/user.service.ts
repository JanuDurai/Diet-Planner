import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DietService } from './diet.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url = 'http://localhost:3000/user';
  loggedIn!:boolean;


  constructor(private httpReq: HttpClient) {}

  addUser(data: any) {
    this.httpReq.post(this.url, data).subscribe((d) => console.log(d));
  }
   
  getAllUserDetails(){
     return this.httpReq.get(this.url);
  }

  setUserName(username:string){
         sessionStorage.setItem("username",username);
  }
   
  DeleteUserName(){
       sessionStorage.removeItem('username');
  }

  getUserDetail(username:any){
    return this.httpReq.get(this.url + '?userusername=' + username);
  }

  getUserName(){
    return sessionStorage.getItem('username');
  }

isloggedIn(){
  if(sessionStorage.getItem('username')== null)
    this.loggedIn=false;
  else 
    this.loggedIn=true;
}


  
}
