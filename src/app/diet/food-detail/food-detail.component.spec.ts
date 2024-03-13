import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailComponent } from './food-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FoodDetailComponent', () => {
  let component: FoodDetailComponent;
  let fixture: ComponentFixture<FoodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDetailComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(FoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
