import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'http://localhost:8080';
  dataSets: any;


getDataSets() {
  return this.http.get(this.ROOT_URL + '/files');
}



  ngOnInit() {

this.getDataSets().subscribe( response => {
  this.dataSets = response;
});

  }

}
