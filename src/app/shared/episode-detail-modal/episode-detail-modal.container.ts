import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICharacter } from 'src/app/features/common/interfaces/characters';
import { IEpisode } from 'src/app/features/common/interfaces/episodes/episode.interface';
import { EpisodeDetailService } from 'src/app/features/common/services/episodes/episode-detail.service';
import { EpisodeDetailModalComponent } from './episode-detail-modal.component';

@Component({
  selector: 'app-episode-detail-modal-container',
  templateUrl: './episode-detail-modal.container.html',
  styles: [],
})
export class EpisodeDetailModalContainer implements OnInit, OnDestroy {
  episode: IEpisode | null = null;
  characters: ICharacter[] = [];
  @ViewChild('content') modalContent!: TemplateRef<EpisodeDetailModalComponent>;
  protected unsubscribe$ = new Subject<void>();

  constructor(
    private bootstrapModalService: NgbModal,
    private episodeDetailService: EpisodeDetailService
  ) {}

  ngOnInit(): void {
    this.episodeDetailService.modal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.episode = res.episode;
        this.characters = res.characters;
        this.open();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  open() {
    this.bootstrapModalService.open(this.modalContent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      animation: true,
      size: 'lg',
    });
  }
}
