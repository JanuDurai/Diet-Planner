import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { loggedInProfileGuard } from './shared/logged-in-profile.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loggedInProfileGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loggedInProfileGuard],
  },
  {
    path: 'login',
    children: [{ path: 'register', component: RegisterComponent }],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loggedInProfileGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [loggedInProfileGuard],
  },
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then((m) => m.DietModule),
  },
];
// TODO: add lazy loading for diet module with path 'diet'

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
