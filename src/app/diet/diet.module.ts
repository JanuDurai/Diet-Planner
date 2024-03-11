import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FoodPlanComponent } from './Food-plan/food-plan.component';
import { WorkoutPlanComponent } from './Workout-plan/workout-plan.component';
import { DietRoutingModule } from './diet-routing.module';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { AddFoodComponent } from './add-food/add-food.component';


@NgModule({
  declarations: [FoodPlanComponent, WorkoutPlanComponent, FoodDetailComponent,AddFoodComponent,EditFoodComponent],
  imports: [CommonModule, DietRoutingModule,ReactiveFormsModule,FormsModule],
})
export class DietModule {}
