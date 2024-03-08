import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

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
  constructor(
    private userService: UserService,
    private userData: FormBuilder
  ) {}

  ngOnInit(): void {
    this.Data = this.userData.group(
      {
        userfirstname: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
            Validators.minLength(0),
          ],
        ],
        userlastname: [
          '',
          [
            Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
            Validators.required,
            Validators.minLength(3),
          ],
        ],
        userage: [
          '',
          [Validators.min(18), Validators.max(60), Validators.required],
        ],
        usergender: ['', [Validators.required]],
        userheight: ['', [Validators.required]],
        userweight: ['', [Validators.required]],
        usertargetweight: ['', [Validators.required]],
        userchoice: ['', [Validators.required]],
        userusername: [
          '',
          [
            Validators.minLength(4),
            Validators.maxLength(15),
            Validators.required,
          ],
        ],
        userpassword: [
          '',
          [
            Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),
            Validators.required,
            Validators.minLength(8),
          ],
        ],
        userconfirmpassword: [
          '',
          [
            Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),
            Validators.required,
            Validators.minLength(8),
          ],
        ],
      },
      { validators: PasswordMatchValidation }
    );
  }

  onsubmit() {
    if (this.Data.invalid) {
      this.invalidform = true;
    } else {
      this.invalidform = false;
      this.userService.addUser(this.Data.value);
    }
  }
  get userfirstname() {
    return this.Data.controls['userfirstname'];
  }

  changeValue(value: string) {
    this.weight = value;
  }
}
