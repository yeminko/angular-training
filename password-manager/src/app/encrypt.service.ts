import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  constructor() {}

  encrypt(key: string, data: string): string {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    } catch (e) {
      console.log(e);
    }
    return '';
  }

  decrypt(key: string, data: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(data, key);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return '';
    } catch (e) {
      console.log(e);
    }
    return '';
  }
}
