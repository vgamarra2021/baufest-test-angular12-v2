import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCompareBarComponent } from './character-compare-bar.component';

describe('CharacterCompareBarComponent', () => {
  let component: CharacterCompareBarComponent;
  let fixture: ComponentFixture<CharacterCompareBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCompareBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCompareBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
