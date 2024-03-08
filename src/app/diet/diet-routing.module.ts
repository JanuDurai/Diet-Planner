import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPlanComponent } from './Food-plan/food-plan.component';
import { loggedInProfileGuard } from '../shared/logged-in-profile.guard';

const routes: Routes = [
  // TODO: remove diet route and create child paths for food plan component with child route 'plan'
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietRoutingModule {}
