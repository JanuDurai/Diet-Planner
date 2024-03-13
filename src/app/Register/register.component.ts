import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
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
  public weight: string;
  public invalidform: boolean = false;

  private route: Router = inject(Router);

  constructor(
    private userService: UserService,
    private userData: FormBuilder
  ) {}

  ngOnInit(): void {
    this.Data = this.userData.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
            Validators.minLength(2),
          ],
        ],
        lastname: [
          '',
          [
            Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
            Validators.required,
            Validators.minLength(3),
          ],
        ],
        age: [
          '',
          [Validators.min(18), Validators.max(60), Validators.required],
        ],
        gender: ['', [Validators.required]],
        height: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        targetweight: ['', [Validators.required]],
        choice: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ],
        ],
        password: [
          '',
          [
            Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),
            Validators.required,
            Validators.minLength(8),
          ],
        ],
        confirmpassword: [
          '',
          [
            Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),
            Validators.required,
            Validators.minLength(8),
          ],
        ],
        role: [],
      },
      { validators: PasswordMatchValidation }
    );
  }

  public onsubmit() {
    if (this.Data.invalid) {
      this.invalidform = true;
    } else {
      this.invalidform = false;
      this.Data.get('role').setValue(["user"]);
      this.userService.addUser(this.Data.value).subscribe((data) => {
        console.log(`User Details added successfully`);
      });
      this.route.navigate(['login']);
    }
  }

  public changeValue(value: string) {
    this.weight = value;
  }
}
