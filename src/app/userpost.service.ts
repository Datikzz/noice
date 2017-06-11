import { Injectable } from '@angular/core';

import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Userpost } from './userpost';

@Injectable()
export class UserpostService {
 private headers = new Headers({'Content-Type': 'application/json'});
 private userpostsUrl = 'http://jsonplaceholder.typicode.com/posts/';
 constructor(private http:Http) {
    }
    getPosts(): Promise<Userpost[]>{
        return this.http.get(this.userpostsUrl)
                        //.map((res) => res.json())
                        //.do((val) => console.log('Value:', val))
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
       let body = res.json();
       return body || [];
    }
    getPost(id: number): Promise<Userpost> {
      const url = `${this.userpostsUrl}/${id}`;
      return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Userpost)
      .catch(this.handleError);
    }
    /*getPosts(): Promise<Userpost[]> {
   return this.http.get(this.userpostsUrl)
              .toPromise()
              .then(response => response.json().data as Userpost[])
              .catch(this.handleError);
 }
   getPost(id: number): Promise<Userpost> {
     const url = `${this.userpostsUrl}/${id}`;
     return this.http.get(url)
       .toPromise()
       .then(response => response.json().data as Userpost)
       .catch(this.handleError);
   }*/

    private handleError (error: Response | any) {
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Promise.reject(errMsg);
   }
}
