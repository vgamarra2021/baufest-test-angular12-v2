import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { EpisodesService } from '../common/services/episodes/episodes.service';
import { EpisodesSectionContainer } from './episodes-section.container';

describe('EpisodesSectionContainer', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;
  let debugElement: DebugElement;
  let episodesServiceSpy: jasmine.SpyObj<EpisodesService>;
  const locationResponseMock = {
    info: {
      count: 126,
      pages: 7,
      next: 'https://rickandmortyapi.com/api/location?page=2',
      prev: null,
    },
    results: [
      {
        id: 1,
        name: 'Earth (C-137)',
        type: 'Planet',
        dimension: 'Dimension C-137',
        residents: ['https://rickandmortyapi.com/api/character/38'],
        url: 'https://rickandmortyapi.com/api/location/1',
        created: '2017-11-10T12:42:04.162Z',
      },
    ],
  };
  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'EpisodesService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () => of(locationResponseMock),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [EpisodesSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: EpisodesService, useValue: locationsService }],
    }).compileComponents();
    episodesServiceSpy = TestBed.inject(
      EpisodesService
    ) as jasmine.SpyObj<EpisodesService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSectionContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should triggered onPageChange', () => {
    debugElement
      .query(By.css('app-episodes-section-ui'))
      .triggerEventHandler('onPageChange', 2);
    expect(component.page).toEqual(2);
  });
});

describe('LocationsSectionContainer with throw Error', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;
  let episodesServiceSpy: jasmine.SpyObj<EpisodesService>;

  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'EpisodesService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () => throwError(new Error('Error Fetch')),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [EpisodesSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: EpisodesService, useValue: locationsService }],
    }).compileComponents();
    episodesServiceSpy = TestBed.inject(
      EpisodesService
    ) as jasmine.SpyObj<EpisodesService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should triggered error', () => {
    component.updateCards();
    expect(component.total).toEqual(0);
    expect(component.episodes).toEqual([]);
  });
});

describe('LocationsSectionContainer with Empty response', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;
  let episodesServiceSpy: jasmine.SpyObj<EpisodesService>;

  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'EpisodesService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () =>
          of({
          }),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [EpisodesSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: EpisodesService, useValue: locationsService }],
    }).compileComponents();
    episodesServiceSpy = TestBed.inject(
      EpisodesService
    ) as jasmine.SpyObj<EpisodesService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should triggered error', () => {
    component.updateCards();
    expect(component.total).toEqual(0);
    expect(component.episodes).toEqual([]);
  });
});
