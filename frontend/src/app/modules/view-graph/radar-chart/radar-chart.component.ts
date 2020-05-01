import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public barChartData = [
    {data: [65, 34, 56, 44, 22, 44, 66], label: 'Colombo'},
    {data: [12, 20, 80, 33, 77, 33, 60], label: 'Gampaha'}
  ];

  public barChartsLabels = ['2006', '2004', '2010', '2017', '2018', '2020', '2000'];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLegend = true;

  public barChartType = 'radar';
  show = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 400);
  }

}
