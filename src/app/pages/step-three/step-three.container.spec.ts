import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeContainer } from './step-three.container';

describe('StepThreeContainer', () => {
  let component: StepThreeContainer;
  let fixture: ComponentFixture<StepThreeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThreeContainer ]
    })
    .compileComponents();
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
