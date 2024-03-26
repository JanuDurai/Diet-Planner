import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  public categories = ['breakfast', 'dinner', 'lunch'];
  public buttondisable = false;

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
          category: ['', [Validators.required]],
          food: [
            '',
            [
              Validators.required,
              Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/),
            ],
          ],
          quantity: ['', [Validators.required, Validators.min(1)]],
          foodunit: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
          sidedish: [
            '',
            [
              Validators.required,
              Validators.pattern(/^[a-zA-Z ]+(?:,[a-zA-Z ]+)*$/),
            ],
          ],
          sidedishquantity: ['', [Validators.required, Validators.min(1)]],
          sidedishunit: [
            '',
            [Validators.required, Validators.pattern(/^[a-z]+$/)],
          ],
          calorie: ['', [Validators.required, Validators.min(1)]],
        });
        this.editData.patchValue(this.foodData[0]);
      },
    });
  }

  public editFoodData() {
    if (this.editData.valid) {
      this.activeModal.close(this.editData.value);
    } else {
      this.buttondisable = true;
    }
  }

  submitButtonAble() {
    this.buttondisable = false;
  }
}
