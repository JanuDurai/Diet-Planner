import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

import { jsonDataUrl } from '../shared/constants/user.constant';
import { fooddetailInterface } from '../shared/fooddetailInterface';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  private dietUrl = jsonDataUrl.diet;

  constructor(private httpReq: HttpClient) {}

  public getFoodDetails() {
    return this.httpReq.get(this.dietUrl);
  }

  public addFoodDetails(foodData: fooddetailInterface) {
    return this.httpReq.post(this.dietUrl, foodData);
  }

  public getFoodData(id: string) {
    return this.httpReq.get(this.dietUrl + '?id=' + id);
  }

  public updateFoodData(id: string, fooddata: fooddetailInterface) {
    return this.httpReq.put(`${this.dietUrl}/${id}`, fooddata);
  }

  public deleteFoodItem(id: string) {
    return this.httpReq.delete(`${this.dietUrl}/${id}`);
  }

  public calculateDailyCalorie(userData: any): Observable<any> {
    let BMR!: number;
    const reduceCalorie = userData[0].targetweight * 1100;
    let reduceWeight: number;

    if (userData[0].gender === 'Male') {
      BMR =
        66.473 +
        13.7516 * userData[0].weight +
        5.0033 * userData[0].height -
        6.755 * userData[0].age;
    } else if (userData[0].gender === 'Female') {
      BMR =
        655.1 +
        9.563 * userData[0].weight +
        1.85 * userData[0].height -
        4.676 * userData[0].age;
    }

    const MaintanenceCalorie = BMR * 1.55;
    if (userData[0].choice === 'Weight Loss')
      reduceWeight = MaintanenceCalorie - reduceCalorie;
    else if (userData[0].choice === 'Weight Gain')
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

  public getDataOnCategory(
    category: string,
    foodCalorie: number
  ): Observable<any> {
    return this.httpReq.get(this.dietUrl).pipe(
      map((data: any) => {
        const DietData = data;
        const categoryFoodItems = DietData.filter((object: any) => {
          for (const item of object.category) {
            if (item === category) return object;
          }
        });

        const randnumber = (
          Math.random() *
          (categoryFoodItems.length - 1)
        ).toFixed(0);

        const foodItem = categoryFoodItems[randnumber];

        let itemquantity: string | number = foodCalorie / foodItem.calorie;
        if (foodItem.foodunit == 'g' || foodItem.foodunit == 'ml') {
          itemquantity = (foodItem.quantity * itemquantity).toFixed(0);
        } else {
          itemquantity = itemquantity.toFixed(0);
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
