import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit{
editData:any;

  constructor(public activemodel:NgbActiveModal,
              private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.editData = this.formbuilder.group({
      category: '',
      food: '',
      quantity: '',
      foodunit: '',
      sidedish: '',
      sidedishquantity: '',
      sidedishunit: '',
      calorie: '',
    });
    
  }

  


}
