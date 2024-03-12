import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DietService } from './diet.service';

describe('DietService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DietService],
    })
  );

  it('should be created', () => {
    const service: DietService = TestBed.get(DietService);
    expect(service).toBeTruthy();
  });

  it('should have getFoodDetails function', () => {
    const service: DietService = TestBed.get(DietService);
    expect(service.getFoodDetails).toBeTruthy();
   });
   
   it('should have addFoodDetails function', () => {
    const service: DietService = TestBed.get(DietService);
    expect(service.addFoodDetails).toBeTruthy();
   });

   it('should have getFoodData function', () => {
    const service: DietService = TestBed.get(DietService);
    expect(service.getFoodData).toBeTruthy();
   });
  

});

