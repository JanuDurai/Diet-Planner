import { HttpClient, HttpRequest } from '@angular/common/http';
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

  foodData:any;
 constructor(private dietUser:DietService){ }

  ngOnInit() {

   this.dietUser.calculateDailyCalorie().subscribe((value)=>{this.foodData=value; console.log(`food`, this.foodData)}
   );    
   
     
  }

   




}
