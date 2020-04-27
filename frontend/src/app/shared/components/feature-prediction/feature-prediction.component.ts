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


  readonly ROOT_URL_FLASK = 'http://127.0.0.1:5000';
  readonly ROOT_URL = 'http://localhost:8080';
  chosenDataset = new Dataset();
  datasetId;
  dataSource: any;
  dataset: any[];
  mappedArray: any[] = [];
  columnHeaders: string[];
  private data: { prediction_column: string; dataset_name: string; column_list: string[]; algorithm: string };
  accuracy: any;
  sendDataFormGroup: FormGroup;
  userInput: FormGroup;
  showAccuracy = false;
  showPrediction = false;
  showGetPrediction = false;

  ngOnInit() {
    this.chosenDataset = this.globalService.getSampleData();
    this.datasetId = this.chosenDataset.id;
    this.getData().subscribe(response => {
      this.dataSource = response;
    });

    this.sendDataFormGroup = new FormGroup({
      selectAlgorithm: new FormControl(undefined, Validators.required),
      column: new FormControl(undefined, Validators.required)
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

      this.userInput = new FormGroup({});

      this.columnHeaders.forEach(element => this.userInput.addControl(element, new FormControl(undefined, [Validators.required])));

    });


  }


  getData() {
    return this.http.get(this.ROOT_URL + '/filesArray?id=' + this.datasetId);
  }


  onSubmit() {

    this.data = {
      dataset_name: 'Testing',
      algorithm: 'linear',
      prediction_column: 'pass_all_perc',
      column_list: ['num_sat', 'fail_all', 'fail_all_perc']
    };

    this.getAccuracyResult().subscribe(response => {
      this.accuracy = response;
      console.log(response);
      this.showGetPrediction = true;
      this.showAccuracy = true;
    });

    console.log(this.ROOT_URL_FLASK + '/select_features_predictors?dataset_name=' +
      this.data.dataset_name + '&algorithm=' + this.data.algorithm + '&prediction_column=' +
      this.data.prediction_column + '&column_list=' + this.data.column_list);


  }

  getAccuracyResult() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.ROOT_URL_FLASK + '/select_features_predictors?dataset_name=' +
      this.data.dataset_name + '&algorithm=' + this.data.algorithm + '&prediction_column=' +
      this.data.prediction_column + '&column_list=' + this.data.column_list);
  }

  onSubmitSendValues() {
    this.showPrediction = true;
    let count = 0;
    const inputValues = [];
    this.columnHeaders.forEach(element => {
      inputValues[count] = this.userInput.controls[element].value;
      ++count;
    });
    console.log(inputValues);
  }
}
