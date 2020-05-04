import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowDatasetComponent} from './shared/components/show-dataset/show-dataset.component';
import {FeaturePredictionComponent} from './shared/components/feature-prediction/feature-prediction.component';
import {Dataset} from './models/dataset';
import {DataSetComponent} from './shared/components/data-set/data-set.component';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: 'src/app/modules/home/home.module#HomeModule',
  },
  {
    path: 'upload-dataset',
    loadChildren: 'src/app/modules/upload-dataset/upload-dataset.module#UploadDatasetModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'show-dataset',
    component: ShowDatasetComponent
  },
  {
    path: 'data-set',
    component: DataSetComponent
  },
  {
    path: 'feature-prediction',
    component: FeaturePredictionComponent
  },
  {
    path: 'view-graph',
    loadChildren: 'src/app/modules/view-graph/view-graph.module#ViewGraphModule'
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
