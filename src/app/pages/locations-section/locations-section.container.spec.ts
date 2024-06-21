import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { LocationsService } from '../common/services/locations/locations.service';
import { LocationsSectionContainer } from './locations-section.container';

describe('LocationsSectionContainer', () => {
  let component: LocationsSectionContainer;
  let fixture: ComponentFixture<LocationsSectionContainer>;
  let debugElement: DebugElement;
  let locationsServiceSpy: jasmine.SpyObj<LocationsService>;
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
      'LocationsService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () => of(locationResponseMock),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [LocationsSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: LocationsService, useValue: locationsService }],
    }).compileComponents();
    locationsServiceSpy = TestBed.inject(
      LocationsService
    ) as jasmine.SpyObj<LocationsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSectionContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should triggered onPageChange', () => {
    debugElement
      .query(By.css('app-locations-section-ui'))
      .triggerEventHandler('onPageChange', 2);
    expect(component.page).toEqual(2);
  });
});

describe('LocationsSectionContainer with throw Error', () => {
  let component: LocationsSectionContainer;
  let fixture: ComponentFixture<LocationsSectionContainer>;
  let locationsServiceSpy: jasmine.SpyObj<LocationsService>;

  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'LocationsService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () => throwError(new Error('Error Fetch')),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [LocationsSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: LocationsService, useValue: locationsService }],
    }).compileComponents();
    locationsServiceSpy = TestBed.inject(
      LocationsService
    ) as jasmine.SpyObj<LocationsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should triggered error', () => {
    component.updateCards();
    expect(component.total).toEqual(0);
    expect(component.locations).toEqual([]);
  });
});

describe('LocationsSectionContainer with Empty response', () => {
  let component: LocationsSectionContainer;
  let fixture: ComponentFixture<LocationsSectionContainer>;
  let locationsServiceSpy: jasmine.SpyObj<LocationsService>;

  beforeEach(async () => {
    const locationsService = jasmine.createSpyObj(
      'LocationsService',
      ['subject$', 'getItemsByNameAndPage'],
      {
        subject$: new BehaviorSubject(''),
        getItemsByNameAndPage: () =>
          of({
          }),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [LocationsSectionContainer],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: LocationsService, useValue: locationsService }],
    }).compileComponents();
    locationsServiceSpy = TestBed.inject(
      LocationsService
    ) as jasmine.SpyObj<LocationsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should triggered error', () => {
    component.updateCards();
    expect(component.total).toEqual(0);
    expect(component.locations).toEqual([]);
  });
});
