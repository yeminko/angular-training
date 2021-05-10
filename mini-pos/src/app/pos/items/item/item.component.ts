import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Item = {
    id: -1,
    name: '',
    price: 0,
    image: '',
    quantity: 1,
  };
}
