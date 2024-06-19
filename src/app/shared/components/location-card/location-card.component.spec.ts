import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCardComponent } from './location-card.component';

describe('LocationCardComponent', () => {
  let component: LocationCardComponent;
  let fixture: ComponentFixture<LocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
