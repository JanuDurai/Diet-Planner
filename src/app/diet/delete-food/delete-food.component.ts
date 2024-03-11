import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.scss']
})
export class DeleteFoodComponent {

  constructor(public activeModal:NgbActiveModal){}

  DeleteFoodItem(){
    this.activeModal.close();
  }

}
