import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DietModule } from './diet/diet.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { DietService } from './services/diet.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DietModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [DietService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
