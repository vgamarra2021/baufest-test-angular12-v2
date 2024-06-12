import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsService extends BaseService {
  baseUrl: string = environment.locationsUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
