import { Component, OnInit } from '@angular/core';

import { DietService } from 'src/app/services/diet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss'],
})
export class FoodPlanComponent implements OnInit {
  public foodData: any;
  public username: string | undefined;
  public userDetail: any;
  public foodCategory = [
    {
      label: 'BREAKFAST',
      name: 'breakfast',
    },
    {
      label: 'LUNCH',
      name: 'lunch',
    },
    {
      label: 'DINNER',
      name: 'dinner',
    },
  ];

  constructor(
    private dietUser: DietService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.username = this.userService.getUserName();
    this.userService.getUserDetail(this.username).subscribe((data) => {
      this.userDetail = data;
      this.dietUser
        .calculateDailyCalorie(this.userDetail)
        .subscribe((value: any) => {
          this.foodData = value;
          console.log(`food data`, this.foodData);
        });
    });
  }
}
