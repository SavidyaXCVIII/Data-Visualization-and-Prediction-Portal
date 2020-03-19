import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturePredictionRoutingModule } from './feature-prediction-routing.module';
import { PredictionComponent } from './prediction/prediction.component';


@NgModule({
  declarations: [PredictionComponent],
  imports: [
    CommonModule,
    FeaturePredictionRoutingModule
  ]
})
export class FeaturePredictionModule { }
