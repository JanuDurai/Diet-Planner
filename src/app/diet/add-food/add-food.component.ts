import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent  implements OnInit{
  display = 'none';
  AddNewFood: any;
  category = ['breakfast','dinner', 'lunch'];
  sidedishArray: Array<string>;
  constructor( private AddData: FormBuilder,
    private userService: UserService){}



  ngOnInit(): void {
    this.AddNewFood = this.AddData.group({
      category: '',
      food: '',
      quantity: '',
      foodunit: '',
      sidedish: '',
      sidedishquantity: '',
      sidedishunit: '',
      calorie: '',
      img: '',
    });  }


  closeModal() {
    this.display = 'none';
  }

  openModal() {
    this.display = 'block';
  }

  AddDataInServer() {
       
    this.AddNewFood.value.sidedish = this.AddNewFood.value.sidedish.split(' ');
    this.userService.addFoodData(this.AddNewFood.value);
  }

}

