import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { loggedInProfileGuard } from './shared/logged-in-profile.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[loggedInProfileGuard]  },
  { path: 'profile', component: ProfileComponent,canActivate:[loggedInProfileGuard]  },
  { path: 'login', component: LoginComponent,canActivate:[loggedInProfileGuard] },
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
        canActivate:[loggedInProfileGuard]
      },
    ],
  },
  { path: '', redirectTo:'login', pathMatch:'full'}
  // { path: '', component:LoginComponent,canActivate:[loggedInProfileGuard]},
  // {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
