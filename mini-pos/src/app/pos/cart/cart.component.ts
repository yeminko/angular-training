import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Item } from 'src/app/item';
import { Print } from 'src/app/print/print';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnChanges {
  @Input() addedItem: Item = {
    id: -1,
    name: '',
    image: '',
    price: 0,
    quantity: 1,
  };
  @Output() printed = new EventEmitter<Print>();
  items: Array<Item> = [];
  total = 0;
  paid = 0;
  charged = 0;

  addToCart(item: Item) {
    if (this.isItemIncluded(item.id)) {
      this.updateQuantity(item.id);
    } else {
      this.items.push(item);
    }
    this.calculateTotal();
  }

  removeFromCart(id: number) {
    this.items = this.items.filter((cartItem) => cartItem.id !== id);
  }

  isItemIncluded(id: number): boolean {
    return this.items.find((cartItem) => cartItem.id === id) ? true : false;
  }

  updateQuantity(id: number) {
    this.items = this.items.map((cartItem) => {
      return cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  increaseQuantity(item: Item) {
    item.quantity = item.quantity + 1;
    this.calculateTotal();
  }

  decreaseQuantity(item: Item) {
    item.quantity -= 1;
    if (item.quantity === 0) {
      this.removeFromCart(item.id);
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items
      .map((cartItem) => cartItem.price * cartItem.quantity)
      .reduce((a, b) => a + b, 0);
    this.calculateCharged();
  }

  calculateCharged() {
    this.charged = this.paid - this.total;
  }

  onPrint() {
    this.printed.emit(
      new Print(this.items, this.total, this.paid, this.charged)
    );
    this.items = [];
    this.total = 0;
    this.paid = 0;
    this.charged = 0;
  }

  ngOnChanges() {
    if (this.addedItem.id === -1) return;
    this.addToCart(this.addedItem);
  }
}
