import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flashcard } from '../flashcard.model';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit, OnDestroy {
  @Input() flashcard: Flashcard = new Flashcard('', '');
  @Input() index: number = -1;

  deleteSub: Subscription = new Subscription();

  term: string = '';
  definition: string = '';
  deleteMode: boolean = false;

  constructor(private flashcardService: FlashcardService) {}

  updateTerm(termEl: HTMLSpanElement) {
    this.flashcard.term = termEl.textContent ?? '';
    this.flashcardService.saveSets();
  }

  updateDefinition(defEl: HTMLSpanElement) {
    this.flashcard.definition = defEl.textContent ?? '';
    this.flashcardService.saveSets();
  }

  onDelete() {
    this.flashcardService.deleteFlashcard(this.index);
  }

  watchDeleteMode() {
    this.deleteSub = this.flashcardService.watchDeleteMode.subscribe(
      (deleteMode: boolean) => {
        this.deleteMode = deleteMode;
      }
    );
  }

  ngOnInit() {
    this.term = this.flashcard.term;
    this.definition = this.flashcard.definition;
    this.deleteMode = this.flashcardService.deleteMode;
    this.watchDeleteMode();
  }

  ngOnDestroy() {
    this.deleteSub.unsubscribe();
  }
}
