import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodComponent } from './edit-food.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('EditFoodComponent', () => {
  let component: EditFoodComponent;
  let fixture: ComponentFixture<EditFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFoodComponent],
      imports:[HttpClientTestingModule],
      providers: [NgbActiveModal]
    });
    fixture = TestBed.createComponent(EditFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
