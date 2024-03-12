import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userData: any;
  public loginvalid: boolean = false;

  private route: Router = inject(Router);

  constructor(
    private userService: UserService,
    private loginForm: FormBuilder
  ) {}
  ngOnInit() {}

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
          if (Data.username === this.loginDetails.value.username) {
            if (Data.password === this.loginDetails.value.password) {
              this.userService.setUserName(Data.username);
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

  reenterPasswordError() {
    this.loginvalid = false;
  }
}
