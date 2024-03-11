import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {
  addNewData: any;
  category = ['breakfast', 'dinner', 'lunch'];

  constructor(
    private formbuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.addNewData = this.formbuilder.group({
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
  DataTransfer() {
    this.activeModal.close(this.addNewData.value);
  }
}
