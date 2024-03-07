import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  username:any;
  userDetails:any;
  url="http://localhost:3000/user";
  Data:any;
  id!:number;

  constructor(private httpReq:HttpClient, private userservice:UserService){ }

  ngOnInit(): void {
    this.username= this.userservice.getUserName();
    this.userservice.getUserDetail(this.username).subscribe({next:(value)=>{
      this.userDetails = value;
    this.Data= new FormGroup({
      userfirstname:new FormControl(this.userDetails[0].userfirstname),
      userlastname:  new FormControl(this.userDetails[0].userlastname),
      userage: new FormControl(this.userDetails[0].userage),
      usergender:new FormControl(this.userDetails[0].usergender),
      userheight: new FormControl(this.userDetails[0].userheight),
      userweight:new FormControl(this.userDetails[0].userweight),
      usertargetweight: new FormControl(this.userDetails[0].usertargetweight),
      userchoice: new FormControl(this.userDetails[0].userchoice),
      userusername: new FormControl(this.userDetails[0].userusername),
      userpassword: new FormControl(this.userDetails[0].userpassword),
      userconfirmpassword: new FormControl(this.userDetails[0].userconfirmpassword)
    })
       this.id=this.userDetails[0].id;
  }})

  }


  UpdateChanges(){
    this.httpReq.put(this.url + '/'+this.id , this.Data.value).subscribe(()=>this.userDetails.push(this.Data.value));
  }

}
