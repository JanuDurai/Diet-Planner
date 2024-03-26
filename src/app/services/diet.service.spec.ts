import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DietService } from './diet.service';

describe('DietService', () => {
  let service: DietService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DietService],
    });
    service = TestBed.inject(DietService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getFoodDetails function', () => {
    expect(service.getFoodDetails).toBeTruthy();
  });

  it('should have addFoodDetails function', () => {
    expect(service.addFoodDetails).toBeTruthy();
  });

  it('should have getFoodData function', () => {
    expect(service.getFoodData).toBeTruthy();
  });

  it('should updateFoodData function', () => {
    expect(service.updateFoodData).toBeTruthy();
  });

  it('should deleteFoodItem function', () => {
    expect(service.deleteFoodItem).toBeTruthy();
  });

  it('should get food data from json', () => {
    service.getFoodDetails().subscribe((food) => {
      expect(food).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/diet');
    expect(result.request.method).toBe('GET');
  });

  it('should add food data to json', () => {
    const foodData = {
      category: ['breakfast', 'dinner'],
      food: 'Chappathi',
      quantity: 1,
      foodunit: 'piece',
      sidedish: ['Channa Masala'],
      sidedishquantity: 50,
      sidedishunit: 'g',
      calorie: 150,
      img: '/assets/chapathi.jpg',
      id: 'ad1c',
    };

    service.addFoodDetails(foodData).subscribe((food) => {
      expect(food).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/diet');
    expect(result.request.method).toBe('POST');
  });

  it('should update food data in json', () => {
    const foodData = {
      category: ['breakfast', 'dinner'],
      food: 'Chappathi',
      quantity: 1,
      foodunit: 'piece',
      sidedish: ['Channa Masala'],
      sidedishquantity: 50,
      sidedishunit: 'g',
      calorie: 150,
      img: '/assets/chapathi.jpg',
      id: 'ad1c',
    };
    const id = foodData.id;
    service.updateFoodData(id, foodData).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const result = httpMock.expectOne('http://localhost:3000/diet/' + id);
    expect(result.request.method).toBe('PUT');
  });

  it('should delete food item in json', () => {
    const id = '123';
    service.deleteFoodItem(id).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const result = httpMock.expectOne('http://localhost:3000/diet/' + id);
    expect(result.request.method).toBe('DELETE');
  });
});
