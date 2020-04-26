import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min';
import { Observable } from 'rxjs';
// import { DataModel } from 'src/app/data/data.model';
import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  title = 'pie-chart';

  // cities: Observable<DataModel>;
  // Ratnapura: string;

  constructor(private http: HttpClient) {

    // this.cities = this.http.get<DataModel>('./assets/data.json');

    // this.cities.subscribe(events => {
    //   this.Ratnapura = events[0].District;
    // });

  }

  ngOnInit () {
    // https://canvasjs.com/angular-charts/
    let chart = new CanvasJS.Chart("chartContainer", {
      
      theme: "light2",
      // animationEnabled: true,
      // exportEnabled: true,
      // title:{
      //   text: "Monthly Expense"
      // },
      data: [{
          type: "pie",
          // showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
          { y: 69.08, name: "Ratnapura" },
          { y: 66.04, name: "Mannar" },
          { y: 65.95, name: "Jaffna" },
          { y: 65.84, name: "Colombo" },
          { y: 64.89, name: "Monaragala" },
          { y: 64.15, name: "Matara"},
          { y: 64.14, name: "Kilinochchi" },
          { y: 63.96, name: "Kalutara" },
          { y: 63.94, name: "Hambantota" },
          { y: 63.91, name: "Matale" },
          { y: 63.61, name: "Kegalle" },
          { y: 63.53, name: "Batticaloa" },
          { y: 63.42, name: "Galle" },
          { y: 63.39, name: "Nuwara Eliya" },
          { y: 63.19, name: "Puttalam" },
          { y: 62.65, name: "Gampaha" },
          { y: 62.57, name: "Mullativu" },
          { y: 62.54, name: "Badulla" },
          { y: 61.4, name: "Ampara" },
          { y: 61.24, name: "Trincomalee" },
          { y: 60.93, name: "Kurunegala" },
          { y: 60.84, name: "Kandy" },
          { y: 59.77, name: "Anuradhapura" },
          { y: 59.32, name: "Vavuniya" },
          { y: 57.99, name: "Polonnaruwa" }
          ]
      }]
      });
      chart.render();

  }

}
