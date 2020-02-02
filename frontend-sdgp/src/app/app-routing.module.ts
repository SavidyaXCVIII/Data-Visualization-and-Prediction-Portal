import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from "./modules/home/pages/category/category.component";


const routes: Routes = [
  {
    path:'category',
    loadChildren: './modules/search/search.module#SearchModule'
  },
  {
    path:'home',
    loadChildren: './modules/home/home.module#HomeModule',

  },
  {
    path:'about-us',
    loadChildren: './modules/pages/aboutus/aboutus.module#AboutUsModule',

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
