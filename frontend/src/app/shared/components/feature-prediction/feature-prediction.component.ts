import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../../services/global.service';
import {MatTableDataSource} from '@angular/material';
import {Dataset} from '../../../models/dataset';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feature-prediction',
  templateUrl: './feature-prediction.component.html',
  styleUrls: ['./feature-prediction.component.css']
})
export class FeaturePredictionComponent implements OnInit {

  constructor(private http: HttpClient, private globalService: GlobalService) {
    // this.sendFeaturesPredictors();
  }

  readonly ROOT_URL_FLASK = 'http://127.0.0.1:5000/select_features_predictors';
  readonly ROOT_URL = 'http://localhost:8080';
  chosenDataset = new Dataset();
  datasetId;
  dataSource: any;
  dataset: any[];
  mappedArray: any[] = [];
  columnHeaders: string[];


  userInput: any;
  selectFeatures = new FormGroup({
    algorithm: new FormControl(undefined, Validators.required),
    column: new FormControl(undefined, Validators.required),
  });
  algorithm: string;
  column: string;
  private data: { prediction_column: string; dataset_name: string; column_list: string[]; algorithm: string };


  ngOnInit() {
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
      console.log('mapped Array: item 1', this.mappedArray[0]);

      console.log('Items in Mapped Array item 01');
      this.mappedArray[0].forEach(x => console.log(x[0] + ' : ' + x[1]));

      this.columnHeaders = this.mappedArray[0].map(x => x[0]);
      this.columnHeaders = this.columnHeaders.filter(x => x !== '_id');

      console.log('Column Headers', this.columnHeaders);

    });
  }


  getData() {
    return this.http.get(this.ROOT_URL + '/filesArray?id=' + this.datasetId);
  }

  onSubmit() {
    this.data = {
      dataset_name : this.datasetId,
      algorithm : this.algorithm,
      prediction_column : this.column,
      column_list: this.columnHeaders
    };
    this.http.post(this.ROOT_URL, this.data).subscribe(response => {
      console.log(response);
    });
    console.log(this.selectFeatures.value);
  }
}
