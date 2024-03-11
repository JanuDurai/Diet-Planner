import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DietService } from 'src/app/services/diet.service';
import { AddFoodComponent } from '../add-food/add-food.component';
import { EditFoodComponent } from '../edit-food/edit-food.component';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  foodDetails: any;
  sidedishArray: Array<string>;

  constructor(
    private dietservice: DietService,
    private modelService: NgbModal
  ) {}

  ngOnInit() {
    this.dietservice.getFoodDetails().subscribe((value) => {
      this.foodDetails = value;
    });
  }

  DisplayAddItemModel() {
    const additemRef = this.modelService.open(AddFoodComponent);
    additemRef.result.then((result) => {
      this.dietservice
        .addFoodDetails(result)
        .subscribe((data) =>
          console.log(`Food Details are added successfully`)
        );
    });
  }
  DisplayEditModel(id:number){
    console.log(id);
    
    const edititemRef = this.modelService.open(EditFoodComponent);

  }


}
