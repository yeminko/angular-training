import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Print } from './print';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements AfterViewInit {
  @Input() print: Print = new Print([], 0, 0, 0);
  @Output() printDone = new EventEmitter<void>();

  ngAfterViewInit() {
    window.print();

    setTimeout(() => {
      this.printDone.emit();
    }, 100);
  }
}
