import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { ICharacter } from 'src/app/pages/common/interfaces/characters';
import { IEpisode } from 'src/app/pages/common/interfaces/episodes/episode.interface';
import { EpisodeDetailService } from 'src/app/pages/common/services/episodes/episode-detail.service';
import { EpisodeDetailModalContainer } from './episode-detail-modal.container';

describe('EpisodeDetailModalContainer', () => {
  let component: EpisodeDetailModalContainer;
  let fixture: ComponentFixture<EpisodeDetailModalContainer>;
  let bootstrapModalServiceSpy: jasmine.SpyObj<NgbModal>;
  const episodeMock: IEpisode = {
    id: 2,
    name: 'Lawnmower Dog',
    air_date: 'December 9, 2013',
    episode: 'S01E02',
    characters: ['https://rickandmortyapi.com/api/character/1'],
    url: 'https://rickandmortyapi.com/api/episode/2',
    created: '2017-11-10T12:56:33.916Z',
  };
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
  ];

  beforeEach(async () => {
    const bootstrapModalService = jasmine.createSpyObj('NgbModal', ['open']);
    const episodeDetailService = jasmine.createSpyObj(
      'EpisodeDetailService',
      ['modal$'],
      {
        modal$: of({ episode: episodeMock, characters: charactersMock }),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [EpisodeDetailModalContainer],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: EpisodeDetailService, useValue: episodeDetailService },
        { provide: NgbModal, useValue: bootstrapModalService },
      ],
    }).compileComponents();

    bootstrapModalServiceSpy = TestBed.inject(
      NgbModal
    ) as jasmine.SpyObj<NgbModal>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailModalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when modal$ emits', () => {
    component.open();
    expect(bootstrapModalServiceSpy.open).toHaveBeenCalledWith(
      component.modalContent,
      {
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        animation: true,
        size: 'lg',
      }
    );
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const unsubscribeSpy = spyOn(component['unsubscribe$'], 'next');
    const completeSpy = spyOn(component['unsubscribe$'], 'complete');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });

  it('should subscribe to modal$ and set episode and characters', () => {
    expect(component.episode).toEqual(episodeMock);
    expect(component.characters).toEqual(charactersMock);
  });
});
