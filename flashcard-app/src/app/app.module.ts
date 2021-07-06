import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetComponent } from './set/set.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [AppComponent, SetComponent, FlashcardComponent, CardViewComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
