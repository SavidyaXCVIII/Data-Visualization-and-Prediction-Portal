import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {

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

  public barChartType = 'polarArea';
  show = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 400);
  }

}
