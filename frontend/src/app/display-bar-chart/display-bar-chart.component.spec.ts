import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBarChartComponent } from './display-bar-chart.component';

describe('DisplayBarChartComponent', () => {
  let component: DisplayBarChartComponent;
  let fixture: ComponentFixture<DisplayBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
