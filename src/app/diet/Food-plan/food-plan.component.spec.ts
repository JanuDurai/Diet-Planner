import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FoodPlanComponent } from './food-plan.component';
import { UserService } from 'src/app/services/user.service';

describe('FoodPlanComponent', () => {
  let component: FoodPlanComponent;
  let fixture: ComponentFixture<FoodPlanComponent>;
  let userservice:UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPlanComponent],
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    fixture = TestBed.createComponent(FoodPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userservice=TestBed.inject(UserService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should call get data method on initialisation',()=>{
  spyOn(component,'getData');
  component.ngOnInit();
  expect(component.getData).toHaveBeenCalled();
})

it('should get food data',()=>{
  //  expect(userservice.getUserName).toHaveBeenCalled();


})

});
