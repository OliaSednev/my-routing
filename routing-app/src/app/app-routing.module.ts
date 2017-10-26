import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {EditServerComponent} from './components/servers/edit-server/edit-server.component';
import {ServerComponent} from './components/servers/server/server.component';
import {ServersComponent} from './components/servers/servers.component';
import {UserComponent} from './components/users/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
