import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingCoverComponent } from './components/landing-cover/landing-cover.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { EducationComponent } from './category/education/education.component';
import { EconomicComponent } from './category/economic/economic.component';


@NgModule({
  declarations: [LandingCoverComponent, AboutUsComponent, EducationComponent, EconomicComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class HomeModule { }
