import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { CharactersService } from '../characters/characters.service';
import { EpisodesService } from '../episodes/episodes.service';
import { LocationsService } from '../locations/locations.service';

describe('SearchService', () => {
  let service: SearchService;
  let charactersServiceSpy: CharactersService;
  let episodesServiceSpy: EpisodesService;
  let locationsServiceSpy: LocationsService;

  beforeEach(() => {
    const spyChars = jasmine.createSpyObj('CharactersService', [
      'onChangeSearchValue',
    ]);
    const spyEps = jasmine.createSpyObj('EpisodesService', [
      'onChangeSearchValue',
    ]);
    const spyLocs = jasmine.createSpyObj('LocationsService', [
      'onChangeSearchValue',
    ]);

    TestBed.configureTestingModule({
      providers: [
        SearchService,
        { provide: CharactersService, useValue: spyChars },
        { provide: EpisodesService, useValue: spyEps },
        { provide: LocationsService, useValue: spyLocs },
      ],
    });

    service = TestBed.inject(SearchService);
    charactersServiceSpy = TestBed.inject(CharactersService);
    episodesServiceSpy = TestBed.inject(EpisodesService);
    locationsServiceSpy = TestBed.inject(LocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update CharactersService.searchTextValue', () => {
    const searchValue = 'test';
    service.onChangeSearchText(searchValue, '/characters');
    expect(service.searchTextValue).toBe(searchValue);
    expect(charactersServiceSpy.onChangeSearchValue).toHaveBeenCalledWith(
      searchValue
    );
  });

  it('should update EpisodesService.searchTextValue', () => {
    const searchValue = 'test';
    service.onChangeSearchText(searchValue, '/episodes');
    expect(service.searchTextValue).toBe(searchValue);
    expect(episodesServiceSpy.onChangeSearchValue).toHaveBeenCalledWith(
      searchValue
    );
  });

  it('should update LocationsService.searchTextValue', () => {
    const searchValue = 'test';
    service.onChangeSearchText(searchValue, '/locations');
    expect(service.searchTextValue).toBe(searchValue);
    expect(locationsServiceSpy.onChangeSearchValue).toHaveBeenCalledWith(
      searchValue
    );
  });

  it('should not update Services', () => {
    const searchValue = 'test';
    service.onChangeSearchText(searchValue, '/invalid');
    expect(service.searchTextValue).toBe(searchValue);
    expect(charactersServiceSpy.onChangeSearchValue).not.toHaveBeenCalled();
    expect(episodesServiceSpy.onChangeSearchValue).not.toHaveBeenCalled();
    expect(locationsServiceSpy.onChangeSearchValue).not.toHaveBeenCalled();
  });
});
