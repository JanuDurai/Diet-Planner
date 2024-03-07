import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DietService implements OnInit {
  constructor(private userService: UserService, private httpReq: HttpClient) {}
  ngOnInit(): void {}

  calculateDailyCalorie(userDetail: any): Observable<any> {
    // return userDetail.pipe(map((value)=>{
    const userData = userDetail;
    let BMR!: number;
    let MaintanenceCalorie: number;
    const reduceCalorie = userData[0].usertargetweight * 1100;
    let reduceWeight: number;

    if (userData[0].usergender === 'Male') {
      BMR =
        66.473 +
        13.7516 * userData[0].userweight +
        5.0033 * userData[0].userheight -
        6.755 * userData[0].userage;
    } else if (userData[0].usergender === 'Female') {
      BMR =
        655.1 +
        9.563 * userData[0].userweight +
        1.85 * userData[0].userheight -
        4.676 * userData[0].userage;
    }

    MaintanenceCalorie = BMR * 1.55;
    console.log(MaintanenceCalorie, reduceCalorie, BMR);

    if (userData[0].userchoice === 'Weight Loss')
      reduceWeight = MaintanenceCalorie - reduceCalorie;
    else if (userData[0].userchoice === 'Weight Gain')
      reduceWeight = MaintanenceCalorie + reduceCalorie;
    else reduceWeight = MaintanenceCalorie;

    console.log(reduceWeight);

    const breakfastCalorie = (reduceWeight * 30) / 100;
    const lunchCalorie = (reduceWeight * 40) / 100;
    const dinnerCalorie = (reduceWeight * 30) / 100;


    // console.log(`breakfastcalorie`, breakfastCalorie);
    // console.log(`lunchcalorie`, lunchCalorie);
    // console.log(`dinnercalorie`, dinnerCalorie);

    let breakfastfood: any;
    let lunchfood: any;
    let dinnerfood: any;
    let data: any = [];

    return (forkJoin([
      this.getDataOnCategory('breakfast', breakfastCalorie),
      this.getDataOnCategory('lunch', lunchCalorie),
      this.getDataOnCategory('dinner', dinnerCalorie),
    ])).pipe(map((value:any)=>{
      console.log(`food data....`,value);
       
      const data = {"breakfast" : value[0], "lunch":value[1],"dinner":value[2]};
       console.log(`data....`,data);
     return data;
     
    }))

    // this.getDataOnCategory('breakfast',breakfastCalorie).subscribe({next:(value:any)=> {breakfastfood=value; console.log(breakfastfood); data.push(breakfastfood)}})
    // this.getDataOnCategory('lunch',lunchCalorie).subscribe({next:(value:any)=> {lunchfood=value; console.log(lunchfood);data.push(lunchfood)}})
    // this.getDataOnCategory('dinner',dinnerCalorie).subscribe({next:(value:any)=> {dinnerfood=value; console.log(dinnerfood); console.log(`data....`,data);
    // data.push(dinnerfood)}})
    // return data;

    // }

    //  ) )
  }

  getDataOnCategory(category: string, foodCalorie: number): Observable<any> {
    const dietUrl = 'http://localhost:3000/diet';

    return this.httpReq.get(dietUrl).pipe(
      map((data: any) => {
        const DietData: any = data;
        const categoryFoodItems = DietData.filter((object: any) => {
          for (let item of object.category) {
            if (item === category) return object;
          }
        });
        const randnumber = (
          Math.random() *
          (categoryFoodItems.length - 1 - 0)
        ).toFixed(0);
        const foodItem = categoryFoodItems[randnumber];
        //  console.log(foodItem);
        let itemquantity: any = foodCalorie / foodItem.calorie;
        if (foodItem.foodunit == 'g') {
          itemquantity = (foodItem.quantity * itemquantity).toFixed(0);
        } else {
          itemquantity = foodItem.quantity.toFixed(0);
        }
        // console.log(`item quantity`, itemquantity);
        let sidedishquantity: any = foodCalorie / foodItem.calorie;
        if (foodItem.sidedishunit == 'g' || foodItem.sidedishunit == 'ml') {
          sidedishquantity = (
            foodItem.sidedishquantity * sidedishquantity
          ).toFixed(0);
        } else if (foodItem.sidedishunit == 'piece') {
          sidedishquantity = sidedishquantity.toFixed(0);
        }
        //  console.log(`sidedish quantity`,sidedishquantity);
        const food = 
          {
            foodData: foodItem,
            itemquantity: itemquantity,
            sidedishquantity: sidedishquantity,
          }
        return food;
      })
    );
  }
}
