import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersContainerComponent } from './characters-section.container';

describe('CharactersContainerComponent', () => {
  let component: CharactersContainerComponent;
  let fixture: ComponentFixture<CharactersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
