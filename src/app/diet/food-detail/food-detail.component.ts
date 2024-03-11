import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DietService } from 'src/app/services/diet.service';
import { AddFoodComponent } from '../add-food/add-food.component';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  foodDetails: any;
  // display = 'none';
  // AddNewFood: any;
  // category = ['breakfast/dinner', 'lunch'];
  sidedishArray: Array<string>;

  constructor(
    private dietservice: DietService,
    private modelService: NgbModal // private AddData: FormBuilder,
  ) // private userService: UserService
  {}

  ngOnInit() {
    this.dietservice.getFoodDetails().subscribe((value) => {
      this.foodDetails = value;
      // console.log(this.foodDetails);
    });
  }

  DisplayAddItemModel() {
    const modelRef = this.modelService.open(AddFoodComponent);
    modelRef.result.then((result) => {
      this.dietservice
        .addFoodDetails(result)
        .subscribe((data) =>
          console.log(`Food Details are added successfully`)
        );
    });
  }
}
