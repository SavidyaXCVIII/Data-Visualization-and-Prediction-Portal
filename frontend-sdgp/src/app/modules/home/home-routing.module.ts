import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingCoverComponent} from "./components/landing-cover/landing-cover.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {CategoryComponent} from "./pages/category/category.component";


const routes: Routes = [
  {
    path: '',
    component: LandingCoverComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
