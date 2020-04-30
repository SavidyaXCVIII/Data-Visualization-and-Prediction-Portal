import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataModel, Dataset} from '../../../models/dataset';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-select-graph',
  templateUrl: './select-graph.component.html',
  styleUrls: ['./select-graph.component.css']
})
export class SelectGraphComponent implements OnInit {

  barChart = false;
  pieChart = false;
  lineChart = false;
  doughnutChart = false;
  polarChart = false;
  radarChart = false;


  constructor(private http: HttpClient, private globalService: GlobalService) {
    // this.data = this.http.get<DataModel>('./assets/data.json');
  }
  dataset = new Dataset();

  ngOnInit() {
    this.dataset = this.globalService.getSampleData();
  }

  loadBarChart() {
    this.barChart = true;
    this.pieChart = false;
    this.lineChart = false;
    this.doughnutChart = false;
    this.polarChart = false;
    this.radarChart = false;
  }

  loadRadarChart() {
    this.barChart = false;
    this.pieChart = false;
    this.lineChart = false;
    this.doughnutChart = false;
    this.polarChart = false;
    this.radarChart = true;
  }

  loadPolarChart() {
    this.barChart = false;
    this.pieChart = false;
    this.lineChart = false;
    this.doughnutChart = false;
    this.polarChart = true;
    this.radarChart = false;
  }

  loadPieChart() {
    this.barChart = false;
    this.pieChart = true;
    this.lineChart = false;
    this.doughnutChart = false;
    this.polarChart = false;
    this.radarChart = false;
  }

  loadDoughnutChart() {
    this.barChart = false;
    this.pieChart = false;
    this.lineChart = false;
    this.doughnutChart = true;
    this.polarChart = false;
    this.radarChart = false;
  }

  loadLineChart() {
    this.barChart = false;
    this.pieChart = false;
    this.lineChart = true;
    this.doughnutChart = false;
    this.polarChart = false;
    this.radarChart = false;
  }

  scroll(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView(
        { behavior: 'smooth' }
      );
    }, 100);
  }
}
