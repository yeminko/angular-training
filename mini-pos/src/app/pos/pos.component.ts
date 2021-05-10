import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { Print } from '../print/print';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent {
  @Output() printed = new EventEmitter<Print>();
  addedToCart: Item[] = [];
  addedItem: Item = {
    id: -1,
    name: '',
    image: '',
    price: 0,
    quantity: 1,
  };

  onAddedToCart(item: Item) {
    this.addedItem = { ...item };
  }

  onPrinted(print: Print) {
    this.printed.emit(print);
  }
}
