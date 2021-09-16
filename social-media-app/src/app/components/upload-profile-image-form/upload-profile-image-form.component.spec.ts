import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfileImageFormComponent } from './upload-profile-image-form.component';

describe('UploadProfileImageFormComponent', () => {
  let component: UploadProfileImageFormComponent;
  let fixture: ComponentFixture<UploadProfileImageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProfileImageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProfileImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
