import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../auth.service';
import { Password } from './password.model';
import { PasswordService } from './password.service';

@UntilDestroy()
@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss'],
})
export class PasswordsComponent implements OnInit {
  passwords: Password[] = [];
  searchedPasswords: Password[] = [];
  term: string = '';

  constructor(private passwordService: PasswordService) {}

  search() {
    this.term = this.term.trim().toLowerCase();
    if (this.term === '') this.searchedPasswords = this.passwords;
    else
      this.searchedPasswords = this.passwords.filter((password: Password) => {
        if (
          password.nickname.toLowerCase().includes(this.term) ||
          password.username.toLowerCase().includes(this.term)
        )
          return true;
        return false;
      });
  }

  getPasswords() {
    this.passwords = this.passwordService.getPasswords();
    this.passwordService.passwordsChanged
      .pipe(untilDestroyed(this))
      .subscribe((passwords: Password[]) => {
        this.passwords = passwords;
        this.term = '';
        this.searchedPasswords = passwords;
      });
  }

  ngOnInit(): void {
    this.passwordService.loadAndDecrypt();
    this.getPasswords();
    this.search();
  }
}
