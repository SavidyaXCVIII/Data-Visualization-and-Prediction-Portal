import {Component, OnInit, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, HostListener} from '@angular/core';
import * as d3 from 'd3';
import {DataModel} from 'src/app/models/dataset';

@Component({
  selector: 'app-bar-chart-compile',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart-compile.component.html',
  styleUrls: ['./bar-chart-compile.component.scss']
})
export class BarChartCompileComponent implements OnChanges {
  // https://github.com/angular/angular/issues/30291
  // @ViewChild('chart', { read: typeof ElementRef, static: false })
  @ViewChild('chart', {read: ElementRef, static: true})
  private chartContainer: ElementRef;

  @Input()
  data: DataModel[];

  // allign chart here
  margin = {top: 200, right: 20, bottom: 30, left: 250};

  constructor() {
  }

  ngOnChanges(): void {
    if (!this.data) {
      return;
    }

    this.createChart();
  }

  onResize() {
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    // const element = this.chartContainer.nativeElement;
    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const svg = d3.select(element).append('svg')
      .attr('width', 1000)
      .attr('height', 600);

    const contentWidth = 700;
    const contentHeight = 300;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.District));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.number_sat)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x') //districts
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x))

      // https://www.youtube.com/watch?v=Fjmxh-gnBM0
      .selectAll('text')
      .attr('transform', 'rotate(-90)')
      .attr('dx', '-4em')
      .attr('dy', '-.8em')
    ;


    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('number_sat');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.District))
      .attr('y', d => y(d.number_sat))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d.number_sat));
  }

}
