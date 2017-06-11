import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component'
import { HttpModule }    from '@angular/http';

import { UserpostDetailComponent }  from './userpost-detail.component';
import { UserpostService }          from './userpost.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
   BrowserModule,
   HttpModule,
   AppRoutingModule
 ],
 declarations: [
   AppComponent,
   UserpostDetailComponent
 ],
 providers: [ UserpostService ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
