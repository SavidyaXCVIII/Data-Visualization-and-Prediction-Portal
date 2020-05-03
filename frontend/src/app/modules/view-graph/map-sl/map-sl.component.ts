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
          } else if (text.toLowerCase().trim() === 'Ratnapura'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Ratnapura = builder;
          }  else if (text.toLowerCase().trim() === 'Mannar'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Mannar = builder;
          }  else if (text.toLowerCase().trim() === 'Colombo'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Colombo = builder;
          }  else if (text.toLowerCase().trim() === 'Jaffna'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Jaffna = builder;
          }  else if (text.toLowerCase().trim() === 'Ampara'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Ampara = builder;
          }  else if (text.toLowerCase().trim() === 'Anuradhapura'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Anuradhapura = builder;
          }  else if (text.toLowerCase().trim() === 'Badulla'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Badulla = builder;
          } else if (text.toLowerCase().trim() === 'Batticaloa'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Batticaloa = builder;
          } else if (text.toLowerCase().trim() === 'Galle'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Galle = builder;
          } else if (text.toLowerCase().trim() === 'Hambantota'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Hambantota = builder;
          } else if (text.toLowerCase().trim() === 'Kalutara'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Kalutara = builder;
          } else if (text.toLowerCase().trim() === 'Kandy'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Kandy = builder;
          }  else if (text.toLowerCase().trim() === 'Kegalle'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Kegalle = builder;
          } else if (text.toLowerCase().trim() === 'Kilinochchi'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Kilinochchi = builder;
          } else if (text.toLowerCase().trim() === 'Kurunegala'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Kurunegala = builder;
          } else if (text.toLowerCase().trim() === 'Matale'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Matale = builder;
          } else if (text.toLowerCase().trim() === 'Monaragala'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Monaragala = builder;
          }  else if (text.toLowerCase().trim() === 'Mullativu'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Mullativu = builder;
          } else if (text.toLowerCase().trim() === 'Nuwara Eliya'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Nuwara_Eliya = builder;
          } else if (text.toLowerCase().trim() === 'Polonnaruwa'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Polonnaruwa = builder;
          } else if (text.toLowerCase().trim() === 'Trincomalee'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Trincomalee = builder;
          } else if (text.toLowerCase().trim() === 'Vavuniya'.toLowerCase().trim()) {
            keyValueArray = keyValueArray.filter(z => z[0] !== '_id');
            keyValueArray.forEach(a => {
              const valueArray: [] = a;
              valueArray.forEach(b => {
                builder = builder + b + '  ';
              });
              builder = builder + ',\n';
            });
            this.Vavuniya = builder;
          }
        });
        ++count;
      });
    });
  }

}
