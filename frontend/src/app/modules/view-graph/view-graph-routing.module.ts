import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {SelectGraphComponent} from './select-graph/select-graph.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {MapSlComponent} from './map-sl/map-sl.component';


const routes: Routes = [
  {
    path: '',
    component: SelectGraphComponent
  },
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },
  {
    path: 'line',
    component: LineChartComponent
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
