import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCardComponent } from './character-card.component';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    component.character = {
      id: 204,
      name: 'Lisa',
      status: 'Dead',
      species: 'Alien',
      type: '',
      gender: 'Female',
      origin: { name: 'unknown', url: '' },
      location: {
        name: 'Immortality Field Resort',
        url: 'https://rickandmortyapi.com/api/location/7',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/204.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/26'],
      url: 'https://rickandmortyapi.com/api/character/204',
      created: '2017-12-30T12:59:58.460Z',
    };
    component.selectedEpisode = 'Episode Test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
