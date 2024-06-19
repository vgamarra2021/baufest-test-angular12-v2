import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSectionContainer } from './characters-section.container';

describe('CharactersSectionContainer', () => {
  let component: CharactersSectionContainer;
  let fixture: ComponentFixture<CharactersSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersSectionContainer],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
