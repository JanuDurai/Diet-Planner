import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  route: Router = inject(Router);

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.updateLoginStatus();
  }

  logout() {
    this.userService.deleteUserName();
    this.userService.updateLoginStatus();
    this.route.navigate(['login']);
  }
}
