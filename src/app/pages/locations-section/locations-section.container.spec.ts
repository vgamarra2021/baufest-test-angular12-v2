import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsSectionContainer } from './locations-section.container';

describe('LocationsSectionContainer', () => {
  let component: LocationsSectionContainer;
  let fixture: ComponentFixture<LocationsSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
