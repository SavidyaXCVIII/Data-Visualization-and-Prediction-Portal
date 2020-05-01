import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingnupSnackBarComponent } from './singnup-snack-bar.component';

describe('SingnupSnackBarComponent', () => {
  let component: SingnupSnackBarComponent;
  let fixture: ComponentFixture<SingnupSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingnupSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingnupSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
