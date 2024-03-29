import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadDatasetRoutingModule } from './upload-dataset-routing.module';
import { UploadComponent } from './upload/upload.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material';
import { UploadSnackBarComponent } from './upload/upload-snack-bar/upload-snack-bar.component';
import {LogInComponent} from '../../shared/components/log-in/log-in.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadDatasetRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class UploadDatasetModule { }
