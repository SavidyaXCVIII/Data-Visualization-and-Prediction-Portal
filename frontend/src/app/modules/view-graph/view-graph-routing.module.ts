import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {MapSlComponent} from './map-sl/map-sl.component';


const routes: Routes = [
  {
    path: '',
    component: BarChartComponent
  },
  {
    path: 'map',
    component: MapSlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewGraphRoutingModule { }
