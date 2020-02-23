import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  fileUpload(files: FileList) {
    if (files && files.length > 0) {
      const file: File = files.item(0);
      const fileReader: FileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = ev => {
        const csvdata = fileReader.result.toString();
        const body = {data: csvdata};
        return this.http.post('http://localhost:4000/dataset', body)
            .subscribe((data: any) => console.log(JSON.stringify(data.json)));
      };
    }
  }

  ngOnInit() {
  }

}
