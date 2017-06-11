import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Userpost } from './userpost';
import { UserpostService } from './userpost.service';


@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  <table class="userposts">
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

export class AppComponent {
  userposts: Userpost[];
  selectedUserpost: Userpost;
  errorMessage: string;
  mode = 'Promise';
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
