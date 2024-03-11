import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { Validators } from '@angular/forms';
import { jsonDataUrl } from '../shared/constants/user.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userData: any;
  public url = jsonDataUrl.user;
  public loginvalid: boolean = false;
  public loginDetailStatus: boolean = false;

  private route: Router = inject(Router);

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

  public checkPassword() {
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
              this.userService.updateLoginStatus();
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
