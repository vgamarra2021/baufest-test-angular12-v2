import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoContainer } from './step-two.container';

describe('StepTwoContainer', () => {
  let component: StepTwoContainer;
  let fixture: ComponentFixture<StepTwoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepTwoContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
