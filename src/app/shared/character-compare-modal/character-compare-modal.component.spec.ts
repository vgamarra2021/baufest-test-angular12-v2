import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCompareModalComponent } from './character-compare-modal.component';

describe('CharacterCompareModalComponent', () => {
  let component: CharacterCompareModalComponent;
  let fixture: ComponentFixture<CharacterCompareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCompareModalComponent ]
    })
    .compileComponents();
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
