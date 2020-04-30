import {Component, OnInit} from '@angular/core';
import {Dataset} from '../../../models/dataset';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../../services/global.service';
import {MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  xArray: string[] = [];
  yArray: number[] = [];

  public barChartData = [
    {data: [], label: ''}
  ];


  public barChartsLabels = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLegend = true;
  public barChartType = 'bar';
  show = false;
  length: number;
  pageSize: number;
  chosenDataset = new Dataset();
  datasetId;
  readonly ROOT_URL = 'http://localhost:8080';
  dataSource: any;
  dataset: any[];
  mappedArray: any[] = [];
  columnHeaders: string[];
  generateGraphForm: FormGroup;

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
    this.dataSource = new MatTableDataSource(this.dataSource);
  }


  ngOnInit() {
    // form group settings
    this.generateGraphForm = new FormGroup({
      xAxis: new FormControl(Validators.required),
      yAxis: new FormControl(Validators.required)
    });

    // delay for graph
    setTimeout(() => {
      this.show = true;
    }, 400);

    this.chosenDataset = this.globalService.getSampleData();
    this.datasetId = this.chosenDataset.id;
    this.getData().subscribe(response => {
      this.dataSource = response;
    });
    this.getData().subscribe(response => {
      this.dataset = Array.of(response);
      console.log('Original Dataset', this.dataset[0]);

      let count = 1;
      this.dataset[0].forEach(x => {

        let keyValueArray = [];
        keyValueArray = Object.keys(x).map(key => [String(key), x[key]]);
        console.log('keyValueArray ' + count, keyValueArray);
        this.mappedArray.push(keyValueArray);
        ++count;
      });

      console.log('xArray', this.xArray);
      console.log('yArray', this.yArray);

      console.log('mapped Array: item 1', this.mappedArray[0]);

      console.log('Items in Mapped Array item 01');
      this.mappedArray[0].forEach(x => console.log(x[0] + ' : ' + x[1]));

      this.columnHeaders = this.mappedArray[0].map(x => x[0]);
      this.columnHeaders = this.columnHeaders.filter(x => x !== '_id');

      console.log('Column Headers', this.columnHeaders);

    });
  }

  getData() {
    return this.httpClient.get(this.ROOT_URL + '/filesArray?id=' + this.datasetId);
  }

  getValues() {
    if (this.generateGraphForm.value.xAxis && this.generateGraphForm.value.yAxis) {
      this.xArray = [];
      this.yArray = [];
      this.dataset[0].forEach(x => {
        this.xArray.push(x[this.generateGraphForm.value.xAxis]);
        this.yArray.push(x[this.generateGraphForm.value.yAxis]);
      });
      this.barChartsLabels = this.xArray;
      this.barChartData = [
        {data: this.yArray, label: this.generateGraphForm.value.yAxis}
      ];

    }
  }

}
