import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacterResponse } from '../../interfaces/characters';
import { IEpisode } from '../../interfaces/episodes/episode.interface';
import { EpisodesService } from '../episodes/episodes.service';
import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let service: CharactersService;
  let httpMock: HttpTestingController;
  let episodesService: EpisodesService;

  const mockCharacterResponse: ICharacterResponse = {
    results: [
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
        id: 8,
        name: 'Adjudicator Rick',
        status: 'Dead',
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
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/28'],
        url: 'https://rickandmortyapi.com/api/character/8',
        created: '2017-11-04T20:03:34.737Z',
      },
      {
        id: 15,
        name: 'Alien Rick',
        status: 'unknown',
        species: 'Alien',
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
        image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/10'],
        url: 'https://rickandmortyapi.com/api/character/15',
        created: '2017-11-04T20:56:13.215Z',
      },
    ],
    info: {
      count: 107,
      pages: 6,
      next: 'https://rickandmortyapi.com/api/character?page=2&name=rick',
    },
  };
  const mockEpisodes: IEpisode[] = [
    {
      id: 1,
      name: 'Pilot',
      air_date: 'December 2, 2013',
      episode: 'S01E01',
      characters: ['https://rickandmortyapi.com/api/character/1'],
      url: 'https://rickandmortyapi.com/api/episode/1',
      created: '2017-11-10T12:56:33.798Z',
    },
    {
      id: 2,
      name: 'Lawnmower Dog',
      air_date: 'December 9, 2013',
      episode: 'S01E02',
      characters: ['https://rickandmortyapi.com/api/character/1'],
      url: 'https://rickandmortyapi.com/api/episode/2',
      created: '2017-11-10T12:56:33.916Z',
    },
    {
      id: 10,
      name: 'Close Rick-counters of the Rick Kind',
      air_date: 'April 7, 2014',
      episode: 'S01E10',
      characters: ['https://rickandmortyapi.com/api/character/1'],
      url: 'https://rickandmortyapi.com/api/episode/10',
      created: '2017-11-10T12:56:34.747Z',
    },
    {
      id: 28,
      name: 'The Ricklantis Mixup',
      air_date: 'September 10, 2017',
      episode: 'S03E07',
      characters: ['https://rickandmortyapi.com/api/character/1'],
      url: 'https://rickandmortyapi.com/api/episode/28',
      created: '2017-11-10T12:56:36.618Z',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
    });
    service = TestBed.inject(CharactersService);
    httpMock = TestBed.inject(HttpTestingController);
    episodesService = TestBed.inject(EpisodesService);
  });

  it('should be created', () => {
    const service = TestBed.inject(CharactersService);
    expect(service).toBeTruthy();
  });

  it('should fetch characters with episodies', () => {
    spyOn(episodesService, 'getMultiplesItemsByIds').and.returnValue(
      of(mockEpisodes)
    );

    service.getCharactersWithEpisodies('rick', 1).subscribe((response) => {
      expect(response.results.length).toBe(3);
      expect(response.results[0].episodeName).toBe('Pilot');
      expect(response.results[1].episodeName).toBe('The Ricklantis Mixup');
      expect(response.results[2].episodeName).toBe(
        'Close Rick-counters of the Rick Kind'
      );
    });

    const req = httpMock.expectOne(
      `${environment.charactersUrl}?name=rick&page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacterResponse);
  });

  it('should fetch characters with episodies without name', () => {
    const mockEpisodesCopy = JSON.parse(
      JSON.stringify(mockEpisodes)
    ) as IEpisode[];
    spyOn(episodesService, 'getMultiplesItemsByIds').and.returnValue(
      of(
        mockEpisodesCopy.map((episode) => {
          episode.id = 0;
          return episode;
        })
      )
    );

    service.getCharactersWithEpisodies('rick', 1).subscribe((response) => {
      expect(response.results.length).toBe(3);
      expect(response.results[0].episodeName).toBeUndefined();
      expect(response.results[1].episodeName).toBeUndefined();
      expect(response.results[2].episodeName).toBeUndefined();
    });

    const req = httpMock.expectOne(
      `${environment.charactersUrl}?name=rick&page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacterResponse);
  });
});
