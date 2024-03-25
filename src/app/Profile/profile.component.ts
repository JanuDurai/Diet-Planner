import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { PasswordMatchValidation } from '../shared/passwordCheck.directive';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userDetails: any;
  public userData: FormGroup;
  private username: any;
  public gender = ['Male', 'Female'];
  public choice = ['Weight Loss', 'Weight Gain', 'Weight Maintain'];
  public targetweightRange = [0.25,0.5,0.75,1]
  public targetweightinrange: number;
  public userDetailstatus: boolean = false;
  public confirmpasswordvisible:boolean=false;

  constructor(
    private userservice: UserService,
    private ProfileData: FormBuilder,
    private updatetoast:ToastrService
  ) {}

  ngOnInit(): void {
    this.username = this.userservice.getUserName();
    this.userservice.getUserDetail(this.username).subscribe({
      next: (value) => {
        this.userDetails = value;

        this.userData = this.ProfileData.group(
          {
            id: [''],
            firstname: [
              '',
              [
                Validators.required,
                Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
                Validators.minLength(3),
                Validators.maxLength(20)
              ],
            ],
            lastname: [
              '',
              [
                Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
              ],
            ],
            age: [
              '',
              [Validators.min(18), Validators.max(60), Validators.required],
            ],
            gender: ['', [Validators.required]],
            height: ['', [Validators.required]],
            weight: ['', [Validators.required]],
            targetweight: [''],
            choice: ['', [Validators.required]],
            username: [
              '',
              [
                Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
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
              [
                Validators.pattern(/^[A-za-z0-9@#$%]+$/),
              ],
            ],
            role: [''],
          },
          { validators: PasswordMatchValidation }
        );

        this.userData.patchValue(this.userDetails[0]);
      },
    });
  }

  public updateChanges() {
    if (this.userData.valid) {
      if (this.userData.value.choice === 'Weight Maintain')
          this.userData.get('targetweight')?.setValue(0);
      else
           this.userData.value.targetweight=   parseFloat(this.userData.value.targetweight)
      
        console.log(`...............`,this.userData.value.targetweight);
        this.userservice
        .updateUserDetails(this.userData.value.id, this.userData)
        .subscribe(() => {
          console.log(`Successfully updated`);
          this.confirmpasswordvisible=false;

          this.updatetoast.success("Updated successfully");
        });
    } else {
      this.userDetailstatus = true;
    }
  }

  confirmpassworInputDisplay() {
    this.confirmpasswordvisible=true;
    this.userData.get('confirmpassword')?.setValue('');
  }

  userDetailsStatusUpdate() {
    this.userDetailstatus = false;
  }
}
