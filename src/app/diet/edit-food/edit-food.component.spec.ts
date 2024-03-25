import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodComponent } from './edit-food.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DietService } from 'src/app/services/diet.service';
import { of } from 'rxjs';

describe('EditFoodComponent', () => {
  let component: EditFoodComponent;
  let fixture: ComponentFixture<EditFoodComponent>;
  let dietservice:DietService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFoodComponent],
      imports: [HttpClientTestingModule],
      providers: [NgbActiveModal,DietService],
    });
    fixture = TestBed.createComponent(EditFoodComponent);
    component = fixture.componentInstance;
    dietservice=TestBed.inject(DietService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button able to submit when user enters input', () => {
    component.submitButtonAble();
    expect(component.buttondisable).toBeFalse();
  });

  it('should initialize editData in ngOnInit',()=>{
    const sampledata = {
      category: ['lunch'],
      food: 'White rice',
      quantity: 100,
      foodunit: 'g',
      sidedish: ['Chicken Chukka'],
      sidedishquantity: 150,
      sidedishunit: 'g',
      calorie: 252,
      img: '/assets/whiterice.jpeg',
      id:"h14"
    };

    spyOn(dietservice,'getFoodData')
    dietservice.getFoodData.arguments
    .returnValue(of([sampledata])); 
    
    component.ngOnInit();
   
    expect(dietservice.getFoodData).toHaveBeenCalledWith(sampledata.id);
    expect(component.foodData).toEqual([sampledata]);
    expect(component.editData).toBeDefined();

  });

  it('should close active modal if food data is valid', () => {
    const sampledata = {
      category: ['lunch'],
      food: 'White rice',
      quantity: 100,
      foodunit: 'g',
      sidedish: ['Chicken Chukka'],
      sidedishquantity: 150,
      sidedishunit: 'g',
      calorie: 252,
      img: '/assets/whiterice.jpeg',
    };
    // spyOn(component.activeModal, 'close');
    // // expect(editData).toBeTrue();
    // component.editData.valid = true;
    // expect(component.activeModal.close).toHaveBeenCalledWith(sampledata);
  });
});
