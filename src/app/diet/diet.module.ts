import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { FoodPlanComponent } from './Food-plan/food-plan.component';
import { WorkoutPlanComponent } from './Workout-plan/workout-plan.component';

@NgModule({
  declarations: [FoodPlanComponent,WorkoutPlanComponent],
  imports: [
    CommonModule,
    DietRoutingModule
  ],
  exports:[FoodPlanComponent,WorkoutPlanComponent]
})

export class DietModule { }
