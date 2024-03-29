import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Dataset} from '../../../models/dataset';
import {DatePipe} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {UploadSnackBarComponent} from './upload-snack-bar/upload-snack-bar.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  durationInSeconds = 5;
  uploadDetailsFormGroup: FormGroup;
  uploadInProgress = false;
  dataset = new Dataset();
  uploadFile = new FormData();
  currentDate = new Date();
  showSpinner = false;
  constructor(private http: HttpClient,
              private datePipe: DatePipe, private snackBar: MatSnackBar) {
  }

  ngOnInit() {

    this.uploadDetailsFormGroup = new FormGroup({
      datasetName: new FormControl({value: '', disabled: this.uploadInProgress}, Validators.required),
      publisher: new FormControl({value: '', disabled: this.uploadInProgress}),
      datasetYear: new FormControl({value: undefined, disabled: this.uploadInProgress}, Validators.required),
      releasedDate: new FormControl({value: undefined, disabled: this.uploadInProgress}, Validators.required),
      category: new FormControl({value: undefined, disabled: this.uploadInProgress}, Validators.required),
      description: new FormControl({value: '', disabled: this.uploadInProgress}),
      csvFile: new FormControl({value: undefined, disabled: this.uploadInProgress}, Validators.required)
    });
  }

  validateFile(event) {
    if (event.target.files && event.target.files) {

      this.uploadDetailsFormGroup.controls.csvFile.setValue(event.target.files[0].name);
      this.uploadFile.append('file', event.target.files[0]);


    } else {

    }

  }

  uploadDataset() {
    this.showSpinner = true;
    this.uploadInProgress = true;
    this.dataset = {...this.uploadDetailsFormGroup.value};
    const year: string = this.datePipe.transform(this.uploadDetailsFormGroup.value.datasetYear, 'yyyy');
    const releaseDate: string = this.datePipe.transform(this.uploadDetailsFormGroup.value.releasedDate, 'dd-MM-yyyy');
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:8080/files?datasetName=' + this.dataset.datasetName + '&publisher=' + this.dataset.publisher +
      // tslint:disable-next-line:max-line-length
      '&year=' + year + '&releasedDate=' + releaseDate + '&category=' + this.dataset.category + '&description=' + this.dataset.description, this.uploadFile).subscribe((val) => {
      console.log(val);
      this.showSpinner = false;
      this.openSnackBar();
      this.onReset();
    });
  }

  onReset() {
    this.uploadDetailsFormGroup.reset();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(UploadSnackBarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
}
