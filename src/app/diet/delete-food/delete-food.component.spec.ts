import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodComponent } from './delete-food.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


describe('DeleteFoodComponent', () => {
  let component: DeleteFoodComponent;
  let fixture: ComponentFixture<DeleteFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFoodComponent],
      providers:[NgbActiveModal]
    });
    fixture = TestBed.createComponent(DeleteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check content',()=>{
    const test=TestBed.createComponent(DeleteFoodComponent);
    test.detectChanges();
    const res:HTMLElement = test.nativeElement as HTMLElement;
    expect(res.querySelector('h5')?.textContent).toContain('Delete')
  })
  
});
