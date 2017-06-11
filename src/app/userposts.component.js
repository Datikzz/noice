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
var router_1 = require("@angular/router");
var userpost_service_1 = require("./userpost.service");
var AppComponent = (function () {
    function AppComponent(router, userpostService) {
        this.router = router;
        this.userpostService = userpostService;
        this.mode = 'Promise';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    AppComponent.prototype.getPosts = function () {
        var _this = this;
        this.userpostService.getPosts()
            .then(function (userposts) { _this.userposts = userposts; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onSelect = function (userpost) {
        this.selectedUserpost = userpost;
        this.router.navigate(['/detail', this.selectedUserpost.id]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <router-outlet></router-outlet>\n  <table class=\"userposts\">\n    <thead>\n      <tr>\n        <th>Title</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let userpost of userposts\"\n      (click)=\"onSelect(userpost)\"\n      [class.selected]=\"userpost === selectedUserpost\">\n      <td><a>{{userpost.title}}</a></td>\n      </tr>\n    </tbody>\n  </table>\n  ",
        providers: [userpost_service_1.UserpostService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        userpost_service_1.UserpostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=userposts.component.js.map