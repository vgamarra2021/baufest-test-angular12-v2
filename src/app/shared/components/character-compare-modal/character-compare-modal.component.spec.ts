import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCompareModalComponent } from './character-compare-modal.component';

describe('CharacterCompareModalComponent', () => {
  let component: CharacterCompareModalComponent;
  let fixture: ComponentFixture<CharacterCompareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCompareModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCompareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
