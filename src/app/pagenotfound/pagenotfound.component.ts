import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent {
  username: any;
  constructor(private userservice: UserService, private route: Router) {}

  backtopage() {
    this.username = this.userservice.getUserName();
    if (this.username == null) {
      this.route.navigate(['/login']);
    } else {
      this.route.navigate(['/home']);
    }
  }
}
