import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  increaseActive() {
    this.inactiveToActiveCount++;
    console.log('Active to Inactive: ' + this.inactiveToActiveCount);
  }

  increateInactive() {
    this.activeToInactiveCount++;
    console.log('Inactive to Active: ' + this.activeToInactiveCount);
  }

  constructor() {}
}
