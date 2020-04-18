import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataset';

@Component({
  selector: 'display-bar-chart-root',
  templateUrl: './display-bar-chart.component.html',
  styleUrls: ['./display-bar-chart.component.css']
})
export class DisplayBarChartComponent {
  data: Observable<DataModel>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<DataModel>('./assets/data.json');
  }
}