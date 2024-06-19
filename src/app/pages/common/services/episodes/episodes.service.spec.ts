import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EpisodesService } from './episodes.service';

describe('EpisodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EpisodesService],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(EpisodesService);
    expect(service).toBeTruthy();
  });
});
