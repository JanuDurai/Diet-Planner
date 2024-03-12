import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPlanComponent } from './Food-plan/food-plan.component';
import { loggedInProfileGuard } from '../shared/logged-in-profile.guard';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { adminAcessGuard } from '../shared/admin-acess.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'plan',
        component: FoodPlanComponent,
        canActivate: [loggedInProfileGuard],
      },
      { path: '', redirectTo: 'plan', pathMatch: 'full' },
    ],
  },
  {
    path: 'fooddetails',
    component: FoodDetailComponent,
    canActivate: [adminAcessGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietRoutingModule {}
