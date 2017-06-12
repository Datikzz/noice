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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var userpost_service_1 = require("./userpost.service");
var UserpostDetailComponent = (function () {
    function UserpostDetailComponent(userpostService, route, location) {
        this.userpostService = userpostService;
        this.route = route;
        this.location = location;
    }
    UserpostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init userpost detail');
        this.route.params
            .switchMap(function (params) {
            return _this.userpostService.getPost(+params['id']);
        })
            .subscribe(function (userpost) {
            console.log('subscribe', userpost);
            if (userpost) {
                _this.userpost = userpost;
                console.log('assign userpost', _this);
            }
        });
    };
    UserpostDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserpostDetailComponent;
}());
UserpostDetailComponent = __decorate([
    core_1.Component({
        selector: 'userpost-detail',
        template: "\n  <div *ngIf=\"userpost\">\n    <h2>{{userpost.title}} details!</h2>\n    <div><label>User's id: </label>{{userpost.userId}}</div>\n    <div><label>Id of post: </label>{{userpost.id}}</div>\n    <div><label>Title: </label>{{userpost.title}}</div>\n    <div><label>Body: </label>{{userpost.body}}</div>\n    <button (click)=\"goBack()\">Back</button>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [userpost_service_1.UserpostService,
        router_1.ActivatedRoute,
        common_1.Location])
], UserpostDetailComponent);
exports.UserpostDetailComponent = UserpostDetailComponent;
//# sourceMappingURL=userpost-detail.component.js.map