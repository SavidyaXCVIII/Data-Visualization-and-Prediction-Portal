import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapSlComponent} from './map-sl/map-sl.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {SelectGraphComponent} from './select-graph/select-graph.component';


const routes: Routes = [
  {
    path: '',
    component: SelectGraphComponent
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
