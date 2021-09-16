import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBioFormComponent } from './update-bio-form.component';

describe('UpdateBioFormComponent', () => {
  let component: UpdateBioFormComponent;
  let fixture: ComponentFixture<UpdateBioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
