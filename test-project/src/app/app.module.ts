import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
      },
      {
        path: ':id/edit',
        component: ServerEditComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HomeComponent,
    ServerEditComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
