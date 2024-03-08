import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss'],
})
export class FoodPlanComponent implements OnInit {
  foodData: any;
  username: any;
  userDetail: any;
  foodDataArray: any;

  // object={ firstee:{name:"first"}, secondee:{dept:"second"}}
  // object = {
  //   first: { name: 'janu', dept: 'eee', marks: { pmp: 500, dns: 900 } },
  //   second: { name: 'vinu', dept: 'cse', marks: { pmp: 500, dns: 900 } },
  // };

  Data = {
    breakfast: {
      foodData: {
        calorie: 145,
        category: ['breakfast', 'dinner'],
        food: 'Dosa',
        foodunit: 'piece',
        id: '9c87',
        img: '/assets/background.jpg',
        quantity: 1,
        sidedish: ['Sambar', 'Coconut Chutney'],
        sidedishquantity: 50,
        sidedishunit: 'g',
      },
      itemquantity: '1',
      sidedishquantity: '220',
    },
    lunch: {
      foodData: {
        calorie: 345,
        category: ['lunch'],
        food: 'White Rice',
        foodunit: 'g',
        id: '5fe4',
        img: '/assets/background.jpg',
        quantity: 100,
        sidedish: ['Fish Curry', 'Rasam'],
        sidedishquantity: 150,
        sidedishunit: 'g',
      },
      itemquantity: '247',
      sidedishquantity: '370',
    },
    dinner: {
      foodData: {
        calorie: 165,
        category: ['breakfast', 'dinner'],
        food: 'Wheat Noodles',
        foodunit: 'g',
        id: '5e98',
        img: '/assets/background.jpg',
        quantity: 100,
      },
      sidedish: ['Tender Coconut Water'],
      sidedishquantity: 240,
      sidedishunit: 'ml',
    },
  };

  constructor(
    private dietUser: DietService,
    private httpReq: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.username = this.userService.getUserName();

    this.userService.getUserDetail(this.username).subscribe((data) => {
      this.userDetail = data;
      this.dietUser
        .calculateDailyCalorie(this.userDetail)
        .subscribe((value: any) => {
          this.foodData = value;
          // console.log(`ts file.....`, this.foodData);
          this.foodDataArray = [
            {
              "catogory": 'BREAKFAST',
              "img": this.foodData.breakfast.foodData.img,
              "food": [this.foodData.breakfast.foodData.food,[this.foodData.breakfast.itemquantity, this.foodData.breakfast.foodData.foodunit].join('')].join(' - '),
              "sidedish" :[this.foodData.breakfast.foodData.sidedish,[this.foodData.breakfast.sidedishquantity,this.foodData.breakfast.foodData.sidedishunit].join('')].join(' - ')
            },
            {
              "catogory": 'LUNCH',
              "img": this.foodData.lunch.foodData.img,
              "food": [this.foodData.lunch.foodData.food,[this.foodData.lunch.itemquantity, this.foodData.lunch.foodData.foodunit].join('')].join(' - '),
              "sidedish" :[this.foodData.lunch.foodData.sidedish,[this.foodData.lunch.sidedishquantity,this.foodData.lunch.foodData.sidedishunit].join('')].join(' - ')
            },
            {
              "catogory": 'DINNER',
              "img": this.foodData.dinner.foodData.img,
              "food": [this.foodData.dinner.foodData.food,[this.foodData.dinner.itemquantity, this.foodData.dinner.foodData.foodunit].join('')].join(' - '),
              "sidedish" :[this.foodData.dinner.foodData.sidedish,[this.foodData.dinner.sidedishquantity,this.foodData.dinner.foodData.sidedishunit].join('')].join(' - ')
            }
          ];
          console.log(this.foodDataArray);
          
        });
    });
  }
}

//img
//food name
//sidedishname
//foodquantity
//sidedishquantity
//foodunit
//sidedishunit
