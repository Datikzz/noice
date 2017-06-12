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
    <div><label>User's id: </label>{{userpost.userId}}</div>
    <div><label>Id of post: </label>{{userpost.id}}</div>
    <div><label>Title: </label>{{userpost.title}}</div>
    <div><label>Body: </label>{{userpost.body}}</div>
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
    console.log('init userpost detail');
    this.route.params
      .switchMap((params: any) => {
        return this.userpostService.getPost(+params['id']);
      })
      .subscribe(userpost => {
        console.log('subscribe', userpost);
        if (userpost) {
          this.userpost = userpost;
          console.log('assign userpost', this);
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
