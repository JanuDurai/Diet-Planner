import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DietService } from 'src/app/services/diet.service';
import { AddFoodComponent } from '../add-food/add-food.component';
import { EditFoodComponent } from '../edit-food/edit-food.component';
import { DeleteFoodComponent } from '../delete-food/delete-food.component';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  public foodDetails: any;
  public id:string;

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
  DisplayEditModel(itemId:string){  
    this.id=itemId; 
    const edititemRef = this.modelService.open(EditFoodComponent);
    edititemRef.componentInstance.id=itemId;
    edititemRef.result.then((result)=>{
         this.dietservice.updateFoodData(this.id,result).subscribe((data)=>(console.log(`Food data updated successfully`)))
    })

  }
  DeleteFoodData(itemId:string){
    const deleteitemRef=this.modelService.open(DeleteFoodComponent);
    deleteitemRef.result.then(()=>{
      this.dietservice.deleteFoodItem(itemId).subscribe((data)=>{console.log(`Food Item Deleted successfully`);
      })
    })

  }

}
