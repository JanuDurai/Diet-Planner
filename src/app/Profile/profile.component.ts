import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { jsonDataUrl } from '../shared/constants/user.constant';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: any;
  userDetails: any;
  url = jsonDataUrl.user;
  userData: FormGroup;
  id: number;

  constructor(
    private userservice: UserService,
    private ProfileData: FormBuilder
  ) {}

  ngOnInit(): void {
    this.username = this.userservice.getUserName();
    this.userservice.getUserDetail(this.username).subscribe({
      next: (value) => {
        this.userDetails = value;
        // TODO: change this to form builder and use set value to set the user values
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
    //  this.id = this.userDetails[0].id;
    console.log(this.userData.value.id);
    console.log(`entered data`, this.userData.value);

    this.userservice
      .updateUserDetails(this.userData.value.id, this.userData)
      .subscribe((data) => {
        console.log(`Sucessfully updated`);
      });

    //  TODO: pass username and updated data to
  }
}

//   ngOnInit(): void {
//     this.username = this.userservice.getUserName();
//     this.userservice.getUserDetail(this.username).subscribe({
//       next: (value) => {
//         this.userDetails = value;
//         console.log(`..............`, this.userDetails);

//         // TODO: change this to form builder and use set value to set the user values

//         this.updatedData = this.updateForm.group({
//           userfirstname:'',
//           userlastname: '',
//           userage: '',
//           usergender: '',
//           userheight: '',
//           userweight: '',
//           usertargetweight: '',
//           userchoice: '',
//           userusername: '',
//           userpassword: '',
//           userconfirmpassword:'',
//           role:''
//         });
//         this.updatedData.setValue(this.userDetails[0]);
//       },
//     });
//   }

//   UpdateChanges() {
//     this.id = this.userDetails[0].id;
//     this.userservice.updateUserDetails(this.id, this.updatedData);

//     //  TODO: pass username and updated data to
//   }
// }

// this.userData=this.ProfileData.group({
//   userfirstname:'',
//   userlastname: '',
//   userage: '',
//   usergender: '',
//   userheight: '',
//   userweight: '',
//   usertargetweight: '',
//   userchoice: '',
//   userusername: '',
//   userpassword: '',
//   userconfirmpassword:'',
//   role:''
// });

// this.userData.setValue(this.userDetails[0]);

// this.id = this.userDetails[0].id;
// console.log(this.id);

//   this.userservice.updateUserDetails(this.id,this.userData);
// console.log(`entered data`, this.userData);
