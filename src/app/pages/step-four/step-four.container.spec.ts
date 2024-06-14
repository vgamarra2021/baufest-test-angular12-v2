import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFourContainer } from './step-four.container';

describe('StepFourContainer', () => {
  let component: StepFourContainer;
  let fixture: ComponentFixture<StepFourContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepFourContainer],
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
