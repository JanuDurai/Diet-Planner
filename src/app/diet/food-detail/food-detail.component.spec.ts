import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { DietService } from 'src/app/services/diet.service';
import { FoodDetailComponent } from './food-detail.component';

describe('FoodDetailComponent', () => {
  let component: FoodDetailComponent;
  let fixture: ComponentFixture<FoodDetailComponent>;
  let dietservice: DietService;
  let ngbmodal: NgbModal;
  let ngbmodalref: NgbModalRef;
  ngbmodalref = {
    result: Promise.resolve('mockResult'),
  } as NgbModalRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [DietService, NgbModal],
    }).compileComponents();
    fixture = TestBed.createComponent(FoodDetailComponent);
    component = fixture.componentInstance;
    ngbmodal = TestBed.inject(NgbModal);
    dietservice = TestBed.inject(DietService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get Food Data method on initialisation', () => {
    spyOn(component, 'getfoodData');
    component.ngOnInit();
    dietservice.getFoodDetails().subscribe((data) => {
      expect(data).toBeTruthy();
    });
    expect(component.getfoodData).toHaveBeenCalled();
  });

});
