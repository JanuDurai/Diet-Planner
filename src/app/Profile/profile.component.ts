import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  userData: any;
  id: number;

  constructor(private httpReq: HttpClient, private userservice: UserService,
             private ProfileData:FormBuilder ) {}




  ngOnInit(): void {
    this.username = this.userservice.getUserName();
    this.userservice.getUserDetail(this.username).subscribe({
      next: (value) => {
        this.userDetails = value;
        // TODO: change this to form builder and use set value to set the user values
        this.userData=this.ProfileData.group({
          userfirstname:'',
          userlastname: '',
          userage: '',
          usergender: '',
          userheight: '',
          userweight: '',
          usertargetweight: '',
          userchoice: '',
          userusername: '',
          userpassword: '',
          userconfirmpassword:'',
        })  ;

        this.userData.setValue(this.userDetails[0]);         
      }
    });
  }

  UpdateChanges() {
     this.id = this.userDetails[0].id;
  console.log(this.id);

    this.userservice.updateUserDetails(this.id,this.userData);
  console.log(this.userData);
  
    //  TODO: pass username and updated data to
  //   this.httpReq
  //     .put(this.url + '/' + this.id, this.Data.value)
  //     .subscribe(() => this.userDetails.push(this.Data.value));
  }
}
