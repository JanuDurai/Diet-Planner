import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavBarComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent, FooterComponent, NavBarComponent],
})
export class SharedModule {}
