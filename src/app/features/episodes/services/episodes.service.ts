import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../../common/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService extends BaseService {
  baseUrl: string = environment.episodesUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
