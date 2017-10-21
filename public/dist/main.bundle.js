webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_login_login_component__ = __webpack_require__("../../../../../src/app/home/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_register_register_component__ = __webpack_require__("../../../../../src/app/home/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_guard_service__ = __webpack_require__("../../../../../src/app/services/login.guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// thank you https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
// for route guard solution
var routes = [
    {
        path: 'welcome',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_login_guard_service__["a" /* LoginGuardService */]],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__home_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_4__home_register_register_component__["a" /* RegisterComponent */]
            }
        ]
    },
    {
        path: 'welcome',
        pathMatch: 'full',
        redirectTo: 'welcome/login'
    },
    {
        path: 'browse',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_5__browse_browse_component__["a" /* BrowseComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/browse'
    },
    {
        path: 'listings',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_6__list_list_component__["a" /* ListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'browse'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n  padding: .5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"w3-black\">Bike Store App</h1>\n<!--<section * ngIf=\"is_authed\">\n  <button class=\"w3-right w3-btn w3-teal\" (click)=\"logout()\">Logout</button>\n</section>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    //is_authed: Boolean = false;
    // I want to have the logout button in the app-component
    // and show/hide it based on is_authed. But cant figure out how
    // to trigger change to this variable upon login. only if you refresh
    // the page does the logout button appear..
    function AppComponent() {
        // this.checkAuth();
    }
    /*checkAuth(){
      this.is_authed = this._authService.isAuthed();
    }*/
    AppComponent.prototype.ngOnInIt = function () {
        //this.checkAuth();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_create_create_component__ = __webpack_require__("../../../../../src/app/list/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_my_list_my_list_component__ = __webpack_require__("../../../../../src/app/list/my-list/my-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_login_login_component__ = __webpack_require__("../../../../../src/app/home/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_register_register_component__ = __webpack_require__("../../../../../src/app/home/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_login_guard_service__ = __webpack_require__("../../../../../src/app/services/login.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_random_random_component__ = __webpack_require__("../../../../../src/app/home/random/random.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_pipe__ = __webpack_require__("../../../../../src/app/error.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { CookieModule } from 'ngx-cookie';
















/*
console.log('Appcomponent', AppComponent);
console.log('MyListComponent', MyListComponent);
console.log('BrowseComponent', BrowseComponent);
*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__list_create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__list_my_list_my_list_component__["a" /* MyListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_random_random_component__["a" /* RandomComponent */],
            __WEBPACK_IMPORTED_MODULE_19__error_pipe__["a" /* ErrorPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            //CookieModule.forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_17__services_login_guard_service__["a" /* LoginGuardService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search{\r\n  width: 90%;\r\n  font-size: 120%\r\n}\r\n\r\n#nresults{\r\n  font-size: 150%;\r\n  color: green;\r\n}\r\n\r\nh4, h5{\r\n  font-weight: bold\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a routerLink=\"/browse\" class=\"selected\">Browse</a> |\n<a routerLink=\"/listings\">My Listings</a>\n\n<section>\n  <button class=\"w3-right w3-btn w3-teal\" (click)=\"logout()\">Logout</button>\n</section>\n\n<h2>Current Listings</h2>\n<p *ngIf=\"posts.length==0\" class=\"w3-text-orange\">\n  There are no active listings at this time. You can create a listing in the My Listings section.\n</p>\n\n<section id=\"search\" *ngIf=\"posts.length > 0\">\n  <i>Search listings by title (matches anywhere in the title)</i>\n  <form>\n    <input type=\"text\" id=\"search\" name=\"search_term\" [(ngModel)]=\"search_term\" (keyup)=\"search()\">\n  </form>\n\n</section>\n<p id=\"nresults\">{{posts_filtered.length}} Posting<span *ngIf=\"posts_filtered.length!=1\">s</span></p>\n<div *ngFor=\"let post of posts_filtered\" class=\"post w3-card w3-col l12 m8\" >\n\n  <div class=\"w3-col l2\">\n     <img src=\"{{post.img_url}}\" style=\"width:100%\">\n  </div>\n  <div class=\"w3-col l1\">\n    &nbsp;\n  </div>\n  <div class=\"w3-col l3\">\n    <h4>{{post.title}}</h4>\n\n    <h5>Description</h5>\n    <p>{{post.description}}</p>\n  </div>\n  <div class=\"w3-col l3\">\n    <h5>Price</h5>\n    <p>{{post.price | currency:'USD':true}}</p>\n    <h5>Location</h5>\n    <p>{{post.location}}</p>\n  </div>\n  <div class=\"w3-col l3\">\n    <button *ngIf=\"post.creator==user\" (click)=\"deletePost(post)\">Delete</button>\n    <button *ngIf=\"post.creator!=user\" (click)=\"showContact(post)\">Contact</button>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrowseComponent = (function () {
    function BrowseComponent(_postService, _cookieservice, _authService, _router) {
        this._postService = _postService;
        this._cookieservice = _cookieservice;
        this._authService = _authService;
        this._router = _router;
        this.posts = [];
        this.posts_filtered = this.posts;
        this.search_term = "";
    }
    BrowseComponent.prototype.ngOnInit = function () {
        /*this._postService.getPosts({}, // provide an empty filter to get all listings
          (result)=>{
            this.posts = result;
            this.search();
          }) ;
        */
        this.refreshPosts();
        this.user = this._cookieservice.get('userID');
    };
    BrowseComponent.prototype.refreshPosts = function () {
        var _this = this;
        this._postService.getPosts({}, // provide an empty filter to get all listings
        function (result) {
            console.log('refreshed posts');
            _this.posts = result;
            _this.search();
        });
    };
    BrowseComponent.prototype.search = function () {
        var _this = this;
        console.log('searching');
        if (this.search_term.length == 0) {
            this.posts_filtered = this.posts;
        }
        else {
            this.posts_filtered = this.posts.filter(function (post) {
                return post.title.toLowerCase().indexOf(_this.search_term.toLowerCase()) >= 0;
            });
        }
    };
    BrowseComponent.prototype.showContact = function (post) {
        console.log('getting contact info for', post.creator);
        this._authService.getUser(post.creator)
            .then(function (user) {
            var creator = user;
            alert("Name: " + creator.name + "\nEmail: " + creator.email + "\nListing. Id: " + post._id);
        })
            .catch(function (err) { return console.log('Error getting post creator contact info', err); });
    };
    BrowseComponent.prototype.deletePost = function (post) {
        var _this = this;
        var sure = confirm('Are you sure you would like to delete this post?');
        if (sure) {
            this._postService.deletePost(post, function (result) {
                console.log('result from deleting post', result);
                _this.refreshPosts();
            });
        }
    };
    BrowseComponent.prototype.logout = function () {
        var _this = this;
        // TODO: confirm boxes dont show on mobile
        var sure = confirm('Are you sure you want to log out?');
        console.log('sure', sure);
        if (sure) {
            this._authService.logout()
                .then(function () {
                console.log('logged out');
                _this._router.navigate(['/welcome/login']);
            });
        }
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], BrowseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/error.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorPipe = (function () {
    function ErrorPipe() {
    }
    ErrorPipe.prototype.transform = function (err, name) {
        if (name === void 0) { name = "This field"; }
        var title_name = name[0].toUpperCase() + name.slice(1);
        name = name.toLowerCase();
        //console.log('error pipe got', err)
        if (err === null) {
            return '';
        }
        if (Object.keys(err).length == 0) {
            return '';
        }
        var msg = [];
        if (err['required']) {
            msg.push(title_name + " is required.");
        }
        if (err['pattern']) {
            msg.push("Invalid format for " + name + ".");
        }
        if (err['minlength']) {
            var min_chars = err['minlength']['requiredLength'];
            msg.push(title_name + " must be at least " + min_chars + " characters long.");
        }
        return msg.join(' ');
    };
    return ErrorPipe;
}());
ErrorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'error'
    })
], ErrorPipe);

