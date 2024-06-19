import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeDetailModalContainer } from './episode-detail-modal.container';

describe('EpisodeDetailModalContainer', () => {
  let component: EpisodeDetailModalContainer;
  let fixture: ComponentFixture<EpisodeDetailModalContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeDetailModalContainer],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailModalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
