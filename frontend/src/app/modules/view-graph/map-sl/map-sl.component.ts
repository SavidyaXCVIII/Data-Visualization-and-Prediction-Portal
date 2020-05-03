import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataModel} from 'src/app/models/dataset';
import {map} from 'rxjs/operators';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-map-sl',
  templateUrl: './map-sl.component.html',
  styleUrls: ['./map-sl.component.scss']
})
export class MapSlComponent implements OnInit {

  title = 'LKmap';

  Ratnapura: string;
  Mannar: string;
  Jaffna: string;
  Colombo: string;
  Monaragala: string;
  Matara: string;
  Kilinochchi: string;
  Kalutara: string;
  Hambantota: string;
  Matale: string;
  Kegalle: string;
  Batticaloa: string;
  Galle: string;
  Nuwara_Eliya: string;
  Puttalam: string;
  Gampaha: string;
  Mullativu: string;
  Badulla: string;
  Ampara: string;
  Trincomalee: string;
  Kurunegala: string;
  Kandy: string;
  Anuradhapura: string;
  Vavuniya: string;
  Polonnaruwa: string;
  readonly ROOT_URL = 'http://localhost:8080';
  private chosenDataset: any;
  datasetId: any;
  dataset: any[];

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  getData() {
    return this.http.get(this.ROOT_URL + '/filesArray?id=' + this.datasetId);
  }

  ngOnInit(): void {
    this.chosenDataset = this.globalService.getSampleData();
    this.datasetId = this.chosenDataset.id;
    this.Colombo = 'colombo';
    this.findDistrict();
  }

  findDistrict() {
    this.getData().subscribe(response => {
      this.dataset = Array.of(response);
      let count = 1;
      let builder = '';
      this.dataset[0].forEach(x => {
        let keyValueArray: any[] = [];
        keyValueArray = Object.keys(x).map(key => [String(key), x[key]]);
        console.log('keyValueArray ' + count, keyValueArray);
        const testingArray: [] = keyValueArray[1];
        console.log('Testing 01', testingArray);
        testingArray.forEach(y => {
          const text: string = y;
          if (text.toLowerCase().trim() === 'Puttalam'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Puttalam = builder;
          } else if (text.toLowerCase().trim() === 'Gampaha'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Gampaha = builder;
          }
        });
        ++count;
      });
    });
  }

}
