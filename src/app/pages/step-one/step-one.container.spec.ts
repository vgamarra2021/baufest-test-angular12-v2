import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneContainer } from './step-one.container';

describe('StepOneContainer', () => {
  let component: StepOneContainer;
  let fixture: ComponentFixture<StepOneContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepOneContainer],
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
