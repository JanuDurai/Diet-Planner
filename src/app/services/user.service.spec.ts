import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from json', () => {
    service.getAllUserDetails().subscribe((user) => {
      expect(user).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/user');
    expect(result.request.method).toBe('GET');
  });

  it('should create data from json', () => {
    const data = {
      id: '5220',
      firstname: 'Janu',
      lastname: 'Shree',
      age: 21,
      gender: 'Female',
      height: 150,
      weight: 54,
      targetweight: 0.25,
      choice: 'Weight Loss',
      username: 'Janu',
      password: 'Janu@123',
      confirmpassword: 'Janu@123',
      role: ['user', 'admin'],
    };

    service.addUser(data).subscribe((user) => {
      expect(user).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/user');
    expect(result.request.method).toBe('POST');
    result.flush({ data });
  });

  it('should update user details in json', () => {
    const userdata = {
      id: '5220',
      firstname: 'Janu',
      lastname: 'Shree',
      age: 21,
      gender: 'Female',
      height: 150,
      weight: 54,
      targetweight: 0.25,
      choice: 'Weight Loss',
      username: 'Janu',
      password: 'Janu@123',
      confirmpassword: 'Janu@123',
      role: ['user', 'admin'],
    };
    const id = userdata.id;
    service.updateUserDetails(id, userdata).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const result = httpMock.expectOne('http://localhost:3000/user/' + id);
    expect(result.request.method).toBe('PUT');
  });

  it('should return true when user logged in', () => {
    service.loginStatus = new BehaviorSubject<boolean>(true);
    expect(service.isloggedIn()).toBeTrue();
  });

  it('should return false when user log out', () => {
    service.loginStatus = new BehaviorSubject<boolean>(false);
    expect(service.isloggedIn()).toBeFalse();
  });
});
