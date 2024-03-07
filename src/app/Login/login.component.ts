import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  userData: any;
  public url = 'http://localhost:3000/user';
  loginusername!: any;
  loginvalid: boolean = false;

  route: Router = inject(Router);

  constructor(private userService: UserService) {}
  ngOnInit(): void {

  }

  loginDetails = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

 

  checkPassword() {
    this.userService.getAllUserDetails().subscribe({ next: (value) => {
         this.userData=value;
         console.log(this.userData);
         
         this.loginvalid=false;
         for(let Data of this.userData){
          console.log(Data.userusername,this.loginDetails.value.username);
          
          if(Data.userusername === this.loginDetails.value.username){
               if(Data.userpassword === this.loginDetails.value.password){
                this.userService.setUserName(Data.userusername);
                    this.userService.isloggedIn();
                    this.route.navigate(['home']);    
                    break;  
               }
            }
             else if(this.loginDetails.value.password=='' && this.loginDetails.value.username==''){
                  this.loginvalid=false;
                  
             }  
             else this.loginvalid=true;
         }
    } });
  }
}

