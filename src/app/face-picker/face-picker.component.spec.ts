import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePickerComponent } from './face-picker.component';

describe('FacePickerComponent', () => {
  let component: FacePickerComponent;
  let fixture: ComponentFixture<FacePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
