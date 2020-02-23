import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingCoverComponent} from './components/landing-cover/landing-cover.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {EducationComponent} from './category/education/education.component';
import {EconomicComponent} from './category/economic/economic.component';


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
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'economic',
    component: EconomicComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
