import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpostDetailComponent }  from './userpost-detail.component';

import {UserpostsComponent } from './userposts.component';
const routes: Routes = [
  { path: '', redirectTo: '/userposts', pathMatch: 'full' },
  { path: 'userposts', component: UserpostsComponent },
  { path: 'detail/:id', component: UserpostDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
