import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSlComponent } from './map-sl.component';

describe('MapSlComponent', () => {
  let component: MapSlComponent;
  let fixture: ComponentFixture<MapSlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
