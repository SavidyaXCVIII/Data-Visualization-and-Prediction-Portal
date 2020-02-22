import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCoverComponent } from './landing-cover.component';

describe('LandingCoverComponent', () => {
  let component: LandingCoverComponent;
  let fixture: ComponentFixture<LandingCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
