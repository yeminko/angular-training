import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { SecureNotesComponent } from './secure-notes/secure-notes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PasswordEditComponent } from './passwords/password-edit/password-edit.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordsComponent,
    PaymentCardsComponent,
    SecureNotesComponent,
    SidebarComponent,
    PasswordEditComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
