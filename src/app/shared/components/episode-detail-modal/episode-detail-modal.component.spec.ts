import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailModalComponent } from './episode-detail-modal.component';

describe('EpisodeDetailModalComponent', () => {
  let component: EpisodeDetailModalComponent;
  let fixture: ComponentFixture<EpisodeDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
