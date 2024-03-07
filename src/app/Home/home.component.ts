import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DietService } from '../services/diet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private userService:UserService,
      private dietservice:DietService){      
}
  ngOnInit(): void {
      // this.userService.show();
  }


}
