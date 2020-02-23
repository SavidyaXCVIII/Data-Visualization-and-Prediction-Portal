import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: 'src/app/modules/home/home.module#HomeModule',

  },
  {
    path: 'account',
    loadChildren: 'src/app/modules/account/account.module#AccountModule'
  },
  {
    path: 'feature-prediction',
    loadChildren: 'src/app/modules/feature-prediction/feature-prediction.module#FeaturePredictionModule'
  },
  {
    path: 'search',
    loadChildren: 'src/app/modules/search/search.module#SearchModule'
  },
  {
    path: 'upload-dataset',
    loadChildren: 'src/app/modules/upload-dataset/upload-dataset.module#UploadDatasetModule'
  },
  {
    path: '.view-graph',
    loadChildren: 'src/app/modules/viewGraph/viewGraph.module#ViewGraphModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: 'src/app/modules/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
