import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { PasswordMatchValidation } from '../shared/passwordCheck.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  gender =['Male','Female'];
  choice =['Weight Loss','Weight Gain', 'Weight Maintain'];
  weight!:string;
  invalidform:boolean=false;

  constructor(private userService:UserService){}
    Data= new FormGroup({
    userfirstname:new FormControl('',[Validators.required,Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),Validators.minLength(0)]),
      userlastname:  new FormControl('',[Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),Validators.required,Validators.minLength(3)]),
      userage: new FormControl('',[Validators.min(18), Validators.max(60),Validators.required]),
      usergender:new FormControl('',[Validators.required]),
      userheight: new FormControl('',[Validators.required]),
      userweight:new FormControl('',[Validators.required]),
      usertargetweight: new FormControl('',[Validators.required]),
      userchoice: new FormControl('',[Validators.required]),
      userusername: new FormControl('',[Validators.minLength(4),Validators.maxLength(15),Validators.required]),
      userpassword: new FormControl('',[Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),Validators.required,Validators.minLength(8)]),
      userconfirmpassword: new FormControl('',[Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),Validators.required,
      Validators.minLength(8)])
   },{validators:PasswordMatchValidation});
   
 onsubmit(){
        if(this.Data.invalid){
            this.invalidform=true; 
        }
        else {
           this.invalidform=false;
           this.userService.addUser(this.Data.value);
        }
       
  }
 get userfirstname(){
    return this.Data.controls['userfirstname'];
 }


 changeValue(value:string){
     this.weight = value;

 }


}
