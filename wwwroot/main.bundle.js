webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div #gmap style=\"width:100%;height:500px; margin-top: 50px;\"></div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.latitude = 27.692134;
        this.longitude = 85.319518;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(this.latitude, this.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var marker = new google.maps.Marker({
            position: { lat: this.latitude, lng: this.longitude },
            title: "Softvision",
            label: "Softvision"
        });
        marker.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('gmap'),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "gmapElement", void 0);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\r\n     [ngClass]=\"{'alert':message,'alert-success':message.type==='success',\r\n     'alert-danger':message.type==='error'}\">{{message.text}}</div>\r\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'alert',
            template: __webpack_require__("./src/app/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div hidden >\r\n<!-- <login (Logged)='changeLogged($event)'></login> -->\r\n</div>\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  \r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/home']\" >Home </a>\r\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/about']\" >About</a>\r\n        <a class=\"nav-item nav-link\" (click)=\"signOut()\" *ngIf=\"loggedIn\" >LogOut</a>\r\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/login']\"  *ngIf=\"!loggedIn\">LogIn</a>\r\n        <!-- <a class=\"nav-item nav-link\" [routerLink]=\"['/test']\" *ngIf=\"currentUser\">Games</a> -->\r\n        <div class=\"dropdown\" *ngIf=\"loggedIn\">\r\n            <a class=\"btn dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: rgba(255,255,255,.5)\">\r\n              Games\r\n            </a>\r\n          \r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n              <a class=\"dropdown-item\"[routerLink]=\"['/tictactoe']\">Tic-Tac-Toe</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n  <div>\r\n   <alert></alert>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__ = __webpack_require__("./src/app/service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularx_social_login__ = __webpack_require__("./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(_sharedservice, authservice, router, socialLogin) {
        var _this = this;
        this._sharedservice = _sharedservice;
        this.authservice = authservice;
        this.router = router;
        this.socialLogin = socialLogin;
        this.title = 'Login Application';
        this.loggedIn = false;
        this.currentUser = this._sharedservice.resp;
        authservice.loggedIn$.subscribe(function (status) {
            _this.loggedIn = status;
            _this._sharedservice.loggedIn = _this.loggedIn;
            //console.log(status+'from app component');
        });
    }
    //logout() {
    //  debugger;
    //  this.authservice.logout().subscribe(x => {
    //    this._sharedservice.setlog(false);
    //    this.router.navigate(['/login']);
    //  })
    //}
    AppComponent.prototype.signOut = function () {
        //window.location.href = 'https://mail.google.com/mail/u/0/?logout&hl=en';    
        this._sharedservice.setlog(false);
        var rem = this._sharedservice.getRemember();
        if (rem == "true") {
            this.loggedIn = false;
            this._sharedservice.setCurrentUser(null);
            this._sharedservice.setlog(false);
            this.authservice.setlog(false);
            localStorage.removeItem("loggedin");
            this.router.navigate(['/login']);
        }
        else {
            this.authservice.logout();
            this._sharedservice.setCurrentUser(null);
            localStorage.removeItem('currentUser');
            localStorage.removeItem('password');
            localStorage.removeItem('remember');
            localStorage.removeItem("loggedin");
            this._sharedservice.setlog(false);
            this.authservice.setlog(false);
            this.router.navigate(['/login']);
        }
        //this._sharedservice.setCurrentUser(null);
        //this.loggedIn = false;
        //localStorage.removeItem('loggedIn');
        //this.authservice.logout();
        //this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__["a" /* ShareduserService */], __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4_angularx_social_login__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.apiUrl = 'http://localhost:57341/api';
    }
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__ = __webpack_require__("./src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_authentication_service__ = __webpack_require__("./src/app/service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_email_service__ = __webpack_require__("./src/app/service/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__itunes_search_check_component__ = __webpack_require__("./src/app/itunes-search/check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__ = __webpack_require__("./src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__email_confirmation_email_confirmation_component__ = __webpack_require__("./src/app/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__password_reset_password_reset_component__ = __webpack_require__("./src/app/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__forgot_password_forgot_password_component__ = __webpack_require__("./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_search_service__ = __webpack_require__("./src/app/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__itunes_search_itunes_search_component__ = __webpack_require__("./src/app/itunes-search/itunes-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__data_data_component__ = __webpack_require__("./src/app/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__youtube_search_youtube_search_injectables__ = __webpack_require__("./src/app/youtube-search/youtube-search.injectables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__youtube_search_youtube_search_component__ = __webpack_require__("./src/app/youtube-search/youtube-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__youtube_search_search_result_search_result_component__ = __webpack_require__("./src/app/youtube-search/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__youtube_search_search_box_component__ = __webpack_require__("./src/app/youtube-search/search-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__youtube_pipe__ = __webpack_require__("./src/app/youtube.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__test_tictactoe_component__ = __webpack_require__("./src/app/test/tictactoe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__social_login_social_login_component__ = __webpack_require__("./src/app/social-login/social-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angularx_social_login__ = __webpack_require__("./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var config = new __WEBPACK_IMPORTED_MODULE_34_angularx_social_login__["b" /* AuthServiceConfig */]([
    {
        id: __WEBPACK_IMPORTED_MODULE_34_angularx_social_login__["c" /* GoogleLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_34_angularx_social_login__["c" /* GoogleLoginProvider */]("774590296620-bkeg0p6ojr85ljrl0vmsss8j9l9jos8h")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_19__email_confirmation_email_confirmation_component__["a" /* EmailConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_21__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_23__itunes_search_itunes_search_component__["a" /* ItunesSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_17__itunes_search_check_component__["a" /* CheckComponent */],
                __WEBPACK_IMPORTED_MODULE_24__data_data_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_25__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_27__youtube_search_youtube_search_component__["a" /* YouTubeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_28__youtube_search_search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_29__youtube_search_search_box_component__["a" /* SearchBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_30__youtube_pipe__["a" /* YoutubePipe */],
                __WEBPACK_IMPORTED_MODULE_31__test_tictactoe_component__["a" /* TicTacToeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__social_login_social_login_component__["a" /* SocialLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_34_angularx_social_login__["d" /* SocialLoginModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_13__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_26__youtube_search_youtube_search_injectables__["a" /* youTubeSearchInjectables */],
                __WEBPACK_IMPORTED_MODULE_14__service_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_15__service_shareduser_service__["a" /* ShareduserService */], __WEBPACK_IMPORTED_MODULE_16__service_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_22__service_search_service__["a" /* SearchService */],
                { provide: __WEBPACK_IMPORTED_MODULE_34_angularx_social_login__["b" /* AuthServiceConfig */], useFactory: provideConfig }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__ = __webpack_require__("./src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_confirmation_email_confirmation_component__ = __webpack_require__("./src/app/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_reset_password_reset_component__ = __webpack_require__("./src/app/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forgot_password_forgot_password_component__ = __webpack_require__("./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__itunes_search_itunes_search_component__ = __webpack_require__("./src/app/itunes-search/itunes-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__youtube_search_youtube_search_component__ = __webpack_require__("./src/app/youtube-search/youtube-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__test_tictactoe_component__ = __webpack_require__("./src/app/test/tictactoe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__social_login_social_login_component__ = __webpack_require__("./src/app/social-login/social-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    // { path: '', component: LoginComponent },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'emailconfirmation', component: __WEBPACK_IMPORTED_MODULE_6__email_confirmation_email_confirmation_component__["a" /* EmailConfirmationComponent */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_7__password_reset_password_reset_component__["a" /* PasswordResetComponent */] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_8__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
    { path: 'itunes', component: __WEBPACK_IMPORTED_MODULE_10__itunes_search_itunes_search_component__["a" /* ItunesSearchComponent */] },
    { path: 'youtube', component: __WEBPACK_IMPORTED_MODULE_11__youtube_search_youtube_search_component__["a" /* YouTubeSearchComponent */] },
    { path: 'tictactoe', component: __WEBPACK_IMPORTED_MODULE_12__test_tictactoe_component__["a" /* TicTacToeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'slogin', component: __WEBPACK_IMPORTED_MODULE_13__social_login_social_login_component__["a" /* SocialLoginComponent */] },
    //otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/data/data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" border=\"1px solid black\">\n  <thead>\n    <tr>\n    <td>Image</td>\n    <td>Track</td>\n  </tr>\n  </thead>\n  <tbody> \n      <tr *ngFor=\"let track of data\">\n        <td><img src=\"{{track.thumbnail}}\" height=\"100px\"></td>\n        <td><a target=\"_blank\" href=\"{{track.link}}\">{{track.name}}</a></td>\n      </tr>    \n</tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_search_service__ = __webpack_require__("./src/app/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataComponent = /** @class */ (function () {
    function DataComponent(itunes) {
        this.itunes = itunes;
        this.data = [];
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    DataComponent.prototype.ngOnInit = function () {
        debugger;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 4,
        };
        this.getData();
    };
    DataComponent.prototype.getData = function () {
        var _this = this;
        debugger;
        this.itunes.search(this.searchvalue).subscribe(function (x) {
            //console.log(x.json());
            _this.data = x.json().results.map(function (item) {
                return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
            });
            //console.log(this.data);
            _this.dtTrigger.next();
        }, function (err) { return console.log("Error:", err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DataComponent.prototype, "searchvalue", void 0);
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'data',
            template: __webpack_require__("./src/app/data/data.component.html"),
            styles: [__webpack_require__("./src/app/data/data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_search_service__["a" /* SearchService */]])
    ], DataComponent);
    return DataComponent;
}());

var SearchItem = /** @class */ (function () {
    function SearchItem(name, artist, link, thumbnail, artistId) {
        this.name = name;
        this.artist = artist;
        this.link = link;
        this.thumbnail = thumbnail;
        this.artistId = artistId;
    }
    return SearchItem;
}());


/***/ }),

/***/ "./src/app/email-confirmation/email-confirmation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/email-confirmation/email-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <a [routerLink]=\"\" (click)=\"verifyEmail()\"> Click here to verify your email</a>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/email-confirmation/email-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_email_service__ = __webpack_require__("./src/app/service/email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailConfirmationComponent = /** @class */ (function () {
    function EmailConfirmationComponent(route, _emailservice) {
        this.route = route;
        this._emailservice = _emailservice;
    }
    EmailConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route.queryParams.subscribe(function (params) {
            //debugger;
            //console.log(params);
            _this.id = +params["id"];
            _this.token = params["token"];
            //console.log("id=", this.id);
            //console.log("token=", this.token);
        });
    };
    EmailConfirmationComponent.prototype.verifyEmail = function () {
        debugger;
        this._emailservice.verifyEmail(this.id, this.token);
        //  .subscribe(
        //  x => console.log(x),
        //  err => console.log("error:", err)
        //);
    };
    EmailConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email-confirmation',
            template: __webpack_require__("./src/app/email-confirmation/email-confirmation.component.html"),
            styles: [__webpack_require__("./src/app/email-confirmation/email-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_email_service__["a" /* EmailService */]])
    ], EmailConfirmationComponent);
    return EmailConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"disp\">\r\n<form [formGroup]=\"ForgotPassword\" (ngSubmit)=\"onSubmit(ForgotPassword.value)\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" formControlName=\"email\" [pattern]=\"emailPattern\" name=\"email\" />\r\n      <div *ngIf=\"ForgotPassword.controls['email'].errors && ForgotPassword.controls['email'].touched\" style=\"color:red\" class=\"help-block\">\r\n        <div *ngIf=\"ForgotPassword.controls['email'].errors.required\">Email is required.</div>\r\n        <div *ngIf=\"ForgotPassword.controls['email'].errors.pattern\">Email is invalid</div>\r\n      </div>\r\n  </div>    \r\n  <div class=\"form-group\">\r\n    <input [disabled]=\"!ForgotPassword.valid\" type=\"submit\"/>\r\n  </div>\r\n</form>\r\n</div>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, _userService, _alertService) {
        this.fb = fb;
        this._userService = _userService;
        this._alertService = _alertService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.ForgotPassword = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        localStorage.removeItem('PasswordResetToken');
        localStorage.removeItem('ResetId');
    }
    ;
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.onSubmit = function (formval) {
        var _this = this;
        debugger;
        this._userService.forgotPassword(formval.email).subscribe(function (resp) {
            var data = resp.json();
            //console.log(data);
            var msg = data[0];
            localStorage.setItem('PasswordResetToken', data[2]);
            localStorage.setItem('ResetId', data[1]);
            _this._alertService.success(msg, true);
            _this.ForgotPassword.reset();
        }, function (err) {
            var msg = "Check your email for a password reset link";
            console.log("error:", err);
            _this._alertService.success(msg, true);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__service_alert_service__["a" /* AlertService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__ = __webpack_require__("./src/app/service/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth, _shareduser) {
        this.router = router;
        this.auth = auth;
        this._shareduser = _shareduser;
        this.loggedIn = _shareduser.getLog();
        auth.setlog(this.loggedIn);
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        //if (localStorage.getItem('currentUser')||sessionStorage.getItem('currentUser')) {
        //logged in so return true
        this.loggedIn = this._shareduser.getLog();
        if (this.loggedIn) {
            return true;
        }
        //not logged in so redirect to login page with the return url
        this.router.navigateByUrl('/login');
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__["a" /* ShareduserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"jumbotron\" style=\"height:20px;\">\r\n<h1> Hi {{currentUser.name}}!</h1> \r\n</div>\r\n\r\n{{tab}}\r\n<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item \" (click)=\"itunes=true;youtube=false;LogUsers=false\">\r\n    <a class=\"nav-link\" [class.active]=\"itunes==true\">Itunes</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"itunes=false;youtube=true;LogUsers=false\">\r\n    <a class=\"nav-link\" [class.active]=\"youtube==true\">Youtube</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"itunes=false;youtube=false;LogUsers=true\">\r\n    <a class=\"nav-link\" [class.active]=\"LogUsers==true\">Users</a>\r\n  </li>\r\n</ul>\r\n\r\n<div *ngIf=\"itunes\">\r\n<itunes-search></itunes-search>\r\n</div>\r\n<div *ngIf=\"youtube\">\r\n  <youtube-search></youtube-search>\r\n</div>\r\n\r\n<div *ngIf=\"LogUsers\">\r\n    <table class=\"table table-hover\" >\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{user.username}}</td>\r\n        <!--({{user.firstName}}  {{user.lastName}})-->\r\n        <td><a (click)=\"deleteUser(user)\">Delete</a></td>\r\n      </tr>\r\n    </table>   \r\n</div>\r\n\r\n\r\n<style>\r\n  li{\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, _shareduser) {
        this.userService = userService;
        this._shareduser = _shareduser;
        this.users = [];
        this.itunes = true;
        this.currentUser = this._shareduser.getCurrentUser();
        //console.log(this.currentUser);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        //this.currentUser = this._shareduser.currentUser;
    };
    HomeComponent.prototype.deleteUser = function (tuser) {
        var _this = this;
        this.userService.delete(tuser.id).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__["a" /* ShareduserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/itunes-search/check.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckComponent = /** @class */ (function () {
    function CheckComponent() {
        this.datas = [];
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    CheckComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 4
        };
        this.dtTrigger.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckComponent.prototype, "datas", void 0);
    CheckComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'check',
            template: "<check>\n    <table datatable [dtOptions]=\"dtOptions\" border=\"1px solid black\">\n    <thead>\n      <tr>\n      <td>Track</td>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let track of itunes.results\">  \n    //   <td><img src=\"{{track.thumbnail}}\" height=\"100px\"></td>\n    //   <td><a target=\"_blank\" href=\"{{track.link}}\">{{track.name}}</a></td>\n    <td>{{data}}</td>\n    </tr>\n  </tbody>\n  </table>\n    </check> "
        })
    ], CheckComponent);
    return CheckComponent;
}());



/***/ }),

/***/ "./src/app/itunes-search/itunes-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/itunes-search/itunes-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"disp\">\n<p> Search your favourites from itunes.<br/></p>\n<form class=\"form\">\n  <div class=\"form-group \">\n  <input type=\"text\"\n  class=\"form-control\"\n  placeholder=\"Search\" autofocus\n  #search> \n  </div>\n  <button class=\"btn btn-primary\"\n  (click)=\"doSearch(search.value)\"> \n  Search\n  </button>\n  </form>\n<br/><br/>\n<table datatable [dtOptions]=\"dtOptions\" name=\"myTable\" [dtTrigger]=\"dtTrigger\" border=\"1px solid black\" *ngIf=loading>\n  <thead>\n    <tr>\n    <th>Image</th>\n    <th>Track</th>\n  </tr>\n  </thead>\n  <tbody> \n      <tr *ngFor=\"let track of results\">\n        <td><img src=\"{{track.thumbnail}}\" height=\"100px\"></td>\n        <td><a target=\"_blank\" href=\"{{track.link}}\">{{track.name}}</a></td>\n      </tr>    \n</tbody>\n</table>\n</div>\n\n\n<script>\n  var table = $('#myTable').DataTable();\n\n</script>\n"

/***/ }),

/***/ "./src/app/itunes-search/itunes-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItunesSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_search_service__ = __webpack_require__("./src/app/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItunesSearchComponent = /** @class */ (function () {
    function ItunesSearchComponent(itunes) {
        this.itunes = itunes;
        this.loading = false;
        this.results = [];
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.loading = false;
    }
    ItunesSearchComponent.prototype.ngOnInit = function () {
        // this.results[0]={name:"test",artist:"test",thumbnail:"Test",artistId:"test",link:"test"};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 4,
        };
    };
    ItunesSearchComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ItunesSearchComponent.prototype.doSearch = function (term) {
        var _this = this;
        this.loading = true;
        this.rerender();
        // console.log(this.dtElement);
        // this.dtElement.dtInstance.then((dtInstance:DataTables.Api)=>{
        //   //Destroy the table first
        //   dtInstance.destroy();
        //   //switch
        this.itunes.search(term)
            .subscribe(function (x) {
            //console.log(x.json());
            _this.loading = true;
            _this.results = x.json().results.map(function (item) {
                return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
            });
            //console.log(this.results);
            _this.dtTrigger.next();
        }, function (err) { return console.log("Error:", err); });
        // })  
    };
    ItunesSearchComponent.prototype.rerender = function () {
        if (this.dtElement != undefined) {
            this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTrigger.next();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], ItunesSearchComponent.prototype, "dtElement", void 0);
    ItunesSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'itunes-search',
            template: __webpack_require__("./src/app/itunes-search/itunes-search.component.html"),
            styles: [__webpack_require__("./src/app/itunes-search/itunes-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_search_service__["a" /* SearchService */]])
    ], ItunesSearchComponent);
    return ItunesSearchComponent;
}());

var SearchItem = /** @class */ (function () {
    function SearchItem(name, artist, link, thumbnail, artistId) {
        this.name = name;
        this.artist = artist;
        this.link = link;
        this.thumbnail = thumbnail;
        this.artistId = artistId;
    }
    return SearchItem;
}());


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://apis.google.com/js/platform.js\" async defer></script>\r\n\r\n<meta name=\"google-signin-client_id\" content=\"774590296620-bkeg0p6ojr85ljrl0vmsss8j9l9jos8h.apps.googleusercontent.com\">\r\n\r\n<div class=\"disp\">\r\n  <h2>Login</h2><br />\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error':f.submitted && !username.valid}\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !username.valid\" style=\"color:red\" class=\"help-block\">* Username is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !password.valid}\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" style=\"color:red\" class=\"help-block\">* Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"checkbox\" (change)=\"remember()\" [checked]=\"rememberMe\">Remember Me\r\n    </div>\r\n    <div class=\" form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n    <br />\r\n    <div class=\" form-group\">\r\n      <a [routerLink]=\"['/forgotpassword']\">Forgot Password</a>\r\n    </div>\r\n  </form>\r\n\r\n  <!--<button (click)=\"socialSignIn('google')\">Signin with Google</button>-->\r\n  <!--<div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>-->\r\n  <social-login></social-login>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__ = __webpack_require__("./src/app/service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/window.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, _alertService, _authService, _shared, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._alertService = _alertService;
        this._authService = _authService;
        this._shared = _shared;
        this.ngZone = ngZone;
        this.model = {};
        this.loading = false;
        this.rememberMe = false;
        this.loggedIn = false;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_window__["a" /* window */]['onSignIn'] = function (user) { return ngZone.run(function () { return _this.onSignIn(user); }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this._authService.logout();
        var a = this._shared.getCurrentUser();
        if (a) {
            if (a.name && a.pwd) {
                this.model.username = a.name;
                this.model.password = this._authService.decrypt(a.pwd);
                if (a.remember == "true") {
                    this.rememberMe = true;
                }
            }
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.username, this.model.password, this.rememberMe)
            .subscribe(function (data) {
            //console.log(data);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
            _this._alertService.error(error._body);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.remember = function () {
        this.rememberMe = !this.rememberMe;
    };
    LoginComponent.prototype.onSignIn = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        //console.log('Name: ' + profile.getName());
        //console.log('Image URL: ' + profile.getImageUrl());
        //console.log('Email: ' + profile.getEmail());
        localStorage.setItem('user', profile.getName());
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__service_shareduser_service__["a" /* ShareduserService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/password-reset/password-reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"disp\">\r\n<form [formGroup]=\"ResetPassword\" (ngSubmit)=\"onSubmit(ResetPassword.value)\" *ngIf=\"visible\">\r\n  <div class=\"form-group\">\r\n    <label>New Password</label>\r\n    <input type=\"password\" formControlName=\"password\" name=\"password\" [(ngModel)]=\"password\" />\r\n  </div>\r\n  <div *ngIf=\"!password.valid && (password.dirty||password.touched)\" style=\"color:red\" class=\"help-block\"> * Password is required</div>\r\n  <div>\r\n    <label>Retype password</label>\r\n    <input type=\"password\" formControlName=\"repassword\" name=\"repassword\" [(ngModel)]=\"repassword\" />\r\n  </div>\r\n  <div *ngIf=\"!repassword.valid && (repassword.dirty||repassword.touched)\" style=\"color:red\" class=\"help-block\"> * Confirm Password is required</div>\r\n  <input type=\"submit\" />\r\n</form>\r\n\r\n<div *ngIf=\"!visible\">Your password has already been reset</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(fb, _userService, _alertService, router) {
        this.fb = fb;
        this._userService = _userService;
        this._alertService = _alertService;
        this.router = router;
        this.password = '';
        this.repassword = '';
        this.ResetToken = "";
        this.visible = false;
        this.createForm();
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('ResetId') && localStorage.getItem('PasswordResetToken')) {
            this.visible = true;
        }
    };
    PasswordResetComponent.prototype.createForm = function () {
        this.ResetPassword = this.fb.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])],
            repassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    PasswordResetComponent.prototype.onSubmit = function (formvalue) {
        var _this = this;
        debugger;
        //console.log(formvalue);
        if (localStorage.getItem('ResetId') && localStorage.getItem('PasswordResetToken')) {
            this.ResetId = localStorage.getItem('ResetId');
            this.ResetToken = localStorage.getItem('PasswordResetToken');
        }
        this._userService.resetPassword(formvalue.password, formvalue.repassword, this.ResetId, this.ResetToken)
            .subscribe(function (x) {
            //console.log(x);
            localStorage.removeItem('PasswordResetToken');
            localStorage.removeItem('ResetId');
            _this._alertService.success(x, true);
            _this.router.navigate(["login"]);
        }, function (err) {
            console.log("error:", err);
            var msg = JSON.parse(err['_body']);
            _this._alertService.error(msg, false);
            _this.password = '';
            _this.repassword = '';
        });
    };
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__("./src/app/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("./src/app/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"disp\">\r\n  <h2>Register</h2><br/>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{' has-error': f.submitted && !username.valid}\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n      <div *ngIf=\"firstName.invalid && (firstName.dirty||firstName.touched)\" style=\"color:red\" class=\"help-block\"> * First Name is required</div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input type=\"text\" id=\"lastName\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n        <div *ngIf=\"lastName.invalid && (lastName.dirty||lastName.touched)\" style=\"color:red\" class=\"help-block\">* Last Name is required</div>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n        <div *ngIf=\"username.invalid && (username.dirty||username.touched)\" style=\"color:red\" class=\"help-block\">* Username is required</div>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\"  [pattern]=\"emailPattern\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n        <div *ngIf=\"(email.dirty||email.touched)&& email.errors\" style=\"color:red\">\r\n          <div *ngIf=\"email.errors.required\" style=\"color:red\" class=\"help-block\">* Email is required</div>\r\n          <div *ngIf=\"email.errors.pattern\">\r\n           * Enter valid email address\r\n          </div>\r\n        </div>\r\n        </div>\r\n        \r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n        <div *ngIf=\"password.invalid && (password.dirty||password.touched)\" style=\"color:red\" class=\"help-block\">* Password is required</div>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\r\n        <label for=\"confirmPassword\">Confirm Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" required />\r\n        <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty||confirmPassword.touched)\" style=\"color:red\" class=\"help-block\">* Confirm Password is required</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, _userService, _alertService) {
        this.router = router;
        this._userService = _userService;
        this._alertService = _alertService;
        this.model = {};
        this.loading = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        debugger;
        this.loading = true;
        this._userService.create(this.model)
            .subscribe(function (data) {
            //console.log(data);
            _this._alertService.success(data, true);
            _this.router.navigate(['login']);
        }, function (error) {
            _this._alertService.error(error._body);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__service_alert_service__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.keepAfterNavigationChange = false;
        //clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    //only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    //clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, config, router, _shared) {
        this.http = http;
        this.config = config;
        this.router = router;
        this._shared = _shared;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.loggedIn$ = this.loggedIn.asObservable();
    }
    AuthenticationService.prototype.setlog = function (log) {
        this.loggedIn.next(log);
    };
    AuthenticationService.prototype.login = function (username, password, remember) {
        var _this = this;
        debugger;
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map(function (res) {
            //login successful if there's a jwt token in the response
            var user = res.json();
            var shareduser = { name: username, pwd: password, remember: remember };
            _this._shared.setlog(true);
            _this._shared.setCurrentUser(shareduser);
            //this._shared.loggedIn = true;
            _this._shared.setRemember(remember);
            _this.loggedIn.next(true);
            if (user && user.token) {
                var pwd = _this.encrypt(password);
                //store user details and jwt token in local storage
                //to keep user logged in between page refreshes         
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('password', pwd);
                localStorage.setItem('loggedin', "true");
                if (remember) {
                    localStorage.setItem('remember', "true");
                }
                else {
                    localStorage.setItem('remember', "false");
                }
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        return this.http.post(this.config.apiUrl + '/users/logout', {});
    };
    AuthenticationService.prototype.encrypt = function (data) {
        return btoa(data);
    };
    AuthenticationService.prototype.decrypt = function (data) {
        return atob(data);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__service_shareduser_service__["a" /* ShareduserService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailService = /** @class */ (function () {
    function EmailService(http, config) {
        this.http = http;
        this.config = config;
    }
    EmailService.prototype.verifyEmail = function (userId, confirmationtoken) {
        debugger;
        var params = {
            id: userId,
            token: confirmationtoken
        };
        //let param = new URLSearchParams();
        //param.append('id', userId);
        //param.append('token', confirmationtoken);
        //return this.http.post(this.config.apiUrl + '/users/VerifyEmail', param).map((response: Response) => {
        //  response.json();
        //  console.log(response.json());
        //});
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/service/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.apiRoot = 'https://itunes.apple.com/search';
        this.loading = false;
    }
    SearchService.prototype.search = function (term) {
        var apiURL = this.apiRoot + "?term=" + term + "&media=music"; //&limit=20
        return this.http.get(apiURL);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/service/shareduser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareduserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareduserService = /** @class */ (function () {
    function ShareduserService() {
        this.checkUser();
        if (localStorage.getItem('loggedin')) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    }
    ShareduserService.prototype.getCurrentUser = function () {
        this.checkUser();
        return this.resp;
    };
    ShareduserService.prototype.setCurrentUser = function (user) {
        this.resp = user;
    };
    ShareduserService.prototype.setRemember = function (val) {
        if (val == true) {
            this.remember = "true";
        }
        else {
            this.remember = "false";
        }
    };
    ShareduserService.prototype.getRemember = function () {
        return this.remember;
    };
    ShareduserService.prototype.setlog = function (log) {
        this.loggedIn = log;
    };
    ShareduserService.prototype.getLog = function () {
        return this.loggedIn;
    };
    ShareduserService.prototype.checkUser = function () {
        if (localStorage.getItem('currentUser')) {
            var a = JSON.parse(localStorage.getItem('currentUser'));
            this.currentUser = a.username ? a.username : a.name;
            this.pwd = localStorage.getItem('password');
            this.remember = localStorage.getItem('remember');
            this.resp = { name: this.currentUser, pwd: this.pwd, remember: this.remember };
        }
    };
    ShareduserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShareduserService);
    return ShareduserService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getPasswordByUserName = function (username) {
        return this.http.get(this.config.apiUrl + '/users/GetUser?username=' + username, this.jwt()).map(function (response) {
            response.json();
            //console.log(response.json());
        });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.config.apiUrl + '/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.config.apiUrl + '/users/' + user._id, this.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
    };
    UserService.prototype.forgotPassword = function (email) {
        debugger;
        var body = {};
        var url = this.config.apiUrl + '/users/forgotPassword/' + email;
        return this.http.post(url, body);
    };
    UserService.prototype.resetPassword = function (pwd, rpwd, resetid, rtoken) {
        debugger;
        var body = ({ password: pwd, repassword: rpwd, id: resetid, token: rtoken });
        //var search = new URLSearchParams();
        //search.append('id', resetid);
        //search.append('password', pwd);
        //search.append('repassword', rpwd);
        //search.append('token', rtoken);
        return this.http.post(this.config.apiUrl + '/users/resetPassword', body)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.jwt = function () {
        //create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/social-login/social-login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/social-login/social-login.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-social-icon btn-google\" (click)=\"signInWithGoogle()\"><span class=\"fa fa-google\"></span></button>\r\n"

/***/ }),

/***/ "./src/app/social-login/social-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__ = __webpack_require__("./src/app/service/shareduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_authentication_service__ = __webpack_require__("./src/app/service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocialLoginComponent = /** @class */ (function () {
    function SocialLoginComponent(socialLogin, sharedUser, router, auth, http, config) {
        this.socialLogin = socialLogin;
        this.sharedUser = sharedUser;
        this.router = router;
        this.auth = auth;
        this.http = http;
        this.config = config;
    }
    SocialLoginComponent.prototype.signInWithGoogle = function () {
        this.socialLogin.signIn(__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["c" /* GoogleLoginProvider */].PROVIDER_ID);
        localStorage.setItem('loggedin', 'true');
        //console.log(localStorage.getItem('loggedIn'));
    };
    SocialLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = false;
        this.socialLogin.authState.subscribe(function (user) {
            _this.user = user;
            //console.log(user);
            _this.loggedIn = (user != null);
            //console.log(this.loggedIn);
            //console.log(this.sharedUser.getLog());
            if (localStorage.getItem('loggedin')) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.removeItem('password');
                _this.sharedUser.setlog(_this.loggedIn);
                _this.issueJwtToken();
                _this.router.navigate(['/home']);
                _this.auth.setlog(true);
            }
        });
    };
    //signOut(): void {
    //  this.socialLogin.signOut();
    //  this.sharedUser.setlog(false);
    //  this.loggedIn = false;
    //  localStorage.removeItem('loggedin');
    //  this.auth.setlog(false);
    //}
    SocialLoginComponent.prototype.issueJwtToken = function () {
        var currentuser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentuser && currentuser.id)
            var userId = currentuser.id;
        var param = new URLSearchParams();
        param.append('Id', userId);
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ params: param });
        var url = this.config.apiUrl + '/users/issueToken?UserId=' + userId;
        this.http.post(url, {})
            .map(function (res) {
            //login successful if there's a jwt token in the response
            var user = res.json();
            var jwtToken = user.token;
            currentuser.token = jwtToken;
            currentuser = JSON.stringify(currentuser);
            localStorage.setItem('currentUser', currentuser);
        })
            .subscribe(function (x) { }
        //console.log(x)
        );
    };
    SocialLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'social-login',
            template: __webpack_require__("./src/app/social-login/social-login.component.html"),
            styles: [__webpack_require__("./src/app/social-login/social-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__service_shareduser_service__["a" /* ShareduserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__service_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]])
    ], SocialLoginComponent);
    return SocialLoginComponent;
}());



/***/ }),

/***/ "./src/app/test/tictactoe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/tictactoe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n      <div  align=\"center\">\r\n        <div style=\"height: 80px;\"></div>\r\n          <div *ngIf=\"won\"  [@flyInOut]=\"won\">\r\n          <img class=\"object\"  src=\"../../assets/images/balloon_PNG580.png\" height=\"300px\" width=\"300px\"/>\r\n          </div>\r\n        </div>\r\n  </div>\r\n<div class=\"col-sm-4\">\r\n    <h3 style=\"margin-top: 50px\" align=\"center\">Play a game of Tic-Tac-Toe!!</h3><br/><br/>\r\n    <div *ngIf=won style=\"color:Green\" align=\"center\"><b style=\"font-size: 30px\">You Won!</b></div>\r\n    <div *ngIf=\"!won && message\" style=\"color:Red\"  align=\"center\" [@flyInOut]=\"msg\"><b style=\"font-size: 30px\">{{message}}</b></div>\r\n\r\n    <div class=\"disp\" >  \r\n      <table class=\"dispbtn\" align=\"center\" >\r\n        <tr>\r\n          <td><button class=\"dispbtn\" (click)=\"check(1,sign)\" [class.dispcol]=\"btn1?true:false\" [disabled]=\"btn1\"><b>{{btn1}}</b></button></td>\r\n          <td><button class=\"dispbtn\" (click)=\"check(2,sign)\" [class.dispcol]=\"btn2?true:false\" [disabled]=\"btn2\"><b>{{btn2}}</b></button></td>\r\n          <td><button class=\"dispbtn\" (click)=\"check(3,sign)\"[class.dispcol]=\"btn3?true:false\" [disabled]=\"btn3\"><b>{{btn3}}</b></button></td>\r\n        </tr>\r\n        <tr>  \r\n          <td><button class=\"dispbtn\" (click)=\"check(4,sign)\" [class.dispcol]=\"btn4?true:false\" [disabled]=\"btn4\"><b>{{btn4}}</b></button></td>\r\n            <td><button class=\"dispbtn\" (click)=\"check(5,sign)\" [class.dispcol]=\"btn5?true:false\" [disabled]=\"btn5\"><b>{{btn5}}</b></button></td>\r\n              <td><button class=\"dispbtn\" (click)=\"check(6,sign)\" [class.dispcol]=\"btn6?true:false\" [disabled]=\"btn6\"><b>{{btn6}}</b></button></td>\r\n            </tr>\r\n            <tr>\r\n              <td><button class=\"dispbtn\" (click)=\"check(7,sign)\" [class.dispcol]=\"btn7?true:false\" [disabled]=\"btn7\"><b>{{btn7}}</b></button></td>\r\n              <td><button class=\"dispbtn\" (click)=\"check(8,sign)\" [class.dispcol]=\"btn8?true:false\"  [disabled]=\"btn8\"><b>{{btn8}}</b></button></td>\r\n              <td><button class=\"dispbtn\" (click)=\"check(9,sign)\" [class.dispcol]=\"btn9?true:false\" [disabled]=\"btn9\"><b>{{btn9}}</b></button></td>\r\n            </tr>\r\n      </table>\r\n    </div>\r\n   \r\n    <button class=\"btn btn-primary\" style=\"margin: auto;display:block\" (click)=\"refreshpage()\" *ngIf=\"won || message\">Play Again</button>\r\n</div>\r\n<div class=\"col-sm-4\" >\r\n    <div align=\"center\">\r\n        <div style=\"height: 80px;\"></div>\r\n      <div *ngIf=\"won\" [@flyInOut]=\"won\">\r\n      <img class=\"object\"  src=\"../../assets/images/balloon_PNG580.png\" height=\"300px\" width=\"300px\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<audio #audioOption >\r\n  <source src=\"../../assets/sampleAudio.mp3\" type=\"audio/mp3\">\r\n</audio>\r\n\r\n<style>\r\n  .dispbtn{\r\n    width:100px;\r\n    height:100px;\r\n    background-color:lightsteelblue;\r\n  }\r\n  .dispcol{\r\n    background-color:rgb(167, 179, 190);\r\n  }\r\n  \r\n</style>"

/***/ }),

/***/ "./src/app/test/tictactoe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicTacToeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_alert_service__ = __webpack_require__("./src/app/service/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_authentication_service__ = __webpack_require__("./src/app/service/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicTacToeComponent = /** @class */ (function () {
    //  resArr:Array<string>=["123","147","159","258","369","789",
    //                       "321","741","951","852","963","987",
    //                       "132","174","195","285","396","798",
    //                       "312","714","915","528","396","978"
    //                     ]
    function TicTacToeComponent(_alertService, router, auth) {
        this._alertService = _alertService;
        this.router = router;
        this.auth = auth;
        this.sign = false;
        this.won = false;
        this.disp = '';
        this.resultA = '';
        this.resultB = '';
        this.message = '';
        this.counter = 0;
    }
    TicTacToeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('loggedin'))
            this.logged = true;
        else
            this.logged = false;
        this.auth.setlog(this.logged);
    };
    TicTacToeComponent.prototype.check = function (val, sign) {
        if (sign == true) {
            this.disp = "O";
            this.resultA = this.resultA + val;
        }
        else {
            this.disp = "+";
            this.resultB = this.resultB + val;
        }
        switch (val.toString()) {
            case "1":
                this.btn1 = this.disp;
                break;
            case "2":
                this.btn2 = this.disp;
                break;
            case "3":
                this.btn3 = this.disp;
                break;
            case "4":
                this.btn4 = this.disp;
                break;
            case "5":
                this.btn5 = this.disp;
                break;
            case "6":
                this.btn6 = this.disp;
                break;
            case "7":
                this.btn7 = this.disp;
                break;
            case "8":
                this.btn8 = this.disp;
                break;
            case "9":
                this.btn9 = this.disp;
                break;
            default:
                break;
        }
        this.sign = !this.sign;
        this.counter++;
        if (this.counter >= 9) {
            this.message = "Game over";
            //this._alertService.error("Game over!", false);
        }
        if (this.counter >= 5) {
            if (this.btn1 == this.btn2 && this.btn2 == this.btn3 && this.btn1 != undefined && this.btn2 != undefined && this.btn3 != undefined ||
                this.btn1 == this.btn4 && this.btn1 == this.btn7 && this.btn1 != undefined && this.btn4 != undefined && this.btn7 != undefined ||
                this.btn1 == this.btn5 && this.btn1 == this.btn9 && this.btn1 != undefined && this.btn5 != undefined && this.btn9 != undefined ||
                this.btn2 == this.btn5 && this.btn2 == this.btn8 && this.btn2 != undefined && this.btn5 != undefined && this.btn8 != undefined ||
                this.btn3 == this.btn6 && this.btn3 == this.btn9 && this.btn3 != undefined && this.btn6 != undefined && this.btn9 != undefined ||
                this.btn7 == this.btn8 && this.btn7 == this.btn9 && this.btn7 != undefined && this.btn8 != undefined && this.btn9 != undefined ||
                this.btn7 == this.btn5 && this.btn3 == this.btn7 && this.btn7 != undefined && this.btn3 != undefined && this.btn5 != undefined ||
                this.btn4 == this.btn5 && this.btn4 == this.btn6 && this.btn4 != undefined && this.btn5 != undefined && this.btn6 != undefined) {
                this.message = "You won!";
                this.won = true;
                //this._alertService.success("You Won!", true);
                this.AudioPlay();
            }
        }
        // if(){
        //   this.message="You win";
        // }
    };
    TicTacToeComponent.prototype.AudioPlay = function () {
        this.audioPlayerRef.nativeElement.play();
    };
    TicTacToeComponent.prototype.refreshpage = function () {
        window.location.href = window.location.href;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('audioOption'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TicTacToeComponent.prototype, "audioPlayerRef", void 0);
    TicTacToeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/test/tictactoe.component.html"),
            styles: [__webpack_require__("./src/app/test/tictactoe.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('flyInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translate(0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                            transform: 'translate(0,500px)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(300)
                        // ]),
                        // transition(':leave', [
                        //   animate(300, style({
                        //     transform: 'translate(0,500px)'
                        //   }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('msg', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('600ms ease-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1000ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__service_authentication_service__["a" /* AuthenticationService */]])
    ], TicTacToeComponent);
    return TicTacToeComponent;
}());



/***/ }),

/***/ "./src/app/youtube-search/search-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_search_service__ = __webpack_require__("./src/app/youtube-search/youtube-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        //convert the keyup event into an observable stream
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(this.el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) //extract the value of the input
            .filter(function (text) { return text.length > 1; }) //filter out if empty
            .debounceTime(400) //only once every 250ms
            .do(function () { return _this.loading.emit(true); })
            .map(function (query) { return _this.query = query; })
            .subscribe(function (query) {
            _this.loading.emit(false);
            _this.results.emit(_this.query);
        });
        //enable loading
        //search, discarding old events if new input comes in
        //.map((query:string)=>this.youtube.search(query)) 
        //.switch()      
        ////act on the return of the search
        //.subscribe(
        //  (results: SearchResult[] )=>{
        //    this.loading.emit(false);
        //   this.results.emit(results); 
        //  },
        //  (err:any)=>{
        //    console.log(err);
        //    this.loading.emit(false);
        //  },
        //  ()=>{
        //    this.loading.emit(false);
        //  }
        //);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SearchBoxComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SearchBoxComponent.prototype, "results", void 0);
    SearchBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-box',
            template: "\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__youtube_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/youtube-search/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"caption\">\r\n        <h3>{{result.title}}</h3>\r\n        <iframe width=\"100%\" height=\"500\" [src]=\"result.id | youtube\" frameborder=\"0\" allowfullscreen></iframe>\r\n        <p>{{result.description}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/youtube-search/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchresult__ = __webpack_require__("./src/app/youtube-search/searchresult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__searchresult__["a" /* SearchResult */])
    ], SearchResultComponent.prototype, "result", void 0);
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-result',
            template: __webpack_require__("./src/app/youtube-search/search-result/search-result.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/youtube-search/searchresult.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
var SearchResult = /** @class */ (function () {
    function SearchResult(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl ||
            "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
}());



/***/ }),

/***/ "./src/app/youtube-search/youtube-search.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js\"></script>\r\n<div class=\"container disp \">\r\n  <div>\r\n    <p> Search your favourites from youtube.\r\n    <!-- <img style=\"float: right;\" *ngIf=\"loading\" src='assets/images/loading.gif' alt=\"loading\"/> -->\r\n  </p>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <search-box \r\n       (results)=\"updateResults($event)\">|</search-box>\r\n      <!--<input type=\"text\" class=\"form-control\" (change)=\"updateResults($event.target.value)\"/>-->\r\n       <br/><br/>\r\n    </div>\r\n    </div>\r\n  <div class=\"row\" *ngIf=\"loading\" >\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead>\r\n      <tr class=\"col-sm-12\">\r\n        <th class=\"col-sm-4 col-offset-sm-8\">Title</th>\r\n        <!--<th  class=\"col-sm-8 \">Video</th>-->\r\n      </tr>\r\n    </thead>\r\n    <tbody >\r\n        <tr *ngFor=\"let result of results\" class=\"col-sm-12\">\r\n          <td class=\"col-sm-4 col-offset-sm-8\">\r\n            <h3>{{result.title}}</h3><br />\r\n            <iframe [src]=\"result.id | youtube\" width=\"100%\" height=\"400px\" frameborder=\"0\" allowfullscreen></iframe>\r\n          </td>\r\n          <!--<td class=\"col-sm-8\"><iframe [src]=\"result.id | youtube\" frameborder=\"0\" allowfullscreen></iframe></td>-->\r\n          </tr>\r\n  </tbody>\r\n  </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/youtube-search/youtube-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YouTubeSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_search_service__ = __webpack_require__("./src/app/youtube-search/youtube-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YouTubeSearchComponent = /** @class */ (function () {
    function YouTubeSearchComponent(youtube) {
        this.youtube = youtube;
        this.loading = false;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    YouTubeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 4,
        };
        this.youtube.search("welcome")
            .subscribe(function (data) {
            _this.results = data;
            _this.dtTrigger.next();
        });
    };
    YouTubeSearchComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    YouTubeSearchComponent.prototype.updateResults = function (results) {
        this.getResult(results);
        this.rerender();
    };
    YouTubeSearchComponent.prototype.getResult = function (results) {
        var _this = this;
        this.youtube.search(results)
            .subscribe(function (data) {
            _this.results = data;
            _this.dtTrigger.next();
            _this.loading = true;
        }, function (err) {
            console.log(err);
        });
    };
    YouTubeSearchComponent.prototype.rerender = function () {
        if (this.dtElement != undefined) {
            this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTrigger.next();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */])
    ], YouTubeSearchComponent.prototype, "dtElement", void 0);
    YouTubeSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'youtube-search',
            template: __webpack_require__("./src/app/youtube-search/youtube-search.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__youtube_search_service__["a" /* SearchService */]])
    ], YouTubeSearchComponent);
    return YouTubeSearchComponent;
}());



