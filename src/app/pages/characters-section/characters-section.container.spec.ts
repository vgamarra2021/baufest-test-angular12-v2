import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { CharacterCompareService } from '../common/services/characters/character-compare.service';
import { CharactersService } from '../common/services/characters/characters.service';
import { CharactersSectionContainer } from './characters-section.container';

describe('CharactersSectionContainer', () => {
  let component: CharactersSectionContainer;
  let fixture: ComponentFixture<CharactersSectionContainer>;
  let debugElement: DebugElement;
  let charactersServiceSpy: CharactersService;
  let characterCompareServiceSpy: CharacterCompareService;
  const characterResponseMock = {
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
  const character = {
    id: 1,
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: ['https://rickandmortyapi.com/api/character/38'],
    url: 'https://rickandmortyapi.com/api/location/1',
    created: '2017-11-10T12:42:04.162Z',
  };

  beforeEach(async () => {
    const charactersService = jasmine.createSpyObj(
      'CharactersService',
      ['subject$', 'getCharactersWithEpisodies'],
      {
        subject$: new BehaviorSubject(''),
        getCharactersWithEpisodies: () => of(characterResponseMock),
      }
    );
    const characterCompareService = jasmine.createSpyObj(
      'CharacterCompareService',
      ['selectCharacter', 'compareList$'],
      { compareList$: new BehaviorSubject([]) }
    );
    await TestBed.configureTestingModule({
      declarations: [CharactersSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CharactersService, useValue: charactersService },
        { provide: CharacterCompareService, useValue: characterCompareService },
      ],
    }).compileComponents();
    charactersServiceSpy = TestBed.inject(CharactersService);
    characterCompareServiceSpy = TestBed.inject(CharacterCompareService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSectionContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should triggered onPageChange', () => {
    debugElement
      .query(By.css('app-characters-section-ui'))
      .triggerEventHandler('onPageChange', 2);
    expect(component.page).toEqual(2);
  });

  it('should triggered onCompareClick', () => {
    debugElement
      .query(By.css('app-characters-section-ui'))
      .triggerEventHandler('onCompareClick', character);
    expect(characterCompareServiceSpy.selectCharacter).toHaveBeenCalled();
  });
});

describe('LocationsSectionContainer with throw Error', () => {
  let component: CharactersSectionContainer;
  let fixture: ComponentFixture<CharactersSectionContainer>;
  let charactersServiceSpy: CharactersService;

  beforeEach(async () => {
    const charactersService = jasmine.createSpyObj(
      'CharactersService',
      ['subject$', 'getCharactersWithEpisodies'],
      {
        subject$: new BehaviorSubject(''),
        getCharactersWithEpisodies: () => throwError(new Error('Error Fetch')),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [CharactersSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CharactersService, useValue: charactersService }],
    }).compileComponents();
    
    charactersServiceSpy = TestBed.inject(CharactersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should triggered error', () => {
    component.updateCards();
    expect(component.total).toEqual(0);
    expect(component.characters).toEqual([]);
  });
});

describe('LocationsSectionContainer with Empty response', () => {
  let component: CharactersSectionContainer;
  let fixture: ComponentFixture<CharactersSectionContainer>;
  let charactersServiceSpy: CharactersService;

  beforeEach(async () => {
    const charactersService = jasmine.createSpyObj(
      'CharactersService',
      ['subject$', 'getCharactersWithEpisodies'],
      {
        subject$: new BehaviorSubject(''),
        getCharactersWithEpisodies: () => of({}),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [CharactersSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CharactersService, useValue: charactersService }],
    }).compileComponents();
    charactersServiceSpy = TestBed.inject(CharactersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should triggered error', () => {
    component.updateCards();
    expect(component.total).toEqual(0);
    expect(component.characters).toEqual([]);
  });
});
