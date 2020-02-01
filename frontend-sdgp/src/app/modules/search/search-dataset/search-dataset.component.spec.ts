import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDatasetComponent } from './search-dataset.component';

describe('SearchDatasetComponent', () => {
  let component: SearchDatasetComponent;
  let fixture: ComponentFixture<SearchDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
