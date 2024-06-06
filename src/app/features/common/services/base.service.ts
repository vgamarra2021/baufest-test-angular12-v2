import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export abstract class BaseService {
  constructor(protected http: HttpClient) {}

  subject$ = new Subject<string | undefined>();

  abstract baseUrl: string;

  getItemsByNameAndPage<T>(name: string = '', page: number = 1) {
    return this.http.get<T>(this.baseUrl, { params: { name, page } });
  }

  getItemById<T>(id: number) {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  getMultiplesItemsByIds<T>(ids: number[]) {
    return this.http.get<T>(`${this.baseUrl}/${ids.join(',')}`);
  }

  onChangeSearchValue(searchValue: string) {
    this.subject$.next(searchValue);
  }
}
