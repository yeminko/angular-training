import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');
  isSignUp: boolean = false;
  title = 'Login';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.isSignUp
      ? this.authService.saveUser(this.user)
      : this.authService.authUser(this.user);
  }

  onSignUp() {
    this.user = new User('', '');
    this.isSignUp = true;
    this.title = 'Sign Up';
  }

  ngOnInit(): void {}
}
