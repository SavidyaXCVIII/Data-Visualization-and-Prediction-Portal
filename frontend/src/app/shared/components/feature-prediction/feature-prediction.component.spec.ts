import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePredictionComponent } from './feature-prediction.component';

describe('FeaturePredictionComponent', () => {
  let component: FeaturePredictionComponent;
  let fixture: ComponentFixture<FeaturePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturePredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
