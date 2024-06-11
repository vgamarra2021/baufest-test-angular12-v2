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
import { CharacterCompareService } from 'src/app/features/common/services/characters/character-compare.service';

@Component({
  selector: 'app-character-compare-modal-container',
  templateUrl: './character-compare-modal.container.html',
  styles: [],
})
export class CharacterCompareModalContainer implements OnInit, OnDestroy {
  @ViewChild('content') modalContent!: TemplateRef<any>;
  characters: ICharacter[] = [];
  protected unsubscribe$ = new Subject<void>();

  constructor(
    private bootstrapModalService: NgbModal,
    private characterCompareService: CharacterCompareService
  ) {}

  ngOnInit(): void {
    this.characterCompareService.modal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.characters = res;
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
