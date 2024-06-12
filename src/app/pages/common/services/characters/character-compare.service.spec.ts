import { TestBed } from '@angular/core/testing';

import { CharacterCompareService } from './character-compare.service';

describe('CharacterCompareService', () => {
  let service: CharacterCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
