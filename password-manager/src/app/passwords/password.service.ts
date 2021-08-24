import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { EncryptService } from '../encrypt.service';
import { RouteService } from '../route.service';
import { Key, StorageService } from '../storage.service';
import { Password } from './password.model';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private _passwords: Password[] = [];
  private encryptedPasswords: string = '';
  passwordsChanged = new EventEmitter<Password[]>();

  constructor(
    private routeService: RouteService,
    private storageService: StorageService,
    private encryptService: EncryptService,
    private authService: AuthService
  ) {}

  loadAndDecrypt() {
    this.encryptedPasswords = this.storageService.get(Key.PASSWORDS) ?? '';
    const text = this.encryptService.decrypt(
      this.authService.user.password,
      this.encryptedPasswords
    );
    this._passwords = JSON.parse(text || '[]');
  }

  getPasswords(): Password[] {
    return [...this._passwords];
  }

  generateId(): number {
    if (this._passwords.length <= 0) return 1;
    else return this._passwords[this._passwords.length - 1].id + 1;
  }

  addPassword(password: Password) {
    if (!this.isValid(password)) return;
    let id = this.generateId();
    this._passwords.push({ ...password, id });
    this.passwordsChanged.emit(this.getPasswords());
    this.encryptAndSave();
    this.routeService.navigateToPassword(id);
  }

  editPassword(password: Password) {
    let passwords = this._passwords.map((pass) => {
      if (pass.id === password.id) {
        pass = { ...password };
      }
      return pass;
    });
    this._passwords = passwords;
    this.passwordsChanged.emit(this.getPasswords());
    this.encryptAndSave();
  }

  deletePassword(id: number) {
    this._passwords = this._passwords.filter((pass) => pass.id !== id);
    this.passwordsChanged.emit(this.getPasswords());
    this.encryptAndSave();
    this.changeRoute();
  }

  getPassword(id: number): Password | undefined {
    let password = this._passwords.find((password) => password.id === id);
    return password ? { ...password } : undefined;
  }

  isValid(password: Password): boolean {
    return !(password.nickname == '' || password.nickname == ' ');
  }

  changeRoute() {
    if (this._passwords.length <= 0) {
      this.routeService.navigateToUpperLevel();
    } else {
      let id = this._passwords[0].id;
      this.routeService.navigateToPassword(id);
    }
  }

  private encryptAndSave() {
    const cypherText = this.encryptService.encrypt(
      this.authService.user.password,
      JSON.stringify(this.getPasswords())
    );
    this.storageService.save(Key.PASSWORDS, cypherText);
  }
}
