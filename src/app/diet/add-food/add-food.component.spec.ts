import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodComponent } from './add-food.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('AddFoodComponent', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFoodComponent],
      // imports:[HttpClientTestingModule],
      // providers:[NgbActiveModal]
    });
    fixture = TestBed.createComponent(AddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
