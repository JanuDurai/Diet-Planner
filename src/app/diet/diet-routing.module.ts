import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAcessGuard } from '../shared/admin-acess.guard';
import { loggedInProfileGuard } from '../shared/logged-in-profile.guard';
import { FoodPlanComponent } from './Food-plan/food-plan.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'plan',
        component: FoodPlanComponent,
        canActivate: [loggedInProfileGuard],
        title:'Diet Page'

      },
      { path: '', redirectTo: 'plan', pathMatch: 'full' },
    ],
  },
  {
    path: 'fooddetails',
    component: FoodDetailComponent,
    canActivate: [adminAcessGuard],
    title:'FoodDetails Page'

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietRoutingModule {}
