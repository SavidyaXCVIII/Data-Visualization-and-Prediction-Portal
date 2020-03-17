import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDatasetComponent } from './show-dataset.component';

describe('ShowDatasetComponent', () => {
  let component: ShowDatasetComponent;
  let fixture: ComponentFixture<ShowDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
