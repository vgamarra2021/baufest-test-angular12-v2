import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodesSectionContainer } from './episodes-section.container';

describe('EpisodesSectionContainer', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodesSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
