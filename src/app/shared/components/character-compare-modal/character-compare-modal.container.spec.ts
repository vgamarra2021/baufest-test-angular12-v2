import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ICharacter } from 'src/app/pages/common/interfaces/characters';
import { CharacterCompareService } from 'src/app/pages/common/services/characters/character-compare.service';
import { CharacterCompareModalContainer } from './character-compare-modal.container';

describe('CharacterCompareModalContainer', () => {
  let component: CharacterCompareModalContainer;
  let fixture: ComponentFixture<CharacterCompareModalContainer>;
  const charactersMock: ICharacter[] = [
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
  ];

  beforeEach(async () => {
    const characterCompareService = jasmine.createSpyObj(
      'CharacterCompareService',
      ['modal$'],
      {
        modal$: new BehaviorSubject(charactersMock),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [CharacterCompareModalContainer],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[{ provide: CharacterCompareService, useValue: characterCompareService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCompareModalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const unsubscribeSpy = spyOn(component['unsubscribe$'], 'next');
    const completeSpy = spyOn(component['unsubscribe$'], 'complete');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
});
