import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.css']
})
export class DataSetComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  readonly ROOT_URL = 'http://localhost:8080';
  dataset: any;

  ngOnInit() {
    this.getData().subscribe(response => {
      this.dataset = response;
    });
  }

  getData() {
    return this.httpClient.get(this.ROOT_URL + '/filesArray');
  }

}
