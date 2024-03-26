import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { PasswordMatchValidation } from '../shared/passwordCheck.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public gender = ['Male', 'Female'];
  public choice = ['Weight Loss', 'Weight Gain', 'Weight Maintain'];
  public Data: any;
  public invalidform = false;
  public targetweight: string;

  private route: Router = inject(Router);

  constructor(
    private userService: UserService,
    private userData: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.Data = this.userData.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-Za-z]+(?: [a-zA-Z]+)*$/),
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        lastname: [
          '',
          [
            Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        age: [
          '',
          [Validators.min(18), Validators.max(60), Validators.required],
        ],
        gender: ['', [Validators.required]],
        height: [
          '',
          [Validators.required, Validators.min(55), Validators.max(272)],
        ],
        weight: [
          '',
          [Validators.required, Validators.min(30), Validators.max(650)],
        ],
        targetweight: [0, Validators.required],
        choice: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.pattern(/^[A-za-z]+$/),
            Validators.minLength(4),
            Validators.maxLength(15),
            Validators.required,
          ],
        ],
        password: [
          '',
          [
            Validators.pattern(/^[A-za-z0-9@#$%]+$/),
            Validators.required,
            Validators.minLength(8),
          ],
        ],
        confirmpassword: [
          '',
          [Validators.pattern(/^[A-za-z0-9@#$%]+$/), Validators.required],
        ],
        role: [''],
      },
      { validators: PasswordMatchValidation }
    );
    this.Data.get('role').setValue(['user']);
  }

  public onsubmit() {
    if (this.Data.invalid) {
      this.invalidform = true;
    } else {
      this.invalidform = false;
      this.userService.addUser(this.Data.value).subscribe(() => {
        console.log(`User Details added successfully`);
        this.route.navigate(['login']);
        this.toastr.success('Registered successfully');
      });
    }
  }

  public invalidFormError() {
    this.invalidform = false;
  }
}
