import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

// userLoggedIn=false

constructor(private userService:UserService){}
  ngOnInit(): void {
  }
//create function to call service and assign val

// call above function in oninit 
// userLoggoedIn(){
//   this.userService.loggedIn=true;
// }


}
