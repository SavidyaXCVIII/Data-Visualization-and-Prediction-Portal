import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dataset} from '../../../models/dataset';
import {GlobalService} from '../../../services/global.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.css']
})
export class DataSetComponent implements OnInit {

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
  }
  chosenDataset = new Dataset();
  readonly ROOT_URL = 'http://localhost:8080';
  data: any;
  dataset: any[];
  mappedArray: any[] = [];
  columnHeaders: string[];
  dataSource = new MatTableDataSource(this.data);

  ngOnInit() {
    this.chosenDataset = this.globalService.getSampleData();
    this.getData().subscribe(response => {
      this.data = response;
    });
    this.getData().subscribe(response => {
      this.dataset = Array.of(response);
      console.log('Original Dataset', this.dataset[0]);

      let count = 1;
      this.dataset[0].forEach( x => {

        let keyValueArray = [];
        keyValueArray = Object.keys(x).map( key => [String(key), x[key]]);
        console.log('keyValueArray ' + count, keyValueArray);
        this.mappedArray.push(keyValueArray);
        ++count;
      });
      console.log('mapped Array: item 1', this.mappedArray[0]);

      console.log('Items in Mapped Array item 01');
      this.mappedArray[0].forEach( x => console.log( x[0] + ' : ' + x[1]));

      this.columnHeaders = this.mappedArray[0].map( x => x[0]);
      this.columnHeaders = this.columnHeaders.filter( x => x !== '_id');

      console.log('Column Headers', this.columnHeaders);

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData() {
    return this.httpClient.get(this.ROOT_URL + '/filesArray');
  }

}
