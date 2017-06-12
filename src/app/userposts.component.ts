import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Userpost } from './userpost';
import { UserpostService } from './userpost.service';


@Component({
  selector: 'userposts',
  template: `
  <table class="userposts table-hover">
    <thead>
      <tr>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let userpost of userposts"
      (click)="onSelect(userpost)"
      [class.selected]="userpost === selectedUserpost">
      <td><a>{{userpost.title}}</a></td>
      </tr>
    </tbody>
  </table>
  `,
  providers: [UserpostService]
})

export class UserpostsComponent implements OnInit{
  userposts: Userpost[];
  selectedUserpost: Userpost;
  errorMessage: string;
  constructor(private router: Router,
              private userpostService: UserpostService) {}
    ngOnInit() {
      this.getPosts();
    }

   getPosts() {
     this.userpostService.getPosts()
      .then(userposts => {this.userposts = userposts},
            error =>  this.errorMessage = <any>error);
   }

  onSelect( userpost: Userpost): void {
    this.selectedUserpost = userpost;
    this.router.navigate(['/detail', this.selectedUserpost.id]);
  }
  /*gotoDetail(userpost: Userpost): void {
      let link = ['/detail', userpost.id];
      this.router.navigate(link);
      console.log('ive been called');
    }*/
}
