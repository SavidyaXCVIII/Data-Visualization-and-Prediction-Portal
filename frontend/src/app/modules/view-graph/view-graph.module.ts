import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewGraphRoutingModule } from './view-graph-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MapSlComponent } from './map-sl/map-sl.component';
import { BarChartCompileComponent } from './bar-chart/bar-chart-compile/bar-chart-compile.component';


@NgModule({
  declarations: [BarChartComponent, MapSlComponent, BarChartCompileComponent],
  imports: [
    CommonModule,
    ViewGraphRoutingModule
  ]
})
export class ViewGraphModule { }
