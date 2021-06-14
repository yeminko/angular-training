import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
}
