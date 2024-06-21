import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILocation } from '../common/interfaces/locations/location.interface';
import { EMPTY, Subject } from 'rxjs';
import { SearchService } from '../common/services/search/search.service';
import { LocationsService } from '../common/services/locations/locations.service';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ILocationResponse } from '../common/interfaces/locations/location-response.interface';

@Component({
  selector: 'app-locations-section-container',
  templateUrl: './locations-section.container.html',
  styles: [],
})
export class LocationsSectionContainer implements OnInit, OnDestroy {
  locations: ILocation[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  protected unsubscribe$ = new Subject<void>();

  constructor(
    private locationsService: LocationsService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.updateCards();
    this.locationsService.subject$
      .pipe(
        tap(() => {
          this.updateCards();
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onPageChange(page: number) {
    this.page = page;
    this.updateCards();
  }

  updateCards() {
    const searchValue = this.searchService.searchTextValue;
    this.locationsService
      .getItemsByNameAndPage<ILocationResponse>(searchValue, this.page)
      .pipe(
        catchError(() => {
          this.total = 0;
          this.locations = [];
          return EMPTY;
        }),
        tap((res: ILocationResponse | undefined) => {
          this.total = res?.info?.count || 0;
          this.locations = (res?.results as ILocation[]) || [];
        })
      )
      .subscribe();
  }
}
