import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StepFourContainer } from './step-four.container';

describe('StepFourContainer', () => {
  let component: StepFourContainer;
  let fixture: ComponentFixture<StepFourContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepFourContainer],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFourContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
