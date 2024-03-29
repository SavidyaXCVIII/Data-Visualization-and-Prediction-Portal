import {Component, OnInit} from '@angular/core';
import {Dataset} from '../../../models/dataset';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../../services/global.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  xArray: string[] = [];
  yArray: number[] = [];
  secondYArray: number[] = [];

  public lineChartData = [
    {data: [], label: ''}
  ];

  public lineChartsLabels = [];

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType = 'line';
  show = false;
  length: number;
  pageSize = 10;
  start: number;
  end: number;
  chosenDataset = new Dataset();
  datasetId;
  readonly ROOT_URL = 'http://localhost:8080';
  dataSource: any;
  dataset: any[];
  mappedArray: any[] = [];
  columnHeaders: string[];
  generateGraphForm: FormGroup;
  pageEvent: PageEvent;

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
    this.dataSource = new MatTableDataSource(this.dataSource);
  }


  ngOnInit() {
    // form group settings
    this.generateGraphForm = new FormGroup({
      xAxis: new FormControl(undefined, Validators.required),
      yAxis: new FormControl(undefined, Validators.required),
      secondYAxis: new FormControl(undefined)
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

      this.mappedArray[0].forEach(x => console.log(x[0] + ' : ' + x[1]));
      this.columnHeaders = this.mappedArray[0].map(x => x[0]);
      this.columnHeaders = this.columnHeaders.filter(x => x !== '_id');
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
      this.length = this.xArray.length;
      this.lineChartsLabels = this.xArray.slice(0, 10);
      this.lineChartData = [
        {data: this.yArray.slice(0, 10), label: this.generateGraphForm.value.yAxis}
      ];
    }
  }

  getValuesSecond() {
    if (this.generateGraphForm.value.xAxis && this.generateGraphForm.value.yAxis && this.generateGraphForm.value.secondYAxis) {
      this.secondYArray = [];
      this.xArray = [];
      this.dataset[0].forEach(x => {
        this.xArray.push(x[this.generateGraphForm.value.xAxis]);
        this.secondYArray.push(x[this.generateGraphForm.value.secondYAxis]);
      });
      this.length = this.xArray.length;
      this.lineChartsLabels = this.xArray.slice(0, 10);
      this.lineChartData = [
        {data: this.yArray.slice(0, 10), label: this.generateGraphForm.value.yAxis},
        {data: this.secondYArray.slice(0, 10), label: this.generateGraphForm.value.secondYAxis}
      ];
    }
  }

  getValuesCustom(start, end) {
    if (this.generateGraphForm.value.xAxis && this.generateGraphForm.value.yAxis) {
      this.xArray = [];
      this.yArray = [];
      this.dataset[0].forEach(x => {
        this.xArray.push(x[this.generateGraphForm.value.xAxis]);
        this.yArray.push(x[this.generateGraphForm.value.yAxis]);
      });
      this.length = this.xArray.length;
      this.lineChartsLabels = this.xArray.slice(start, end);
      this.lineChartData = [
        {data: this.yArray.slice(start, end), label: this.generateGraphForm.value.yAxis}
      ];
    }
  }

  getValuesCustomSecond(start, end) {
    if (this.generateGraphForm.value.xAxis && this.generateGraphForm.value.yAxis && this.generateGraphForm.value.secondYAxis) {
      this.xArray = [];
      this.secondYArray = [];
      this.dataset[0].forEach(x => {
        this.xArray.push(x[this.generateGraphForm.value.xAxis]);
        this.secondYArray.push(x[this.generateGraphForm.value.secondYAxis]);
      });
      this.length = this.xArray.length;
      this.lineChartsLabels = this.xArray.slice(start, end);
      this.lineChartData = [
        {data: this.yArray.slice(start, end), label: this.generateGraphForm.value.yAxis},
        {data: this.secondYArray.slice(start, end), label: this.generateGraphForm.value.secondYAxis}
      ];
    }
  }

  setMatPaginator() {
    this.end = (this.pageEvent.pageIndex + 1) * this.pageEvent.pageSize;
    this.start = this.end - (this.pageEvent.pageSize);
    this.getValuesCustom(this.start, this.end);
    this.getValuesCustomSecond(this.start, this.end);
  }


}
