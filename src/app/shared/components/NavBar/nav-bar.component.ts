import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
 
  route:Router=inject(Router);

  constructor(public userService:UserService){}

  ngOnInit(): void {
    this.userService.isloggedIn();  
    
  }


  logout(){
    this.userService.DeleteUserName();
    this.userService.isloggedIn();
    this.route.navigate(['login']);
  }
  



}
