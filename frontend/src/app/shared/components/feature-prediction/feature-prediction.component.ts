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


  readonly ROOT_URL_FLASK = 'http://localhost:5000';
  readonly ROOT_URL = 'http://localhost:8080';
  chosenDataset = new Dataset();
  datasetId;
  dataSource: any;
  dataset: any[];
  mappedArray: any[] = [];
  columnHeaders: string[];
  columnHeaderML: string[] = [];
  private data: { prediction_column: string; column_list: string[]; algorithm: string; dataset_id: number };
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
      this.columnHeaders.splice(0, 1);
      this.userInput = new FormGroup({});

      this.columnHeaders.forEach(element => this.userInput.addControl(element, new FormControl(undefined, [Validators.required])));

    });


  }


  getData() {
    return this.http.get(this.ROOT_URL + '/filesArray?id=' + this.datasetId);
  }


  onSubmit() {
    this.columnHeaderML = this.columnHeaders;
    const index: number = this.columnHeaderML.indexOf(this.sendDataFormGroup.value.column);
    if (index !== -1) {
      this.columnHeaderML.splice(index, 1);
    }
    // delete this.columnHeaderML[this.sendDataFormGroup.value.column];

    this.data = {
      dataset_id: this.datasetId,
      algorithm: this.sendDataFormGroup.value.selectAlgorithm,
      prediction_column: this.sendDataFormGroup.value.column,
      column_list: this.columnHeaders
    };

    this.getAccuracyResult().subscribe(response => {
      this.accuracy = response;
      this.showGetPrediction = true;
      this.showAccuracy = true;
    });
  }

  getAccuracyResult() {
    // tslint:disable-next-line:max-line-length
    console.log(this.data.column_list);
    return this.http.get(this.ROOT_URL_FLASK + '/select_features_predictors?dataset_id=' +
      this.data.dataset_id + '&algorithm=' + this.data.algorithm + '&prediction_column=' +
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
