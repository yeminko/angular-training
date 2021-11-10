import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private activatedEmitter = new Subject<boolean>();
  activateObservable = this.activatedEmitter.asObservable();

  users: User[] = [
    {
      id: 1,
      name: 'User 1',
    },
    {
      id: 2,
      name: 'User 2',
    },
    {
      id: 3,
      name: 'User 3',
    },
  ];

  doActivate() {
    this.activatedEmitter.next(true);
  }
}
