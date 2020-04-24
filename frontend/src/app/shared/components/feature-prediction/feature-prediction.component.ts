import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feature-prediction',
  templateUrl: './feature-prediction.component.html',
  styleUrls: ['./feature-prediction.component.css']
})
export class FeaturePredictionComponent implements OnInit {

  readonly ROOT_URL = 'http://127.0.0.1:5000/select_features_predictors';

  data = {
    dataset_name : '2020 A/L Student List',
    algorithm : 'Random Forest',
    prediction_column : 'Teachers',
    column_list: ['one', 'two', 'three']
  };

  constructor(private http: HttpClient) {
    this.sendFeaturesPredictors();
  }

  ngOnInit() {
  }

  sendFeaturesPredictors() {
    this.http.post(this.ROOT_URL, this.data).subscribe(response => {
      console.log(response);
    });
  }

}
