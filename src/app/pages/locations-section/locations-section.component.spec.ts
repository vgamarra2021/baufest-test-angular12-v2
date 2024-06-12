import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSectionComponent } from './locations-section.component';

describe('LocationsSectionComponent', () => {
  let component: LocationsSectionComponent;
  let fixture: ComponentFixture<LocationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
