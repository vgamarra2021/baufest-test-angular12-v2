import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeCardComponent } from './episode-card.component';

describe('EpisodeCardComponent', () => {
  let component: EpisodeCardComponent;
  let fixture: ComponentFixture<EpisodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeCardComponent);
    component = fixture.componentInstance;
    component.episode = {
      air_date: '19-06-24',
      characters: [],
      created: '02:54 19-06-24',
      episode: 'Piloto',
      id: 2,
      name: 'First Cap',
      url: 'https//',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
