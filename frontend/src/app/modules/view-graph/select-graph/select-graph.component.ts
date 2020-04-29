import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataModel} from '../../../models/dataset';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-select-graph',
  templateUrl: './select-graph.component.html',
  styleUrls: ['./select-graph.component.css']
})
export class SelectGraphComponent implements OnInit {

  data: Observable<DataModel>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<DataModel>('./assets/data.json');
  }

  ngOnInit() {
  }

}
