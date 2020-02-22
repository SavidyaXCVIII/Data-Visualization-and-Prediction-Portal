import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingCoverComponent } from './components/landing-cover/landing-cover.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './pages/category/category.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [LandingCoverComponent, AboutUsComponent, CategoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class HomeModule { }
