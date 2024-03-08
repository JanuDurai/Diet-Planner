import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // check private or public
  userData: any;
  public url = 'http://localhost:3000/user';
  loginUserDetail: any;
  loginvalid: boolean = false;
  loginDetailStatus:boolean=false;

  route: Router = inject(Router);

  constructor(
    private userService: UserService,
    private loginForm: FormBuilder
  ) {}
  ngOnInit() {}
  // TODO: change this to form builder

  loginDetails = this.loginForm.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


    // public checkPassword(){
    //   this.userService.getUserDetail(this.loginDetails.value.username).subscribe((value)=> this.loginUserDetail =value);
    //    console.log(this.loginUserDetail);
    //    this.loginUserDetail===undefined? this.loginvalid=true:this.loginvalid=false;
       
    // }

  public checkPassword() {
    // if (this.loginDetails.invalid) {
    //   this.loginvalid = false;
    //   return;
    // }
    this.userService.getAllUserDetails().subscribe({
      next: (value) => {
        this.userData = value;
        console.log(this.userData);

        this.loginvalid = false;
        for (let Data of this.userData) {
          console.log(Data.userusername, this.loginDetails.value.username);

          if (Data.userusername === this.loginDetails.value.username) {
            if (Data.userpassword === this.loginDetails.value.password) {
              this.userService.setUserName(Data.userusername);
              this.userService.isloggedIn();
              this.route.navigate(['home']);
              break;
            }
          } else if (
            this.loginDetails.value.password == '' &&
            this.loginDetails.value.username == ''
          ) {
            this.loginvalid = false;
          } else this.loginvalid = true;
        }
      },
    });
  }

  ReEnterPasswordError() {
    this.loginvalid = false;
  }
}
