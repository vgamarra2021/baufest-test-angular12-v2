import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchSectionContainer } from './search-section.container';

describe('SearchSectionContainer', () => {
  let component: SearchSectionContainer;
  let fixture: ComponentFixture<SearchSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSectionContainer],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
