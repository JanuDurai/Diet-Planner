import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss'],
})
export class EditFoodComponent implements OnInit {
  @Input() id: string;
  public foodData: any;
  public editData: any;

  constructor(
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private dietService: DietService
  ) {}
  ngOnInit(): void {
    this.dietService.getFoodData(this.id).subscribe({
      next: (value) => {
        this.foodData = value;
        console.log(`Food data received from server`);
        this.editData = this.formbuilder.group({
          category: '',
          food: '',
          quantity: '',
          foodunit: '',
          sidedish: '',
          sidedishquantity: '',
          sidedishunit: '',
          calorie: '',
          img: '',
        });
        this.editData.patchValue(this.foodData[0]);
      },
    });
  }
  public editFoodData() {
    this.activeModal.close(this.editData.value);
  }
}