/***/ }),

/***/ "./src/app/youtube-search/youtube-search.injectables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return youTubeSearchInjectables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__ = __webpack_require__("./src/app/youtube-search/youtube-search.service.ts");

var youTubeSearchInjectables = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__["a" /* SearchService */], useClass: __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__["a" /* SearchService */] },
    { provide: __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__["b" /* YOUTUBE_API_KEY */], useValue: __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__["b" /* YOUTUBE_API_KEY */] },
    { provide: __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__["c" /* YOUTUBE_API_URL */], useValue: __WEBPACK_IMPORTED_MODULE_0__youtube_search_service__["c" /* YOUTUBE_API_URL */] }
];


/***/ }),

/***/ "./src/app/youtube-search/youtube-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YOUTUBE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return YOUTUBE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_search_searchresult__ = __webpack_require__("./src/app/youtube-search/searchresult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//export const YOUTUBE_API_KEY:string="AIzaSyDgpnnMW2pFK1ZNS0pUUDUP6zDbJbveCzQ";
var YOUTUBE_API_KEY = "AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk";
var YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";
var SearchService = /** @class */ (function () {
    function SearchService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    SearchService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + this.apiKey,
            "part=snippet",
            "type=video",
            "maxResults=50"
        ].join('&');
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl)
            .map(function (response) {
            return response.json().items.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_2__youtube_search_searchresult__["a" /* SearchResult */]({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(YOUTUBE_API_KEY)),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(YOUTUBE_API_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, String])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/youtube.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePipe = /** @class */ (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value, args) {
        var safeUrl = "https://www.youtube.com/embed/" + value;
        return this.dom.bypassSecurityTrustResourceUrl(safeUrl);
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'youtube'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubePipe);
    return YoutubePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map