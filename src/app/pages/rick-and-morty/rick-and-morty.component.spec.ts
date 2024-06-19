import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyComponent } from './rick-and-morty.component';

describe('RickAndMortyComponent', () => {
  let component: RickAndMortyComponent;
  let fixture: ComponentFixture<RickAndMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RickAndMortyComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
