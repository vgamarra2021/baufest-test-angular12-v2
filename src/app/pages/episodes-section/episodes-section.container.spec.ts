import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of, Subject, throwError } from 'rxjs';
import { CharactersService } from '../common/services/characters/characters.service';
import { EpisodeDetailService } from '../common/services/episodes/episode-detail.service';
import { EpisodesService } from '../common/services/episodes/episodes.service';
import { EpisodesSectionContainer } from './episodes-section.container';

describe('EpisodesSectionContainer', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;
  let debugElement: DebugElement;
  let episodesServiceSpy: EpisodesService;
  let characterServiceSpy: CharactersService;
  let episodeDetailServiceSpy: EpisodeDetailService;
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
  const episodeMock = {
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: 'S03E07',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/4',
    ],
    url: 'https://rickandmortyapi.com/api/episode/28',
    created: '2017-11-10T12:56:36.618Z',
  };
  const charactersMock = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/6'],
      url: 'https://rickandmortyapi.com/api/character/4',
      created: '2017-11-04T19:22:43.665Z',
    },
  ];

  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'EpisodesService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () => of(locationResponseMock),
      }
    );
    const charactersService = jasmine.createSpyObj(
      'CharactersService',
      ['getMultiplesItemsByIds'],
      {
        getMultiplesItemsByIds: () => of(charactersMock),
      }
    );
    const episodeDetailService = jasmine.createSpyObj(
      'EpisodeDetailService',
      ['modal$'],
      {
        modal$: new Subject(),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [EpisodesSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: EpisodesService, useValue: locationsService },
        { provide: CharactersService, useValue: charactersService },
        { provide: EpisodeDetailService, useValue: episodeDetailService },
      ],
    }).compileComponents();
    episodesServiceSpy = TestBed.inject(EpisodesService);
    characterServiceSpy = TestBed.inject(CharactersService);
    episodeDetailServiceSpy = TestBed.inject(EpisodeDetailService);
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

  it('should get Characters', () => {
    debugElement
      .query(By.css('app-episodes-section-ui'))
      .triggerEventHandler('onDetailClick', episodeMock);
    episodeDetailServiceSpy.modal$.subscribe((response) => {
      expect(response).toEqual({
        episode: episodeMock,
        characters: charactersMock,
      });
    });
  });
});

describe('LocationsSectionContainer with throw Error', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;
  let episodesServiceSpy: EpisodesService;

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
    episodesServiceSpy = TestBed.inject(EpisodesService);
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
  let episodesServiceSpy: EpisodesService;

  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'EpisodesService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () => of({}),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [EpisodesSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: EpisodesService, useValue: locationsService }],
    }).compileComponents();
    episodesServiceSpy = TestBed.inject(EpisodesService);
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
