import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodComponent } from './delete-food.component';

describe('DeleteFoodComponent', () => {
  let component: DeleteFoodComponent;
  let fixture: ComponentFixture<DeleteFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFoodComponent]
    });
    fixture = TestBed.createComponent(DeleteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should check content',()=>{
  //   const test=TestBed.createComponent(DeleteFoodComponent);
  //   test.detectChanges();
  //   const res=test.nativeElement as HTMLElement;
  //   expect(res.querySelector('h1')?.textContent).toContain('Delete Food')
  // })
});
