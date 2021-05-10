import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item, items } from 'src/app/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  @Output() addToCart = new EventEmitter<Item>();

  onAddToCart(item: Item) {
    this.addToCart.emit(item);
  }

  ngOnInit() {
    this.items = items;
  }
}
