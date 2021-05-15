import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Print } from './print/print';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  print: Print = new Print([], 0, 0, 0);
  showPrint = false;
  assetsPath = '';

  constructor() {
    this.assetsPath = environment.assetsPath;
  }

  onPrinted(print: Print) {
    this.print = print;
    this.showPrint = true;
  }

  onPrintDone() {
    this.showPrint = false;
  }
}
