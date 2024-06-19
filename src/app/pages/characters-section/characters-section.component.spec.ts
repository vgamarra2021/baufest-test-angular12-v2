import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSectionComponent } from './characters-section.component';

describe('CharactersSectionComponent', () => {
  let component: CharactersSectionComponent;
  let fixture: ComponentFixture<CharactersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersSectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
