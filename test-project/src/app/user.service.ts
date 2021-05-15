import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  activeUsers = ['User 1', 'User 2', 'User 3'];
  inactiveUsers = ['User 4', 'User 5', 'User 6'];

  constructor(private countService: CountService) {}

  activeToInactive(index: number) {
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
    this.countService.increaseActive();
  }

  inactiveToActive(index: number) {
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
    this.countService.increateInactive();
  }
}
