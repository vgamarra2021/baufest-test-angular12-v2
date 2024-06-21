import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ILocation } from '../interfaces/locations/location.interface';
import { BaseService } from './base.service';

class TestService extends BaseService {
  baseUrl = 'https://api.example.com/items';
  constructor(protected http: HttpClient) {
    super(http);
  }
}

describe('BaseService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.inject(HttpTestingController);
    const httpClient = TestBed.inject(HttpClient);
    service = new TestService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch item by id', () => {
    const locationMock = {
      id: 3,
      name: 'Citadel of Ricks',
      type: 'Space station',
      dimension: 'unknown',
      residents: ['https://rickandmortyapi.com/api/character/8'],
      url: 'https://rickandmortyapi.com/api/location/3',
      created: '2017-11-10T13:08:13.191Z',
    };
    service.getItemById<ILocation>(20).subscribe((response) => {
      console.log(response);
      expect(response).toEqual(locationMock);
    });

    const req = httpMock.expectOne('https://api.example.com/items/20');
    expect(req.request.method).toBe('GET');
    req.flush(locationMock);
  });

  it('should fetch multiple items by ids', () => {
    const locationMock = [
      {
        id: 1,
        name: 'Earth (C-137)',
        type: 'Planet',
        dimension: 'Dimension C-137',
        residents: ['https://rickandmortyapi.com/api/character/38'],
        url: 'https://rickandmortyapi.com/api/location/1',
        created: '2017-11-10T12:42:04.162Z',
      },
      {
        id: 2,
        name: 'Abadango',
        type: 'Cluster',
        dimension: 'unknown',
        residents: ['https://rickandmortyapi.com/api/character/6'],
        url: 'https://rickandmortyapi.com/api/location/2',
        created: '2017-11-10T13:06:38.182Z',
      },
    ];
    service
      .getMultiplesItemsByIds<ILocation[]>([1, 2])
      .subscribe((response) => {
        expect(response).toEqual(locationMock);
      });

    const req = httpMock.expectOne('https://api.example.com/items/1,2');
    expect(req.request.method).toBe('GET');
    req.flush(locationMock);
  });

  it('should emit value on subject$', () => {
    let emittedValue: string | undefined;
    const testValue = 'test value';
    service.subject$.subscribe((value) => {
      emittedValue = value;
    });
    service.onChangeSearchValue(testValue);
    expect(emittedValue).toBe(testValue);
  });
});
