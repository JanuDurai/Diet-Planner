import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPlanComponent } from './food-plan.component';

describe('FoodPlanComponent', () => {
  let component: FoodPlanComponent;
  let fixture: ComponentFixture<FoodPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPlanComponent]
    });
    fixture = TestBed.createComponent(FoodPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
