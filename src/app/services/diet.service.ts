import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

import { jsonDataUrl } from '../shared/constants/user.constant';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  constructor(private httpReq: HttpClient) {}

  private dietUrl = jsonDataUrl.diet;

  getFoodDetails() {
    return this.httpReq.get(this.dietUrl);
  }

  addFoodDetails(foodData: any) {
    return this.httpReq.post(this.dietUrl, foodData);
  }
  getFoodData(id:string){
    return  this.httpReq.get(this.dietUrl + '?id=' + id);
  }

  updateFoodData(id:string,data:any){
    return this.httpReq.put(`${this.dietUrl}/${id}`,data)

  }

  deleteFoodItem(id:string){
    return this.httpReq.delete(`${this.dietUrl}/${id}`);
  }

  calculateDailyCalorie(userDetail: any): Observable<any> {
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
    if (userData[0].userchoice === 'Weight Loss')
      reduceWeight = MaintanenceCalorie - reduceCalorie;
    else if (userData[0].userchoice === 'Weight Gain')
      reduceWeight = MaintanenceCalorie + reduceCalorie;
    else reduceWeight = MaintanenceCalorie;
    const breakfastCalorie = (reduceWeight * 30) / 100;
    const lunchCalorie = (reduceWeight * 40) / 100;
    const dinnerCalorie = (reduceWeight * 30) / 100;
    return forkJoin([
      this.getDataOnCategory('breakfast', breakfastCalorie),
      this.getDataOnCategory('lunch', lunchCalorie),
      this.getDataOnCategory('dinner', dinnerCalorie),
    ]).pipe(
      map((value: any) => {
        const data = { breakfast: value[0], lunch: value[1], dinner: value[2] };
        return data;
      })
    );
  }

  getDataOnCategory(category: string, foodCalorie: number): Observable<any> {
    const dietUrl = jsonDataUrl.diet;

    return this.httpReq.get(dietUrl).pipe(
      map((data: any) => {
        const DietData = data;
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
        let itemquantity: string | number = foodCalorie / foodItem.calorie;
        if (foodItem.foodunit == 'g') {
          itemquantity = (foodItem.quantity * itemquantity).toFixed(0);
        } else {
          itemquantity = foodItem.quantity.toFixed(0);
        }
        let sidedishquantity: any = foodCalorie / foodItem.calorie;
        if (foodItem.sidedishunit == 'g' || foodItem.sidedishunit == 'ml') {
          sidedishquantity = (
            foodItem.sidedishquantity * sidedishquantity
          ).toFixed(0);
        } else if (foodItem.sidedishunit == 'piece') {
          sidedishquantity = sidedishquantity.toFixed(0);
        }
        const food = {
          foodData: foodItem,
          itemquantity: itemquantity,
          sidedishquantity: sidedishquantity,
        };
        return food;
      })
    );
  }
}