//# sourceMappingURL=error.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<router-outlet></router-outlet>\n\n<app-random></app-random>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-menu\">\n  <a routerLink=\"/welcome/login\" class=\"selected\">Login</a> |\n  <a routerLink=\"/welcome/register\">Register</a>\n</div>\n<hr>\n<section class=\"w3-col l3\">\n  <h3>Login</h3>\n  <div class='errors' *ngIf=\"errorMessages\">\n    <p class=\"w3-panel w3-pale-red\" *ngFor=\"let msg of errorMessages\">\n      {{msg}}\n    </p>\n  </div>\n  <form (submit)=\"login($event)\" #loginData=\"ngForm\" autocomplete=\"off\" >\n\n    <p>Email</p>\n    <p><input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\"></p>\n\n    <p>Password</p>\n    <p><input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\"></p>\n\n    <input type=\"submit\" value=\"Login\">\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        this.errorMessages = undefined; // reset errors
        console.log('got a user from the form', this.user);
        this._authService.login(this.user)
            .then(function (user) {
            _this._router.navigate(['/browse']);
        })
            .catch(function (response) { return _this.handleErrors(response.json()); });
    };
    LoginComponent.prototype.handleErrors = function (errors) {
        console.log('handling errors', errors);
        if (Array.isArray(errors)) {
            this.errorMessages = errors;
        }
        else if (errors.message) {
            this.errorMessages = [errors.message];
        }
        else {
            this.errorMessages = [errors];
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/home/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/random/random.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/random/random.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"w3-center\">Post of the Day!</h3>\n<!--<div class=\"w3-col l2\">&nbsp;</div>-->\n<div *ngIf=\"post\" class=\"post w3-card w3-col l8\" >\n<!--w3-col l8 center w3-small-->\n  <div class=\"w3-col l2\">\n     <img src=\"{{post.img_url}}\" style=\"width:100%\">\n  </div>\n  <div class=\"w3-col l1\">\n    &nbsp;\n  </div>\n  <div class=\"w3-col l5\">\n    <h4>{{post.title}}</h4>\n\n    <h5>Description</h5>\n    <p>{{post.description}}</p>\n  </div>\n  <div class=\"w3-col l4\">\n    <h5>Price: {{post.price | currency:'USD':true}}</h5>\n\n    <h5>Location: {{post.location}}</h5>\n  </div>\n\n</div>\n<!---<div class=\"w3-col l2\">&nbsp;</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/home/random/random.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RandomComponent = (function () {
    function RandomComponent(_postService) {
        this._postService = _postService;
    }
    RandomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.randomPost(function (post) {
            _this.post = post;
        });
    };
    return RandomComponent;
}());
RandomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-random',
        template: __webpack_require__("../../../../../src/app/home/random/random.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/random/random.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], RandomComponent);

var _a;
//# sourceMappingURL=random.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-menu\">\n  <a routerLink=\"/welcome/login\">Login</a> |\n  <a routerLink=\"/welcome/register\" class=\"selected\">Register</a>\n</div>\n<hr>\n<section class=\"w3-col l3\">\n  <h3>Register</h3>\n  <div class='errors' *ngIf=\"errorMessages\">\n    <p class=\"w3-panel w3-pale-red\" *ngFor=\"let msg of errorMessages\">\n      {{msg}}\n    </p>\n  </div>\n  <form (ngSubmit)=\"register($event)\" #formData=\"ngForm\" >\n    <p>User Name</p>\n    <p class=\"w3-panel w3-pale-red\"\n      *ngIf = \"user_name.touched && user_name.errors\">\n      {{user_name.errors | error: 'User name' }}</p>\n    <p><input type=\"text\" name=\"name\"\n      autocomplete=\"off\"\n      [(ngModel)]=\"user.name\"\n      required\n      minlength=\"3\"\n      #user_name = \"ngModel\"\n      >\n    </p>\n\n    <p>Email</p>\n    <!-- alphanumeric and can have @. * or #. Must be between 8 and 15 characters -->\n    <p class=\"w3-panel w3-pale-red\"\n     *ngIf=\"user_email.touched && user_email.errors\">\n      {{user_email.errors | error: 'Email'}}\n    </p>\n    <p><input type=\"email\" name=\"email\"\n      [(ngModel)]=\"user.email\"\n      autocomplete=\"off\"\n      required\n      pattern = \"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n      #user_email = \"ngModel\"\n      >\n    </p>\n\n    <p>Password</p>\n    <p class=\"w3-text-gray w3-small\">Must have at least 16 characters, and can contain letters, numbers and special characteres @, # and *.</p>\n    <p class=\"w3-panel w3-pale-red\"\n      *ngIf=\"user_password.touched && user_password.errors\">\n      {{user_password.errors | error: 'Password' }}\n    </p>\n    <p><input type=\"password\" name=\"password\"\n      [(ngModel)]=\"user.password\"\n      autocomplete=\"off\"\n      required\n      minlength=\"16\"\n      pattern=\"^([a-zA-Z0-9@*#]{16,32})$\"\n      #user_password = \"ngModel\"\n      ></p>\n\n    <p>Confirm Password</p>\n    <p class=\"w3-panel w3-pale-red\" *ngIf=\"user_password2.touched && user.password!=user_password2.value\">Passwords need to match</p>\n    <p><input type=\"password\" name=\"password2\"\n      [(ngModel)]=\"password2\"\n      autocomplete=\"off\"\n      required\n      #user_password2 = \"ngModel\"\n      ></p>\n\n\n    <input *ngIf=\"formData.valid && user_password.value == user_password2.value\" type=\"submit\" value=\"Register\">\n  </form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.password2 = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (e) {
        var _this = this;
        e.preventDefault();
        this.errorMessages = undefined; // reset errors
        console.log('got a user from the form', this.user);
        this._authService.register(this.user)
            .then(function (user) {
            _this._router.navigate(['/browse']);
        })
            .catch(function (response) { return _this.handleErrors(response.json()); });
    };
    RegisterComponent.prototype.handleErrors = function (errors) {
        console.log('handling errors', errors);
        if (Array.isArray(errors)) {
            this.errorMessages = errors;
        }
        else if (errors.message) {
            this.errorMessages = [errors.message];
        }
        else {
            this.errorMessages = [errors];
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/home/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nimg{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\ninput, textarea{\r\n  width: 80%;\r\n}\r\n\r\n\r\n\r\nform{\r\n  margin-bottom: 16px;\r\n  background-color: rgb(240,240,240);\r\n  padding: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Create a Listing</h3>\n<form (ngSubmit)=\"newPost($event); formData.reset()\" #formData=\"ngForm\" class=\"w3-col l12\">\n\n  <div class=\"w3-col l3\">\n    <img *ngIf=\"post.img_url\" src=\"{{post.img_url}}\" alt=\"No image found at this url\">\n    <p *ngIf=\"!post.img_url\">Image preview will appear here</p>\n  </div>\n\n  <div class=\"w3-col l4\">\n    <p>Title</p>\n    <p><input type=\"text\" name=\"title\"\n      [(ngModel)]=\"post.title\"\n    ></p>\n\n    <p>Description</p>\n    <p><textarea name=\"description\"\n      [(ngModel)]=\"post.description\"\n    >\n    </textarea></p>\n  </div>\n\n  <div class=\"w3-col l3\">\n    <p>Price</p>\n    <p><input type=\"text\" name=\"price\"\n      [(ngModel)]=\"post.price\"\n    ></p>\n\n    <p>Location</p>\n    <p><input type=\"text\" name=\"location\"\n      [(ngModel)]=\"post.location\"\n    ></p>\n\n    <p>Link to Image</p>\n    <p><input type=\"text\" name=\"img_url\"\n      [(ngModel)]=\"post.img_url\"\n    ></p>\n\n    <input type=\"submit\" value=\"Create Listing\">\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/list/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post__ = __webpack_require__("../../../../../src/app/models/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = (function () {
    function CreateComponent(_postService, _router, _cookieService) {
        this._postService = _postService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.post = new __WEBPACK_IMPORTED_MODULE_1__models_post__["a" /* Post */]();
        this.user_id = this._cookieService.get('userID');
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.newPost = function (e) {
        var _this = this;
        e.stopPropagation();
        this.post.creator = this.user_id;
        console.log('sending post to db', this.post);
        this._postService.createPost(this.post, function (result) {
            console.log('created new post in the db', result);
            _this.post = result;
            _this._router.navigate(['/listings']);
            // tried to use this to reload the page but it doesn't work.
            // I know this would be better handled with Subjects,
            // but there were no examples of these in the course content
            alert('Post added! Please refresh your page to see it below.');
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/list/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], CreateComponent);

var _a, _b, _c;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\napp-create{\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 3em;\r\n  min-height: 25vh;\r\n}\r\n\r\napp-my-list{\r\n  height: 75vh;\r\n  overflow-y: auto;\r\n  display: block;\r\n\r\n  border: 1px solid black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a routerLink=\"/browse\">Browse</a> |\n<a routerLink=\"/listings\" class=\"selected\">My Listings</a>\n\n<section>\n  <button class=\"w3-right w3-btn w3-teal\" (click)=\"logout()\">Logout</button>\n</section>\n\n<app-create class=\"w3-padding\"></app-create>\n<hr>\n<app-my-list class=\"w3-padding\"></app-my-list>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.logout = function () {
        var _this = this;
        // TODO: confirm boxes dont show on mobile
        var sure = confirm('Are you sure you want to log out?');
        console.log('sure', sure);
        if (sure) {
            this._authService.logout()
                .then(function () {
                console.log('logged out');
                _this._router.navigate(['/welcome/login']);
            });
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/my-list/my-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\ninput, textarea, button{\r\n  width: 80%;\r\n}\r\n\r\n.disabled{\r\n  pointer-events: none;\r\n  border: none;\r\n  resize: none;\r\n}\r\n\r\n.title{\r\n  font-size: 130%;\r\n}\r\nlabel{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-size: 105%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/my-list/my-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Manage My Listings</h3>\n\n<p *ngIf=\"!posts || posts.length==0\" class=\"w3-text-orange\">\n  You haven't created any posts yet! Use the form above to list your bicycle in the marketplace.\n</p>\n<div *ngFor=\"let post of posts; let index = index\" class=\"post\">\n  <form #formData=\"ngForm\" (ngSubmit)=\"updatePost(post, $event)\" class=\"w3-col l12 w3-card\"\n    >\n    <p class=\"w3-panel w3-pale-red\"\n         *ngIf=\"errors\">\n          {{errors}}\n    </p>\n    <div class=\"w3-col l2 m8\">\n      <img src=\"{{post.img_url}}\" style=\"width:100%\">\n    </div>\n    <div class=\"w3-col l1\">\n      &nbsp;\n    </div>\n    <div class=\"w3-col l10\">\n      <div class=\"w3-col l4\">\n        <label>Title</label>\n        <p><input [ngClass]=\"{disabled: index!=editing}\" class=\"title\" type=\"text\" name=\"title\" value=\"{{post.title}}\"></p>\n\n        <label>Description</label>\n        <p><textarea\n          [ngClass]=\"{disabled: index!=editing}\"\n           name=\"description\"\n           maxlength=\"200\"\n          >{{post.description}}</textarea></p>\n      </div>\n\n      <div class=\"w3-col l4\">\n        <label>Price</label>\n        <p><input [ngClass]=\"{disabled: index!=editing}\"  type=\"number\" name=\"price\" value=\"{{post.price | currency:'USD':true}}\"></p>\n\n        <label>Location</label>\n\n        <p><input\n          [ngClass]=\"{disabled: index!=editing}\"\n          type=\"text\" name=\"location\" value=\"{{post.location}}\"\n\n          ></p>\n\n      </div>\n\n      <div class=\"w3-col l4\">\n        <p><button *ngIf=\"index!=editing\" (click)=\"enableEdit(index)\">Edit</button></p>\n        <p><input *ngIf=\"index==editing\" type=\"submit\" value=\"Update\"></p>\n        <p><button (click)=\"deletePost(post)\">Delete</button></p>\n        <p class=\"message\"></p>\n      </div>\n\n      <div class=\"w3-col l12\">\n        <label>Image URL</label>\n        <p><input [ngClass]=\"{disabled: index!=editing}\"  type=\"text\" name=\"img_url\" value=\"{{post.img_url}}\"></p>\n\n      </div>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/list/my-list/my-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post__ = __webpack_require__("../../../../../src/app/models/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyListComponent = (function () {
    function MyListComponent(_postService, _cookieService) {
        this._postService = _postService;
        this._cookieService = _cookieService;
        this.editing = undefined;
        this.user_id = this._cookieService.get('userID');
    }
    MyListComponent.prototype.refreshPosts = function () {
        var _this = this;
        this._postService.getPosts({ creator: this.user_id }, // filter to this user
        function (result) {
            console.log('refreshed posts');
            _this.posts = result;
        });
    };
    MyListComponent.prototype.ngOnInit = function () {
        this.refreshPosts();
        console.log('editing', this.editing);
    };
    MyListComponent.prototype.formToJSON = function (elements) {
        var data = {};
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var elem = elements_1[_i];
            data[elem['name']] = elem['value'];
        }
        return data;
    };
    MyListComponent.prototype.updatePost = function (post, e) {
        var _this = this;
        // cant do 2-way binding since there are an arbitrary number of forms
        // on this page, so we just scrape the form values:
        this.disableEdit();
        var form_data = this.formToJSON(e.target['elements']);
        var edited_post = new __WEBPACK_IMPORTED_MODULE_3__models_post__["a" /* Post */](post._id, form_data['title'], form_data['price'], form_data['description'], form_data['location'], form_data['img_url'], post.creator);
        this._postService.updatePost(edited_post, function (result) {
            console.log('result from updating post', result);
            _this.refreshPosts();
        }, function (error) {
            _this.errors = error;
        });
    };
    MyListComponent.prototype.deletePost = function (post) {
        var _this = this;
        var sure = confirm('Are you sure you would like to delete this post?');
        if (sure) {
            this._postService.deletePost(post, function (result) {
                console.log('result from deleting post', result);
                _this.refreshPosts();
            });
        }
    };
    MyListComponent.prototype.enableEdit = function (post_id) {
        this.editing = post_id;
    };
    MyListComponent.prototype.disableEdit = function () {
        this.editing = undefined;
    };
    return MyListComponent;
}());
MyListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-list',
        template: __webpack_require__("../../../../../src/app/list/my-list/my-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/my-list/my-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], MyListComponent);

var _a, _b;
//# sourceMappingURL=my-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(_id, title, price, description, location, img_url, creator) {
        if (_id === void 0) { _id = ""; }
        if (title === void 0) { title = ""; }
        if (price === void 0) { price = 1; }
        if (description === void 0) { description = ""; }
        if (location === void 0) { location = ""; }
        if (img_url === void 0) { img_url = "https://maxcdn.icons8.com/Share/icon/Transport//bicycle1600.png"; }
        if (creator === void 0) { creator = "anna"; }
        this._id = _id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.location = location;
        this.img_url = img_url;
        this.creator = creator;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, name, email, password) {
        if (_id === void 0) { _id = ""; }
        if (name === void 0) { name = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this._authService.isAuthed()) {
            this.router.navigate(['welcome/login']);
            return false;
        }
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth.guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(_http, _cookieService) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.api = 'http://localhost:8000/auth';
    }
    AuthService.prototype.login = function (user) {
        var url = this.api + '/login';
        console.log('POSTING', url);
        return this._http.post(url, user)
            .map(function (result) { return result.json(); })
            .toPromise()
            .then(function (user) {
            //console.log('available cookies in login()', this._cookieService.getAll());
        });
    };
    AuthService.prototype.register = function (user) {
        var url = this.api + '/register';
        console.log('POSTING', url);
        delete user._id; // let mongo generate this
        return this._http.post(url, user)
            .map(function (result) { return result.json(); })
            .toPromise();
    };
    AuthService.prototype.logout = function () {
        var url = this.api + '/logout';
        console.log('DELETING', url);
        return this._http.delete(url)
            .map(function (result) { return result.json(); })
            .toPromise();
    };
    AuthService.prototype.getUser = function (_id) {
        var url = this.api + '/users/' + _id;
        console.log('POSTING', url);
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .toPromise();
    };
    AuthService.prototype.isAuthed = function () {
        //console.log('available cookies in isAuthed()', this._cookieService.getAll());
        var expired = parseInt(this._cookieService.get('expiration')); // apparently these are not async
        var userID = this._cookieService.get('userID'); // ".get" as in get an attribute from an object
        var session = this._cookieService.get('session');
        return Boolean(session) && expired > Date.now() && Boolean(userID);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuardService = (function () {
    function LoginGuardService(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    LoginGuardService.prototype.canActivate = function () {
        if (this._authService.isAuthed()) {
            this.router.navigate(['browse']);
            return false;
        }
        return true;
    };
    return LoginGuardService;
}());
LoginGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginGuardService);

var _a, _b;
//# sourceMappingURL=login.guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.api = 'http://localhost:8000/api/posts';
    }
    PostService.prototype.JSONtoQuery = function (obj) {
        var serialized = [];
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var k = _a[_i];
            serialized.push(k + "=" + obj[k]);
        }
        if (serialized.length > 0) {
            return '?' + serialized.join('&');
        }
        else {
            return '';
        }
    };
    PostService.prototype.getPosts = function (filters, callback) {
        if (filters === void 0) { filters = {}; }
        var url = this.api + this.JSONtoQuery(filters);
        console.log('GETTING', url);
        this._http.get(url) // eg you could filter by creator Id
            .subscribe(function (response) { return callback(response.json()); }, function (err) { console.log('error getting posts', err); });
    };
    PostService.prototype.randomPost = function (callback) {
        var url = this.api + '/random';
        this._http.get(url)
            .subscribe(function (response) { return callback(response.json()); }, function (err) { console.log('error getting random post', err); });
    };
    PostService.prototype.createPost = function (post, callback) {
        delete post._id; // let mongo populate this
        this._http.post(this.api, post)
            .subscribe(function (response) { return callback(response.json()); }, function (err) { console.log('error creating post', err); });
    };
    PostService.prototype.updatePost = function (post, callback, errorHandler) {
        this._http.put(this.api + '/' + post['_id'], post)
            .subscribe(function (response) { return callback(response.json()); }, function (err) { return errorHandler(err.json()); });
    };
    PostService.prototype.deletePost = function (post, callback) {
        this._http.delete(this.api + '/' + post['_id'])
            .subscribe(function (response) { return callback(response.json()); }, function (err) { console.log('error deleting post', err); });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map