import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { DeactivateGuardService } from './guards/deactivate-guard.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordEditComponent } from './passwords/password-edit/password-edit.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { SecureNotesComponent } from './secure-notes/secure-notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'passwords',
    component: PasswordsComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'new',
        component: PasswordEditComponent,
      },
      {
        path: ':id',
        component: PasswordEditComponent,
        canDeactivate: [DeactivateGuardService],
      },
    ],
  },
  {
    path: 'payment-cards',
    component: PaymentCardsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'secure-notes',
    component: SecureNotesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
