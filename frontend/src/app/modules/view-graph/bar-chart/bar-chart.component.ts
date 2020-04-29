import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartData = [
    {data: [65, 34, 56, 44, 22, 44, 66], label: 'Colombo'},
    {data: [12, 20, 80, 33, 77, 33, 60], label: 'Gampaha'}
  ];

  public barChartsLabels = ['2006', '2004', '2010', '2017', '2018', '2020', '2000'];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    duration: 10000
  };

  public barChartLegend = true;

  public barChartType = 'bar';

  constructor() {
  }

  ngOnInit() {
  }

}
