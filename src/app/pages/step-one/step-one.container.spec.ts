import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { StepOneContainer } from './step-one.container';

describe('StepOneContainer', () => {
  let component: StepOneContainer;
  let fixture: ComponentFixture<StepOneContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepOneContainer],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
