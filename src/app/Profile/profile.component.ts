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
          userfirstname: [''],
          userlastname: [''],
          userage: [''],
          usergender: [''],
          userheight: [''],
          userweight: [''],
          usertargetweight: [''],
          userchoice: [''],
          userusername: [''],
          userpassword: [''],
          userconfirmpassword: [''],
          role: [''],
        });

        this.userData.setValue(this.userDetails[0]);
      },
    });
  }

  UpdateChanges() {
    console.log(this.userData.value.id);
    console.log(`entered data`, this.userData.value);

    this.userservice
      .updateUserDetails(this.userData.value.id, this.userData)
      .subscribe((data) => {
        console.log(`Sucessfully updated`);
      });
  }
}
