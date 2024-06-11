import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionContainer } from './search-section.container';

describe('SearchSectionContainer', () => {
  let component: SearchSectionContainer;
  let fixture: ComponentFixture<SearchSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSectionContainer],
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
