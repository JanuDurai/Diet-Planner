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
    title: 'Home Page',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loggedInProfileGuard],
    title: 'Login Page',
  },
  {
    path: 'login',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page',
      },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [loggedInProfileGuard],
    title:'Profile Page'

  },
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then((m) => m.DietModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
