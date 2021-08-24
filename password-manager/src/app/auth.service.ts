import { EventEmitter, Injectable } from '@angular/core';
import { EncryptService } from './encrypt.service';
import { RouteService } from './route.service';
import { Key, StorageService } from './storage.service';

export class User {
  constructor(public username: string, public password: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = new User('', '');
  private encryptedUser: string = '';
  canAccess: boolean = false;
  accessChanged = new EventEmitter<boolean>();

  constructor(
    private storageService: StorageService,
    private routeService: RouteService,
    private encryptService: EncryptService
  ) {}

  loadAndDecrypt(key: string) {
    this.encryptedUser = this.storageService.get(Key.USER) ?? '';
    const text = this.encryptService.decrypt(key, this.encryptedUser);
    this.user = JSON.parse(text || '{}');
  }

  saveUser(user: User) {
    if (user.username === '' || user.password === '') return;
    this.user = user;
    this.storageService.remove(Key.PASSWORDS);
    this.encryptAndSave();
    this.grantAccess();
  }

  authUser(user: User) {
    if (user.username === '' || user.password === '') return;
    this.loadAndDecrypt(user.password);
    if (
      this.user.username === user.username &&
      this.user.password === user.password
    )
      this.grantAccess();
    else this.denyAccess();
  }

  logout() {
    this.denyAccess();
  }

  grantAccess() {
    this.canAccess = true;
    this.accessChanged.emit(this.canAccess);
    this.routeService.navigateToHome();
  }

  denyAccess() {
    this.canAccess = false;
    this.accessChanged.emit(this.canAccess);
    this.routeService.navigateToLogin();
  }

  private encryptAndSave() {
    const cypherText = this.encryptService.encrypt(
      this.user.password,
      JSON.stringify(this.user)
    );
    this.storageService.save(Key.USER, cypherText);
  }
}
