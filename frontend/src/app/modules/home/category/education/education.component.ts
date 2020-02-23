import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public colors = [
    {datasetName: 'one', publisher: 'one', year: '2019', category: 'education', description: '1111'},
    {datasetName: 'two', publisher: 'two', year: '2020', category: 'education', description: '2222'},
    {datasetName: 'three', publisher: 'three', year: '2030', category: 'education', description: '3333'},
    {datasetName: 'four', publisher: 'four', year: '2040', category: 'education', description: '4444'},
    {datasetName: 'five', publisher: 'five', year: '2050', category: 'education', description: '5555'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
