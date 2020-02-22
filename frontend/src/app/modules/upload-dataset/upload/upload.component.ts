import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  ngOnInit() {
  }

}
