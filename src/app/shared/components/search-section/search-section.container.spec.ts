import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchService } from 'src/app/pages/common/services/search/search.service';
import { SearchSectionContainer } from './search-section.container';

describe('SearchSectionContainer', () => {
  let component: SearchSectionContainer;
  let fixture: ComponentFixture<SearchSectionContainer>;
  let searchServiceSpy: jasmine.SpyObj<SearchService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const searchService = jasmine.createSpyObj('searchService', [
      'onChangeSearchText',
    ]);

    const routerSpyObj = jasmine.createSpyObj('Router', [], {
      url: '/test-url',
    });

    await TestBed.configureTestingModule({
      declarations: [SearchSectionContainer],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: SearchService, useValue: searchService },
        { provide: Router, useValue: routerSpyObj },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    searchServiceSpy = TestBed.inject(
      SearchService
    ) as jasmine.SpyObj<SearchService>;

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onChangeInput', () => {
    const searchValue = 'Test Input';
    component.onChangeInput(searchValue);
    expect(searchServiceSpy.onChangeSearchText).toHaveBeenCalledWith(
      searchValue,
      routerSpy.url
    );
  });
});
