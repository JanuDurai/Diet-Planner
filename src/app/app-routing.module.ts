import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { loggedInProfileGuard } from './shared/logged-in-profile.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loggedInProfileGuard],
    title: 'Home Page',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [loggedInProfileGuard],
    title: 'Profile Page',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loggedInProfileGuard],
    title: 'Login Page',
  },
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then((m) => m.DietModule),
  },
  {
    path: 'login',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [loggedInProfileGuard],
        title: 'Register Page',
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'**', component:PagenotfoundComponent, title:'Page Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
