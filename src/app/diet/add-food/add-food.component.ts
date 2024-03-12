import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {
  public addNewData: any;
  public category = ['breakfast', 'dinner', 'lunch'];
  public buttonAble: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}
  ngOnInit(): void {
    this.addNewData = this.formbuilder.group({
      category: ['', [Validators.required]],
      food: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      foodunit: ['', [Validators.required]],
      sidedish: ['', [Validators.required]],
      sidedishquantity: ['', [Validators.required]],
      sidedishunit: ['', [Validators.required]],
      calorie: ['', [Validators.required]],
    });
  }
  public dataTransfer() {
    if (this.addNewData.invalid) this.buttonAble = true;
    else this.activeModal.close(this.addNewData.value);
  }
  public buttonDisable() {
    this.buttonAble = false;
  }
}
