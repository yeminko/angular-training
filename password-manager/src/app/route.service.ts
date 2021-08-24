import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}

  navigateToPassword(id: number) {
    this.router.navigate(['passwords', id]);
  }

  navigateToUpperLevel() {
    this.router.navigate(['../']);
  }

  navigateTo404() {
    this.router.navigate(['404']);
  }

  navigateToHome() {
    this.router.navigate(['passwords']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
