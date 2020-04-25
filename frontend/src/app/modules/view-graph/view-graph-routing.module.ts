import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {MapSlComponent} from './map-sl/map-sl.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';


const routes: Routes = [
  {
    path: '',
    component: BarChartComponent
  },
  {
    path: 'map',
    component: MapSlComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewGraphRoutingModule { }
