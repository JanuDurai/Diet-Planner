import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFoodComponent } from './add-food.component';
import { buffer } from 'rxjs';

describe('AddFoodComponent', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFoodComponent],
      imports:[ReactiveFormsModule],
      providers:[NgbActiveModal]
    });
    fixture = TestBed.createComponent(AddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should button disable',()=>{
      component.buttonDisable();
      expect(component.buttonAble).toBeFalse();
  })


});
