import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'category',
    loadChildren: './modules/search/search.module#SearchModule'
  },
  {
    path:'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path:'about-us',
    loadChildren: './modules/pages/about-us/about-us.module#AboutUsModule'
  },
  {
    path:'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
