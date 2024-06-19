import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchNavComponent } from './search-nav.component';

describe('SearchNavComponent', () => {
  let component: SearchNavComponent;
  let fixture: ComponentFixture<SearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchNavComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
