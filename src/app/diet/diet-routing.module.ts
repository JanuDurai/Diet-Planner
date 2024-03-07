import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPlanComponent } from './Food-plan/food-plan.component';
import { loggedInProfileGuard } from '../shared/logged-in-profile.guard';

const routes: Routes = [{path:'diet',component:FoodPlanComponent,canActivate:[loggedInProfileGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietRoutingModule { }
