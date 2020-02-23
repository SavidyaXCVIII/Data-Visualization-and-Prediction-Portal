import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './modules/home/pages/category/category.component';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',

  },
  {
    path: 'account',
    loadChildren: './modules/account/account.module#AccountModule'
  },
  {
    path: 'feature-prediction',
    loadChildren: './modules/feature-prediction/feature-prediction.module#FeaturePredictionModule'
  },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule'
  },
  {
    path: 'upload-dataset',
    loadChildren: './modules/upload-dataset/upload-dataset.module#UploadDatasetModule'
  },
  {
    path: 'view-graph',
    loadChildren: './modules/viewGraph/viewGraph.module#ViewGraphModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './modules/home/home.module#HomeModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
