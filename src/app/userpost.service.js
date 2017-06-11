"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserpostService = (function () {
    function UserpostService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.userpostsUrl = 'http://jsonplaceholder.typicode.com/posts/';
    }
    UserpostService.prototype.getPosts = function () {
        return this.http.get(this.userpostsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UserpostService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    UserpostService.prototype.getPost = function (id) {
        var url = this.userpostsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
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
    UserpostService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return UserpostService;
}());
UserpostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserpostService);
exports.UserpostService = UserpostService;
//# sourceMappingURL=userpost.service.js.map