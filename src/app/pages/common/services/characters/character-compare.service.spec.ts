import { TestBed } from '@angular/core/testing';
import { CharacterCompareService } from './character-compare.service';
import { ICharacter } from '../../interfaces/characters';
import { take } from 'rxjs/operators';

describe('CharacterCompareService', () => {
  let service: CharacterCompareService;

  const character1: ICharacter = {
    id: 25,
    name: 'Armothy',
    status: 'Dead',
    species: 'unknown',
    type: 'Self-aware arm',
    gender: 'Male',
    origin: {
      name: 'Post-Apocalyptic Earth',
      url: 'https://rickandmortyapi.com/api/location/8',
    },
    location: {
      name: 'Post-Apocalyptic Earth',
      url: 'https://rickandmortyapi.com/api/location/8',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/23'],
    url: 'https://rickandmortyapi.com/api/character/25',
    created: '2017-11-05T08:54:29.343Z',
  };
  const character2: ICharacter = {
    id: 26,
    name: 'Arthricia',
    status: 'Alive',
    species: 'Alien',
    type: 'Cat-Person',
    gender: 'Female',
    origin: {
      name: 'Purge Planet',
      url: 'https://rickandmortyapi.com/api/location/9',
    },
    location: {
      name: 'Purge Planet',
      url: 'https://rickandmortyapi.com/api/location/9',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/26.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/20'],
    url: 'https://rickandmortyapi.com/api/character/26',
    created: '2017-11-05T08:56:46.165Z',
  };
  const character3: ICharacter = {
    id: 29,
    name: 'Baby Legs',
    status: 'Alive',
    species: 'Human',
    type: 'Human with baby legs',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/29.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/29',
    created: '2017-11-05T09:06:19.644Z',
  };
  const character4: ICharacter = {
    id: 30,
    name: 'Baby Poopybutthole',
    status: 'Alive',
    species: 'Poopybutthole',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'unknown',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/31'],
    url: 'https://rickandmortyapi.com/api/character/30',
    created: '2017-11-05T09:13:16.483Z',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a character to compare list', () => {
    service.selectCharacter(character1);
    service.compareList$.pipe(take(1)).subscribe((list) => {
      expect(list.length).toBe(1);
      expect(list[0]).toEqual(character1);
    });
  });

  it('should add three characters', () => {
    service.selectCharacter(character1);
    service.selectCharacter(character1);
    service.selectCharacter(character2);
    service.selectCharacter(character3);
    service.compareList$.subscribe((list) => {
      expect(list.length).toBe(3);
    });
  });

  it('should replace character if list is full', () => {
    service.selectCharacter(character1);
    service.selectCharacter(character2);
    service.selectCharacter(character3);
    service.selectCharacter(character4);

    service.compareList$.pipe().subscribe((list) => {
      expect(list.length).toBe(3);
      expect(list).not.toContain(character1);
    });
  });

  it('should trigger modal with character 1', () => {
    service.selectCharacter(character1);
    service.showModal();
    service.modal$.pipe().subscribe((list) => {
      expect(list).toEqual([character1]);
    });
  });
});
