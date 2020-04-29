import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewGraphRoutingModule } from './view-graph-routing.module';
import { MapSlComponent } from './map-sl/map-sl.component';
import { BarChartCompileComponent } from './bar-chart-compile/bar-chart-compile.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SelectGraphComponent } from './select-graph/select-graph.component';


@NgModule({
  declarations: [MapSlComponent, BarChartCompileComponent, PieChartComponent, SelectGraphComponent],
  imports: [
    CommonModule,
    ViewGraphRoutingModule
  ]
})
export class ViewGraphModule { }
