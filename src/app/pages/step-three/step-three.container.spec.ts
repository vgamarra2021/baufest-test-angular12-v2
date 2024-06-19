import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StepThreeContainer } from './step-three.container';

describe('StepThreeContainer', () => {
  let component: StepThreeContainer;
  let fixture: ComponentFixture<StepThreeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepThreeContainer],
      imports: [ReactiveFormsModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
