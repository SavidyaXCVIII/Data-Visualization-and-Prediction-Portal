import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../../../services/global.service';
import {Dataset} from '../../../../models/dataset';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  readonly ROOT_URL = 'http://localhost:8080';
  dataSets: any;
  showSpinner = true;
  dataset = new Dataset();

getDataSets() {
  return this.http.get(this.ROOT_URL + '/files');
}



  ngOnInit() {

this.getDataSets().subscribe( response => {
  this.dataSets = response;
  this.showSpinner = false;
});

  }

  ngOnDestroy(): void {
    this.globalService.dataset = this.dataset;
  }

  addSampleData(dataset: any) {
    this.dataset = dataset;
  }
}
