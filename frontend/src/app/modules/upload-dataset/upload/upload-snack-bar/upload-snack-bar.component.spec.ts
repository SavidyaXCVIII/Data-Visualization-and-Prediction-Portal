import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSnackBarComponent } from './upload-snack-bar.component';

describe('UploadSnackBarComponent', () => {
  let component: UploadSnackBarComponent;
  let fixture: ComponentFixture<UploadSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
