import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCompileComponent } from './bar-chart-compile.component';

describe('BarChartCompileComponent', () => {
  let component: BarChartCompileComponent;
  let fixture: ComponentFixture<BarChartCompileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartCompileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartCompileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
