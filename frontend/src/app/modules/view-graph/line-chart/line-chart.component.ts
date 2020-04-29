import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartData = [
    {data: [65, 34, 56, 44, 22, 44, 66], label: 'Colombo'},
    {data: [12, 20, 80, 33, 77, 33, 60], label: 'Gampaha'}
  ];
  public lineChartsLabels = ['2006', '2004', '2010', '2017', '2018', '2020', '2000'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartLegend = true;
  public lineChartType = 'bar';

  constructor() { }

  ngOnInit() {
  }

}
