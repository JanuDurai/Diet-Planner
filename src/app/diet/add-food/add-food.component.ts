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
  public buttonAble = false;
  private sidedishArray: any;
  

  constructor(
    private formbuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.addNewData = this.formbuilder.group({
      category: ['', [Validators.required]],
      food: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      quantity: ['', [Validators.required,Validators.min(1)]],
      foodunit: [
        '',
        [Validators.required, Validators.pattern(/^[a-z]+$/)],
      ],
      sidedish: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+(?:,[a-zA-Z ]+)*$/),
        ],
      ],
      sidedishquantity: ['', [Validators.required,Validators.min(1)]],
      sidedishunit: [
        '',
        [Validators.required, Validators.pattern(/^[a-z]+$/)],
      ],
      calorie: ['', [Validators.required,Validators.min(1)]],
    });
  }

  public dataTransfer() {
    if (this.addNewData.invalid) this.buttonAble = true;
    else {   
       [...this.sidedishArray] = this.addNewData.value.sidedish.split(',');
       this.addNewData.value.sidedish=this.sidedishArray;
      this.activeModal.close(this.addNewData.value);
    }
  }

  public buttonDisable() {
    this.buttonAble = false;
  }
}
