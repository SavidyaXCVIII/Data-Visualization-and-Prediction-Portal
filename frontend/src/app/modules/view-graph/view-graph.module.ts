import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewGraphRoutingModule } from './view-graph-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MapSlComponent } from './map-sl/map-sl.component';


@NgModule({
  declarations: [BarChartComponent, MapSlComponent],
  imports: [
    CommonModule,
    ViewGraphRoutingModule
  ]
})
export class ViewGraphModule { }
