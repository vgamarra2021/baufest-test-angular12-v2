import { TestBed } from '@angular/core/testing';
import { UrlUtil } from './url.util';

describe('UrlUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  });

  it('test getIdFromUrl', () => {
    const episodeUrl = 'https://rickandmortyapi.com/api/episode/10';
    const caracterUrl = 'https://rickandmortyapi.com/api/character/1';
    const locationUrl = 'https://rickandmortyapi.com/api/location/3';
    const nullUrl = 'https://rickandmortyapi.com/api/location/';
    expect(UrlUtil.getIdFromUrl(episodeUrl)).toEqual('10');
    expect(UrlUtil.getIdFromUrl(caracterUrl)).toEqual('1');
    expect(UrlUtil.getIdFromUrl(locationUrl)).toEqual('3');
    expect(UrlUtil.getIdFromUrl(nullUrl)).toEqual(null);
  });
});
