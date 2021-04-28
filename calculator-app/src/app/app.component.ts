import { Component } from '@angular/core';
import { Row, rows } from './row';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rows: Row[];
  isCalculated: boolean = false;
  output: string = '';
  constructor() {
    this.rows = rows;
  }

  onPress(key: string) {
    console.log(key);

    switch (key) {
      case '=':
        try {
          this.output = eval(this.output);
        } catch {
          this.output = '0';
        }
        this.isCalculated = true;
        break;
      case 'C':
        this.output = '';
        break;
      case 'backspace':
        console.log(this.output);

        this.output = (this.output + '').slice(0, -1);
        break;
      default:
        if (this.isCalculated) {
          this.output = '';
        }
        this.isCalculated = false;
        this.output += key;
    }
  }
}
