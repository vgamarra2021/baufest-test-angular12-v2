import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesSectionContainer } from './episodes-section.container';

describe('EpisodesSectionContainer', () => {
  let component: EpisodesSectionContainer;
  let fixture: ComponentFixture<EpisodesSectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesSectionContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
