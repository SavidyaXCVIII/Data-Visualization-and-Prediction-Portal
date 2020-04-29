import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewGraphRoutingModule } from './view-graph-routing.module';
import { MapSlComponent } from './map-sl/map-sl.component';
import { BarChartCompileComponent } from './bar-chart-compile/bar-chart-compile.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SelectGraphComponent } from './select-graph/select-graph.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [MapSlComponent, BarChartCompileComponent, PieChartComponent, SelectGraphComponent, BarChartComponent],
  imports: [
    CommonModule,
    ViewGraphRoutingModule,
    ChartsModule
  ]
})
export class ViewGraphModule { }
