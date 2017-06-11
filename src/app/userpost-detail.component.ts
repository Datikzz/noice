import 'rxjs/add/operator/switchMap';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }               from '@angular/common';

import { Userpost } from './userpost';
import { UserpostService }  from './userpost.service';

@Component({
  selector: 'userpost-detail',
  template: `
  <div *ngIf="userpost">
    <h2>{{userpost.title}} details!</h2>
    <div><label>userId: </label>{{userpost.userId}}</div>
    <div><label>id: </label>{{userpost.id}}</div>
    <div><label>title: </label>{{userpost.title}}</div>
    <div><label>body: </label>{{userpost.body}}</div>
    <button (click)="goBack()">Back</button>
  </div>
  `
})
export class UserpostDetailComponent implements OnInit{
  userpost: Userpost;

  constructor(
    private userpostService: UserpostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
  this.route.params
      .switchMap((params: Params) => this.userpostService.getPost(+params['id']))
      .subscribe(userpost => this.userpost = userpost);
  }

  goBack(): void {
    this.location.back();
  }
}
