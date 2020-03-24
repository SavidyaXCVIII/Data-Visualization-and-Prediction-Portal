import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import {Dataset} from '../../../models/dataset';

@Component({
  selector: 'app-show-dataset',
  templateUrl: './show-dataset.component.html',
  styleUrls: ['./show-dataset.component.css']
})
export class ShowDatasetComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  dataset = new Dataset();

  ngOnInit() {
    this.dataset = this.globalService.getSampleData();
  }

}
