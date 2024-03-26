import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { RegisterComponent } from './register.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerform:FormBuilder;
  let userservice:UserService;
  let router:Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    userservice=TestBed.inject(UserService);
    router=TestBed.inject(Router);
    fixture.detectChanges();
    registerform =TestBed.inject(FormBuilder)
    component.Data = registerform.group({

      firstname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
          Validators.minLength(2),
        ],
      ],
      lastname: [
        '',
        [
          Validators.pattern(/^[A-za-z]+(?: [a-zA-Z]+)*$/),
          Validators.required,
          Validators.minLength(3),
        ],
      ],
      age: [
        '',
        [Validators.min(18), Validators.max(60), Validators.required],
      ],
      gender: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      targetweight: ['', [Validators.required]],
      choice: ['', [Validators.required]],
      username: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ],
      ],
      password: [
        '',
        [
          Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),
          Validators.required,
          Validators.minLength(8),
        ],
      ],
      confirmpassword: [
        '',
        [
          Validators.pattern(/^[A-za-z0-9@#$%]+(?: [a-zA-Z0-9@#$%]+)*$/),
          Validators.required,
          Validators.minLength(8),
        ],
      ],
      role: [],
    }
  );

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should set invalidform to true',()=>{
      component.Data.markAllAsTouched(); 
      spyOn(userservice,'addUser');
      spyOn(router,'navigate');
      component.onsubmit();
      expect(component.invalidform).toBeTrue();
      expect(userservice.addUser).not.toHaveBeenCalled();
      expect(router.navigate).not.toHaveBeenCalled();
   })

   it('should add user details and navigate to login page if form is valid',()=>{
      const sampleuserdata={
        "firstname": "Vasumitha",
        "lastname": "Subburaj",
        "age": 28,
        "gender": "Male",
        "height": 180,
        "weight": 68,
        "targetweight": 0.25,
        "choice": "Weight Loss",
        "username": "Vasu",
        "password": "Vasu@123",
        "confirmpassword": "Vasu@123",
        "role": [
          "user"
        ]
      };

      component.Data.setValue(sampleuserdata);
      spyOn(userservice,'addUser');
      spyOn(router,'navigate');   
      component.onsubmit()
       expect(component.invalidform).toBeFalse();
       expect(userservice.addUser).toHaveBeenCalledWith(component.Data.value);
       expect(console.log).toHaveBeenCalledWith(`User Details added successfully`);
       expect(router.navigate).toHaveBeenCalledWith(['/login'])
   })
});
