import { Injectable } from '@angular/core';

export enum Key {
  USER = 'user',
  PASSWORDS = 'passwords',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: Key) {
    switch (key) {
      case Key.USER:
        return JSON.parse(localStorage.getItem(key) ?? '{}');

      case Key.PASSWORDS:
        return JSON.parse(localStorage.getItem(key) ?? '[]');

      default:
        return null;
    }
  }

  remove(key: Key) {
    localStorage.removeItem(key);
  }
}
