import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataset';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-sl',
  templateUrl: './map-sl.component.html',
  styleUrls: ['./map-sl.component.scss']
})
export class MapSlComponent {

  title = 'LKmap';

  cities: Observable<DataModel>;
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

  constructor(private http: HttpClient) {
    this.cities = this.http.get<DataModel>('./assets/data.json');

    this.cities.subscribe(events => {
      // https://stackoverflow.com/questions/55744531/iterate-over-json-with-angular-7-using-services
      this.Ratnapura = events[0].District + "\n" + "Number sat : " + events[0].number_sat + "\n" + "Passed all : " + events[0].passed_all + "\n" + "Passed all subject percentage : " + events[0].passed_all_subject_perc + "\n" + "Failed all : " + events[0].failed_all + "\n" + "Failed all subject percentage : " + events[0].failed_all_subject_perc;
      this.Mannar = events[1].District + "\n" + "Number sat : " + events[1].number_sat + "\n" + "Passed all : " + events[1].passed_all + "\n" + "Passed all subject percentage : " + events[1].passed_all_subject_perc + "\n" + "Failed all : " + events[1].failed_all + "\n" + "Failed all subject percentage : " + events[1].failed_all_subject_perc;
      this.Jaffna = events[2].District + "\n" + "Number sat : " + events[2].number_sat + "\n" + "Passed all : " + events[2].passed_all + "\n" + "Passed all subject percentage : " + events[2].passed_all_subject_perc + "\n" + "Failed all : " + events[2].failed_all + "\n" + "Failed all subject percentage : " + events[2].failed_all_subject_perc;
      this.Colombo = events[3].District + "\n" + "Number sat : " + events[3].number_sat + "\n" + "Passed all : " + events[3].passed_all + "\n" + "Passed all subject percentage : " + events[3].passed_all_subject_perc + "\n" + "Failed all : " + events[3].failed_all + "\n" + "Failed all subject percentage : " + events[3].failed_all_subject_perc;
      this.Monaragala = events[4].District + "\n" + "Number sat : " + events[4].number_sat + "\n" + "Passed all : " + events[4].passed_all + "\n" + "Passed all subject percentage : " + events[4].passed_all_subject_perc + "\n" + "Failed all : " + events[4].failed_all + "\n" + "Failed all subject percentage : " + events[4].failed_all_subject_perc;
      this.Matara = events[5].District + "\n" + "Number sat : " + events[5].number_sat + "\n" + "Passed all : " + events[5].passed_all + "\n" + "Passed all subject percentage : " + events[5].passed_all_subject_perc + "\n" + "Failed all : " + events[5].failed_all + "\n" + "Failed all subject percentage : " + events[5].failed_all_subject_perc;
      this.Kilinochchi = events[6].District + "\n" + "Number sat : " + events[6].number_sat + "\n" + "Passed all : " + events[6].passed_all + "\n" + "Passed all subject percentage : " + events[6].passed_all_subject_perc + "\n" + "Failed all : " + events[6].failed_all + "\n" + "Failed all subject percentage : " + events[6].failed_all_subject_perc;
      this.Kalutara = events[7].District + "\n" + "Number sat : " + events[7].number_sat + "\n" + "Passed all : " + events[7].passed_all + "\n" + "Passed all subject percentage : " + events[7].passed_all_subject_perc + "\n" + "Failed all : " + events[7].failed_all + "\n" + "Failed all subject percentage : " + events[7].failed_all_subject_perc;
      this.Hambantota = events[8].District + "\n" + "Number sat : " + events[8].number_sat + "\n" + "Passed all : " + events[8].passed_all + "\n" + "Passed all subject percentage : " + events[8].passed_all_subject_perc + "\n" + "Failed all : " + events[8].failed_all + "\n" + "Failed all subject percentage : " + events[8].failed_all_subject_perc;
      this.Matale = events[9].District + "\n" + "Number sat : " + events[9].number_sat + "\n" + "Passed all : " + events[9].passed_all + "\n" + "Passed all subject percentage : " + events[9].passed_all_subject_perc + "\n" + "Failed all : " + events[9].failed_all + "\n" + "Failed all subject percentage : " + events[9].failed_all_subject_perc;
      this.Kegalle = events[10].District + "\n" + "Number sat : " + events[10].number_sat + "\n" + "Passed all : " + events[10].passed_all + "\n" + "Passed all subject percentage : " + events[10].passed_all_subject_perc + "\n" + "Failed all : " + events[10].failed_all + "\n" + "Failed all subject percentage : " + events[10].failed_all_subject_perc;
      this.Batticaloa = events[11].District + "\n" + "Number sat : " + events[11].number_sat + "\n" + "Passed all : " + events[11].passed_all + "\n" + "Passed all subject percentage : " + events[11].passed_all_subject_perc + "\n" + "Failed all : " + events[11].failed_all + "\n" + "Failed all subject percentage : " + events[11].failed_all_subject_perc;
      this.Galle = events[12].District + "\n" + "Number sat : " + events[12].number_sat + "\n" + "Passed all : " + events[12].passed_all + "\n" + "Passed all subject percentage : " + events[12].passed_all_subject_perc + "\n" + "Failed all : " + events[12].failed_all + "\n" + "Failed all subject percentage : " + events[12].failed_all_subject_perc;
      this.Nuwara_Eliya = events[13].District + "\n" + "Number sat : " + events[13].number_sat + "\n" + "Passed all : " + events[13].passed_all + "\n" + "Passed all subject percentage : " + events[13].passed_all_subject_perc + "\n" + "Failed all : " + events[13].failed_all + "\n" + "Failed all subject percentage : " + events[13].failed_all_subject_perc;
      this.Puttalam = events[14].District + "\n" + "Number sat : " + events[14].number_sat + "\n" + "Passed all : " + events[14].passed_all + "\n" + "Passed all subject percentage : " + events[14].passed_all_subject_perc + "\n" + "Failed all : " + events[14].failed_all + "\n" + "Failed all subject percentage : " + events[14].failed_all_subject_perc;
      this.Gampaha = events[15].District + "\n" + "Number sat : " + events[15].number_sat + "\n" + "Passed all : " + events[15].passed_all + "\n" + "Passed all subject percentage : " + events[15].passed_all_subject_perc + "\n" + "Failed all : " + events[15].failed_all + "\n" + "Failed all subject percentage : " + events[15].failed_all_subject_perc;
      this.Mullativu = events[16].District + "\n" + "Number sat : " + events[16].number_sat + "\n" + "Passed all : " + events[16].passed_all + "\n" + "Passed all subject percentage : " + events[16].passed_all_subject_perc + "\n" + "Failed all : " + events[16].failed_all + "\n" + "Failed all subject percentage : " + events[16].failed_all_subject_perc;
      this.Badulla = events[17].District + "\n" + "Number sat : " + events[17].number_sat + "\n" + "Passed all : " + events[17].passed_all + "\n" + "Passed all subject percentage : " + events[17].passed_all_subject_perc + "\n" + "Failed all : " + events[17].failed_all + "\n" + "Failed all subject percentage : " + events[17].failed_all_subject_perc;
      this.Ampara = events[18].District + "\n" + "Number sat : " + events[18].number_sat + "\n" + "Passed all : " + events[18].passed_all + "\n" + "Passed all subject percentage : " + events[18].passed_all_subject_perc + "\n" + "Failed all : " + events[18].failed_all + "\n" + "Failed all subject percentage : " + events[18].failed_all_subject_perc;
      this.Trincomalee = events[19].District + "\n" + "Number sat : " + events[19].number_sat + "\n" + "Passed all : " + events[19].passed_all + "\n" + "Passed all subject percentage : " + events[19].passed_all_subject_perc + "\n" + "Failed all : " + events[19].failed_all + "\n" + "Failed all subject percentage : " + events[19].failed_all_subject_perc;
      this.Kurunegala = events[20].District + "\n" + "Number sat : " + events[20].number_sat + "\n" + "Passed all : " + events[20].passed_all + "\n" + "Passed all subject percentage : " + events[20].passed_all_subject_perc + "\n" + "Failed all : " + events[20].failed_all + "\n" + "Failed all subject percentage : " + events[20].failed_all_subject_perc;
      this.Kandy = events[21].District + "\n" + "Number sat : " + events[21].number_sat + "\n" + "Passed all : " + events[21].passed_all + "\n" + "Passed all subject percentage : " + events[21].passed_all_subject_perc + "\n" + "Failed all : " + events[21].failed_all + "\n" + "Failed all subject percentage : " + events[21].failed_all_subject_perc;
      this.Anuradhapura = events[22].District + "\n" + "Number sat : " + events[22].number_sat + "\n" + "Passed all : " + events[22].passed_all + "\n" + "Passed all subject percentage : " + events[22].passed_all_subject_perc + "\n" + "Failed all : " + events[22].failed_all + "\n" + "Failed all subject percentage : " + events[22].failed_all_subject_perc;
      this.Vavuniya = events[23].District + "\n" + "Number sat : " + events[23].number_sat + "\n" + "Passed all : " + events[23].passed_all + "\n" + "Passed all subject percentage : " + events[23].passed_all_subject_perc + "\n" + "Failed all : " + events[23].failed_all + "\n" + "Failed all subject percentage : " + events[23].failed_all_subject_perc;
      this.Polonnaruwa = events[24].District + "\n" + "Number sat : " + events[24].number_sat + "\n" + "Passed all : " + events[24].passed_all + "\n" + "Passed all subject percentage : " + events[24].passed_all_subject_perc + "\n" + "Failed all : " + events[24].failed_all + "\n" + "Failed all subject percentage : " + events[24].failed_all_subject_perc;

    });

    // https://stackoverflow.com/questions/55744531/iterate-over-json-with-angular-7-using-services
    console.log(this.Ratnapura);
    console.log(this.Mannar);
    console.log(this.Jaffna);
    console.log(this.Colombo);
    console.log(this.Monaragala);
    console.log(this.Matara);
    console.log(this.Kilinochchi);
    console.log(this.Kalutara);
    console.log(this.Hambantota);
    console.log(this.Matale);
    console.log(this.Kegalle);
    console.log(this.Batticaloa);
    console.log(this.Galle);
    console.log(this.Nuwara_Eliya);
    console.log(this.Puttalam);
    console.log(this.Gampaha);
    console.log(this.Mullativu);
    console.log(this.Badulla);
    console.log(this.Ampara);
    console.log(this.Trincomalee);
    console.log(this.Kurunegala);
    console.log(this.Kandy);
    console.log(this.Anuradhapura);
    console.log(this.Vavuniya);
    console.log(this.Polonnaruwa);
  }
  // constructor(){
  //   console.log(this.userData);
  // }

}
