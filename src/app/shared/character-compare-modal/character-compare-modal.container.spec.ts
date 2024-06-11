import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCompareModalContainer } from './character-compare-modal.container';

describe('CharacterCompareModalContainer', () => {
  let component: CharacterCompareModalContainer;
  let fixture: ComponentFixture<CharacterCompareModalContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCompareModalContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCompareModalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
