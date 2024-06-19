import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LocationsService } from './locations.service';

describe('LocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationsService],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(LocationsService);
    expect(service).toBeTruthy();
  });
});
