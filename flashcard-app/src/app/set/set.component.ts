import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashcardService } from '../flashcard.service';
import { Set } from '../set.model';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit, OnDestroy {
  @Input() set: Set = new Set('', '', []);
  @Input() index: number = -1;

  resetSub: Subscription = new Subscription();
  indexSub: Subscription = new Subscription();
  deleteSub: Subscription = new Subscription();

  name: string = '';
  description: string = '';
  currentIndex: number = -1;
  deleteMode: boolean = false;
  isCardView: boolean = false;

  constructor(private flashcardService: FlashcardService) {}

  showCardView() {
    this.isCardView = true;
    this.flashcardService.setCardView(true);
  }

  showListView() {
    this.isCardView = false;
    this.flashcardService.setCardView(false);
  }

  onSetClick() {
    this.flashcardService.setCurrentIndex(this.index);
    this.showListView(); /** To reset cardView when user click other Set */
  }

  updateName(nameEl: HTMLSpanElement) {
    this.set.name = nameEl.textContent ?? '';
    this.flashcardService.saveSets();
  }

  updateDescription(descEl: HTMLSpanElement) {
    this.set.description = descEl.textContent ?? '';
    this.flashcardService.saveSets();
  }

  onDelete() {
    this.flashcardService.deleteSet(this.index);
  }

  watchDeleteMode() {
    this.deleteMode = this.flashcardService.deleteMode;
    this.deleteSub = this.flashcardService.watchDeleteMode.subscribe(
      (deleteMode: boolean) => {
        this.deleteMode = deleteMode;
      }
    );
  }

  watchIndex() {
    this.indexSub = this.flashcardService.watchCurrentIndex.subscribe(
      (index: number) => {
        this.currentIndex = index;
      }
    );
  }

  watchResetCardView() {
    this.resetSub = this.flashcardService.resetCardView.subscribe((_) => {
      this.isCardView = false;
    });
  }

  ngOnInit(): void {
    this.name = this.set.name;
    this.description = this.set.description;

    /**
     * To add active class when first time appear
     * */
    this.currentIndex = this.flashcardService.currentIndex;

    this.watchIndex();
    this.watchDeleteMode();
    this.watchResetCardView();
  }

  ngOnDestroy() {
    this.resetSub.unsubscribe();
    this.indexSub.unsubscribe();
    this.deleteSub.unsubscribe();
  }
}
