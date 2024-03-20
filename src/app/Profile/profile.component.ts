import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userDetails: any;
  public userData: FormGroup;
  private username: any;

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

  public updateChanges() {
    this.userData.value.confirmpassword = this.userData.value.password;
    this.userservice
      .updateUserDetails(this.userData.value.id, this.userData)
      .subscribe(() => {
        console.log(`Sucessfully updated`);
      });
  }
}
