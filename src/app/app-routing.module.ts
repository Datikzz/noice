import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpostDetailComponent }  from './userpost-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: UserpostDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
