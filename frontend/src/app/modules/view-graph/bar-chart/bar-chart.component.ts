import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataset';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bar-chart-root',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  data: Observable<DataModel>;
  datasetname='./assets/data.json';

  constructor(private http: HttpClient) {
    this.data = this.http.get<DataModel>(this.datasetname);
  }

}
