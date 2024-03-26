import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { DietService } from 'src/app/services/diet.service';
import { AddFoodComponent } from '../add-food/add-food.component';
import { DeleteFoodComponent } from '../delete-food/delete-food.component';
import { EditFoodComponent } from '../edit-food/edit-food.component';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  public foodDetails: any;
  private id: string;

  constructor(
    private dietservice: DietService,
    private modelService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getfoodData();
  }

  public getfoodData() {
    this.dietservice.getFoodDetails().subscribe((value) => {
      this.foodDetails = value;
    });
  }

  public displayAddItemModel() {
    const additemRef = this.modelService.open(AddFoodComponent, { size: 'lg' });
    additemRef.result.then((result) => {
      this.dietservice.addFoodDetails(result).subscribe(() => {
        console.log(`Food Details are added successfully`);
        this.getfoodData();
        this.toastr.success(`Added Successfully`);
      });
    });
  }

  public displayEditModel(itemId: string) {
    this.id = itemId;
    const edititemRef = this.modelService.open(EditFoodComponent, {
      size: 'lg',
    });
    edititemRef.componentInstance.id = itemId;
    edititemRef.result.then((result) => {
      this.dietservice.updateFoodData(this.id, result).subscribe(() => {
        console.log(`Food data updated successfully`);
        this.getfoodData();
        this.toastr.success(`Updated Successfully`);
      });
    });
  }

  public deleteFoodData(itemId: string) {
    const deleteitemRef = this.modelService.open(DeleteFoodComponent, {
      size: 'lg',
    });
    deleteitemRef.result.then(() => {
      this.dietservice.deleteFoodItem(itemId).subscribe(() => {
        console.log(`Food Item Deleted successfully`);
        this.getfoodData();
        this.toastr.success(`Deleted Successfully`);
      });
    });
  }
}
