import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCompareBarContainer } from './character-compare-bar.container';

describe('CharacterCompareBarContainer', () => {
  let component: CharacterCompareBarContainer;
  let fixture: ComponentFixture<CharacterCompareBarContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCompareBarContainer],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCompareBarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
