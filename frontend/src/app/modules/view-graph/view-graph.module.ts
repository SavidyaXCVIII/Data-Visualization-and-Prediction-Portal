import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewGraphRoutingModule } from './view-graph-routing.module';
import { MapSlComponent } from './map-sl/map-sl.component';
import { BarChartCompileComponent } from './bar-chart-compile/bar-chart-compile.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SelectGraphComponent } from './select-graph/select-graph.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MapSlComponent,
    BarChartCompileComponent,
    PieChartComponent,
    SelectGraphComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent],
  imports: [
    CommonModule,
    ViewGraphRoutingModule,
    ChartsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ViewGraphModule { }
