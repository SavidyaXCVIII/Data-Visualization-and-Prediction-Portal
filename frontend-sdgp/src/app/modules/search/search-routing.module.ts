import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchDatasetComponent} from "./search-dataset/search-dataset.component";


const routes: Routes = [
  {
    path: '',
    component: SearchDatasetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
