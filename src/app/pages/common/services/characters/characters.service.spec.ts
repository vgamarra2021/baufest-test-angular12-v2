import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(CharactersService);
    expect(service).toBeTruthy();
  });
});
