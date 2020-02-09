import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadDatasetRoutingModule } from './upload-dataset-routing.module';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadDatasetRoutingModule
  ]
})
export class UploadDatasetModule { }
