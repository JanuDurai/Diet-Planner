import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { DietService } from 'src/app/services/diet.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  foodDetails: any;
  display = 'none';
  AddNewFood: any;
  category = ['breakfast/dinner', 'lunch'];
  sidedishArray: Array<string>;

  constructor(
    private dietservice: DietService,
    private AddData: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.dietservice.getFoodDetails().subscribe((value) => {
      this.foodDetails = value;
      // console.log(this.foodDetails);
    });

    
  }

  
}
