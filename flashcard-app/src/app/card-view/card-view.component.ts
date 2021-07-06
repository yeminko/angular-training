import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard.model';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  @Input() flashcards: Flashcard[] = [];
  flashcard: Flashcard = new Flashcard('', '');
  showResult: boolean = false;
  checked: boolean = false; /** For resetting flashcard  */
  percentage: number = 0;
  barWidth: number = 0;
  correct: number = 0;
  wrong: number = 0;
  index: number = 0;

  onCorrect() {
    this.correct += 1;
    this.increaseCard();
  }

  onWrong() {
    this.wrong += 1;
    this.increaseCard();
  }

  increaseCard() {
    this.checked = false;
    setTimeout(() => {
      if (this.flashcards.length <= 0) return;
      if (this.index < this.flashcards.length) {
        this.flashcard = this.flashcards[this.index];
        this.increaseWidth();
        this.index++;
      } else {
        this.showResult = true;
      }
    }, 200);
  }

  calculatePercentage() {
    this.percentage = 100 / this.flashcards.length;
  }

  increaseWidth() {
    this.barWidth += this.percentage;
  }

  ngOnInit(): void {
    this.calculatePercentage();
    this.increaseCard();
  }
}
