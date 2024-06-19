import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiStepFormComponent } from './multi-step-form.component';

describe('MultiStepFormComponent', () => {
  let component: MultiStepFormComponent;
  let fixture: ComponentFixture<MultiStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiStepFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
