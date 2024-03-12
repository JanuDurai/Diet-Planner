import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: any;
  userDetails: any;
  userData: FormGroup;
  id: string;

  constructor(
    private userservice: UserService,
    private ProfileData: FormBuilder
  ) {}

  ngOnInit(): void {
    this.username = this.userservice.getUserName();
    this.userservice.getUserDetail(this.username).subscribe({
      next: (value) => {
        this.userDetails = value;
        this.userData = this.ProfileData.group({
          id: [''],
          firstname: [''],
          lastname: [''],
          age: [''],
          gender: [''],
          height: [''],
          weight: [''],
          targetweight: [''],
          choice: [''],
          username: [''],
          password: [''],
          confirmpassword: [''],
          role: [''],
        });

        this.userData.patchValue(this.userDetails[0]);
      },
    });
  }

  UpdateChanges() {
    console.log(this.userData.value.id);
    console.log(`entered data`, this.userData.value);
    this.userData.value.confirmpassword=this.userData.value.password;
    this.userservice
      .updateUserDetails(this.userData.value.id, this.userData)
      .subscribe((data) => {
        console.log(`Sucessfully updated`);
      });
  }
}
