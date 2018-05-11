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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creation_compte_creation_compte_component__ = __webpack_require__("./src/app/creation-compte/creation-compte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_room_chat_room_component__ = __webpack_require__("./src/app/chat-room/chat-room.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__creation_compte_creation_compte_component__["a" /* CreationCompteComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'chat-room', component: __WEBPACK_IMPORTED_MODULE_4__chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-creation-compte></app-creation-compte>-->\r\n\r\n<router-outlet></router-outlet>\r\n<!--<app-login></app-login>-->\r\n\r\n<!--<app-chat-room></app-chat-room>-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ceci est un test';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__creation_compte_creation_compte_component__ = __webpack_require__("./src/app/creation-compte/creation-compte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_room_chat_room_component__ = __webpack_require__("./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__liste_utilisateurs_liste_utilisateurs_component__ = __webpack_require__("./src/app/liste-utilisateurs/liste-utilisateurs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilisateurs_utilisateurs_component__ = __webpack_require__("./src/app/utilisateurs/utilisateurs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feed_feed_component__ = __webpack_require__("./src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__saisie_message_saisie_message_component__ = __webpack_require__("./src/app/saisie-message/saisie-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__spinner_spinner_component__ = __webpack_require__("./src/app/spinner/spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__creation_compte_creation_compte_component__["a" /* CreationCompteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chat_room_chat_room_component__["a" /* ChatRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_11__liste_utilisateurs_liste_utilisateurs_component__["a" /* ListeUtilisateursComponent */],
                __WEBPACK_IMPORTED_MODULE_12__utilisateurs_utilisateurs_component__["a" /* UtilisateursComponent */],
                __WEBPACK_IMPORTED_MODULE_13__feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__saisie_message_saisie_message_component__["a" /* SaisieMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-room/chat-room.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100vh;\r\n\r\n  background-image: url('ff15-bg-2.7626115fde8742b89542.jpg');\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100% auto;\r\n}\r\n\r\n.user-list-container {\r\n  background-color: #2f3136;\r\n  color: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-size: 1.2em;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-ordinal-group: 2;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n  padding:20px 0px 40px 30px;\r\n  border-right: 1px solid #222;\r\n}\r\n\r\n.feed-container {\r\n  /*background-color: #fff;*/\r\n  /*background:*/\r\n    /*linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9)),*/\r\n    /*url('../../assets/img/chat-bg-1.png') center center no-repeat;;*/\r\n\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-size: 1.2em;\r\n  -webkit-box-flex: 5;\r\n      -ms-flex: 5;\r\n          flex: 5;\r\n  -webkit-box-ordinal-group: 3;\r\n      -ms-flex-order: 2;\r\n          order: 2;\r\n  overflow-y: scroll;\r\n  padding:20px 0px 0px 24px;\r\n  /*width: 100%;*/\r\n}\r\n\r\n.saisie-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 50px;\r\n  background-color: #eee;\r\n  z-index: 3;\r\n}\r\n\r\n#scroll-style::-webkit-scrollbar-track\r\n{\r\n  border-radius: 10px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\napp-liste-utilisateurs {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"user-list-container\">\n    <app-liste-utilisateurs></app-liste-utilisateurs>\n  </div>\n  <div #scroller class=\"feed-container\">\n    <app-feed></app-feed>\n  </div>\n</div>\n\n<div class=\"saisie-container\">\n  <app-saisie-message></app-saisie-message>\n</div>\n"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
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

var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent() {
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
    };
    ChatRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-room',
            template: __webpack_require__("./src/app/chat-room/chat-room.component.html"),
            styles: [__webpack_require__("./src/app/chat-room/chat-room.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/creation-compte/creation-compte.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n  -webkit-box-align: center;\r\n  -webkit-box-pack: center;\r\n\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  z-index: 1;\r\n\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n\r\n  width: 650px;\r\n  height: 550px;\r\n}\r\n\r\n.main-container-center{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: row;\r\n      flex-direction: row;\r\n  overflow: hidden;\r\n\r\n  -webkit-box-direction: normal;\r\n  -webkit-box-orient: horizontal;\r\n\r\n  /*width: 450px;\r\n  margin: 100px auto;\r\n  padding: 10px;*/\r\n\r\n  border-radius: 20px;\r\n  -webkit-box-shadow: 3px 3px 3px #555;\r\n          box-shadow: 3px 3px 3px #555;\r\n}\r\n\r\n/* =========== LOGO (PARTIE GAUCHE) =========== */\r\n\r\n.left-container {\r\n  background-color: white;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  text-align: center;\r\n\r\n  -webkit-box-align: center;\r\n  -webkit-box-pack: center;\r\n  padding: 50px;\r\n}\r\n\r\n.left-container .main-container-left {\r\n\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-weight: inherit;\r\n  font-size: 100%;\r\n\r\n  border: 0;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\n.left-container .main-container-left .logo{\r\n\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 17.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 168 190%22 enable-background%3D%22new 0 0 168 190%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Crect x%3D%2214.4%22 y%3D%2246.1%22 fill%3D%22%23FFFFFF%22 width%3D%22139.2%22 height%3D%2297.7%22%2F%3E%0D%09%3Cg%3E%0D%09%09%3ClinearGradient id%3D%22SVGID_1_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2266.6616%22 y1%3D%2279.7119%22 x2%3D%2266.6616%22 y2%3D%22100.7434%22%3E%0D%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%237491D5%22%2F%3E%0D%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%234E68A0%22%2F%3E%0D%09%09%3C%2FlinearGradient%3E%0D%09%09%3Cpath fill%3D%22url(%23SVGID_1_)%22 d%3D%22M66.7%2C79.7c-5.4%2C0-9.8%2C4.7-9.8%2C10.5c0%2C5.8%2C4.4%2C10.5%2C9.8%2C10.5c5.4%2C0%2C9.8-4.7%2C9.8-10.5%0D%09%09%09C76.5%2C84.4%2C72.1%2C79.7%2C66.7%2C79.7z%22%2F%3E%0D%09%09%3ClinearGradient id%3D%22SVGID_2_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%22101.661%22 y1%3D%2279.7119%22 x2%3D%22101.661%22 y2%3D%22100.7434%22%3E%0D%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%237491D5%22%2F%3E%0D%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%234E68A0%22%2F%3E%0D%09%09%3C%2FlinearGradient%3E%0D%09%09%3Cpath fill%3D%22url(%23SVGID_2_)%22 d%3D%22M101.7%2C79.7c-5.4%2C0-9.8%2C4.7-9.8%2C10.5c0%2C5.8%2C4.4%2C10.5%2C9.8%2C10.5c5.4%2C0%2C9.8-4.7%2C9.8-10.5%0D%09%09%09C111.5%2C84.4%2C107.1%2C79.7%2C101.7%2C79.7z%22%2F%3E%0D%09%09%3ClinearGradient id%3D%22SVGID_3_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2284%22 y1%3D%22-4.545736e-07%22 x2%3D%2284%22 y2%3D%22190%22%3E%0D%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%237491D5%22%2F%3E%0D%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%234E68A0%22%2F%3E%0D%09%09%3C%2FlinearGradient%3E%0D%09%09%3Cpath fill%3D%22url(%23SVGID_3_)%22 d%3D%22M148.4%2C0H19.6C8.8%2C0%2C0%2C8.8%2C0%2C19.6v128.4c0%2C10.8%2C8.8%2C19.6%2C19.6%2C19.6h108.9l-5.1-17.5l12.3%2C11.3%0D%09%09%09l11.6%2C10.7L168%2C190v-41.9v-9.5V19.6C168%2C8.8%2C159.2%2C0%2C148.4%2C0z M111.3%2C124.1c0%2C0-3.4-4.1-6.3-7.7c12.6-3.5%2C17.4-11.3%2C17.4-11.3%0D%09%09%09c-4%2C2.6-7.7%2C4.4-11.1%2C5.6c-4.8%2C2-9.5%2C3.3-14%2C4.1c-9.2%2C1.7-17.6%2C1.3-24.9-0.1c-5.5-1-10.2-2.5-14.1-4.1c-2.2-0.8-4.6-1.9-7.1-3.3%0D%09%09%09c-0.3-0.2-0.6-0.3-0.9-0.5c-0.1-0.1-0.3-0.2-0.4-0.2c-1.7-1-2.6-1.6-2.6-1.6s4.6%2C7.6%2C16.8%2C11.2c-2.9%2C3.6-6.4%2C7.9-6.4%2C7.9%0D%09%09%09c-21.2-0.6-29.3-14.5-29.3-14.5c0-30.6%2C13.8-55.4%2C13.8-55.4c13.8-10.3%2C26.9-10%2C26.9-10l1%2C1.1C52.8%2C50.3%2C45%2C57.9%2C45%2C57.9%0D%09%09%09s2.1-1.2%2C5.7-2.7c10.3-4.5%2C18.4-5.7%2C21.8-6c0.5-0.1%2C1.1-0.2%2C1.6-0.2c5.9-0.7%2C12.5-0.9%2C19.4-0.2c9.1%2C1%2C18.9%2C3.7%2C28.9%2C9.1%0D%09%09%09c0%2C0-7.5-7.2-23.9-12.1l1.3-1.5c0%2C0%2C13.1-0.3%2C26.9%2C10c0%2C0%2C13.8%2C24.8%2C13.8%2C55.4C140.6%2C109.6%2C132.5%2C123.5%2C111.3%2C124.1z%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n  background-size: 150px 150px;\r\n  height: 150px;\r\n  width: 150px;\r\n\r\n}\r\n\r\n.left-container .main-container-left .name-discord{\r\n\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 17.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 492 91.3%22 enable-background%3D%22new 0 0 492 91.3%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath fill%3D%22%23738BD7%22 d%3D%22M33.2%2C1.3H0v37.3l22.1%2C19.9V22.2H34c7.5%2C0%2C11.2%2C3.6%2C11.2%2C9.4v27.7c0%2C5.8-3.5%2C9.7-11.2%2C9.7H0V90h33.2%0D%09c17.8%2C0.1%2C34.5-8.8%2C34.5-29.2V31C67.7%2C10.3%2C51%2C1.3%2C33.2%2C1.3z M207.3%2C60.9V30.3c0-11%2C19.8-13.5%2C25.8-2.5l18.3-7.4%0D%09C244.3%2C4.6%2C231.1%2C0%2C220.2%2C0c-17.8%2C0-35.4%2C10.3-35.4%2C30.3v30.6c0%2C20.2%2C17.6%2C30.3%2C35%2C30.3c11.2%2C0%2C24.6-5.5%2C32-19.9l-19.6-9%0D%09C227.4%2C74.6%2C207.3%2C71.6%2C207.3%2C60.9z M146.7%2C34.5c-6.9-1.5-11.5-4-11.8-8.3c0.4-10.3%2C16.3-10.7%2C25.6-0.8l14.7-11.3%0D%09C166%2C3%2C155.6%2C0%2C144.8%2C0c-16.3%2C0-32.1%2C9.2-32.1%2C26.6c0%2C16.9%2C13%2C26%2C27.3%2C28.2c7.3%2C1%2C15.4%2C3.9%2C15.2%2C8.9c-0.6%2C9.5-20.2%2C9-29.1-1.8%0D%09L112%2C75.2c8.3%2C10.7%2C19.6%2C16.1%2C30.2%2C16.1c16.3%2C0%2C34.4-9.4%2C35.1-26.6C178.3%2C42.9%2C162.5%2C37.4%2C146.7%2C34.5z M79.8%2C90h22.4V1.3H79.8V90z%0D%09 M457.5%2C1.3h-33.2v37.3l22.1%2C19.9V22.2h11.8c7.5%2C0%2C11.2%2C3.6%2C11.2%2C9.4v27.7c0%2C5.8-3.5%2C9.7-11.2%2C9.7h-34V90h33.2%0D%09c17.8%2C0.1%2C34.5-8.8%2C34.5-29.2V31C492%2C10.3%2C475.3%2C1.3%2C457.5%2C1.3z M294.6%2C0c-18.4%2C0-36.7%2C10-36.7%2C30.5v30.3%0D%09c0%2C20.3%2C18.4%2C30.5%2C36.9%2C30.5s36.7-10.2%2C36.7-30.5V30.5C331.4%2C10.2%2C313%2C0%2C294.6%2C0z M309%2C60.8c0%2C6.4-7.2%2C9.7-14.3%2C9.7%0D%09c-7.2%2C0-14.4-3.1-14.4-9.7V30.5c0-6.5%2C7-10%2C14-10c7.3%2C0%2C14.7%2C3.1%2C14.7%2C10V60.8z M411.8%2C30.5c-0.5-20.8-14.7-29.2-33-29.2h-35.5V90%0D%09H366V61.8h4L390.6%2C90h28l-24.2-30.5C405.2%2C56.2%2C411.8%2C46.9%2C411.8%2C30.5z M379.2%2C42.5H366V22.2h13.2C393.4%2C22.2%2C393.4%2C42.5%2C379.2%2C42.5%0D%09z%22%2F%3E%0D%3C%2Fsvg%3E%0D\");\r\n  background-repeat: no-repeat;\r\n  height: 25px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n\r\n}\r\n\r\n/* =========== FORMULAIRE (PARTIE DROITE) ===========*/\r\n\r\n.right-container {\r\n\r\n  position: relative;\r\n\r\n  background-color: rgba(30,30,35,0.8);\r\n  border-radius: 0;\r\n\r\n  padding: 30px;\r\n  width: 400px;\r\n\r\n}\r\n\r\n.right-container .title {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  margin: 0 0 20px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.right-container #form-login {\r\n\r\n  width: 96%;\r\n  margin: 3em auto;\r\n  padding: 3em 2em 2em 2em;\r\n  background: #fafafa;\r\n  border: 1px solid #ebebeb;\r\n  -webkit-box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\r\n          box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\r\n  /*display:block;*/\r\n}\r\n\r\n.right-container #form-login .group {\r\n  position: relative;\r\n  margin-bottom: 45px;\r\n\r\n}\r\n\r\n.right-container #form-login input {\r\n  /*-webkit-appearance: none;*/\r\n  font-size: 18px;\r\n  padding: 10px 10px 10px 5px;\r\n  display: block;\r\n  background: #fafafa;\r\n  color: #636363;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid #757575;\r\n}\r\n\r\n.right-container #form-login input:focus {\r\n  outline: none; /* pour enlever le carré autour */\r\n}\r\n\r\nlabel {\r\n  color: #999;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  text-transform: uppercase;\r\n  position: absolute;\r\n  pointer-events: none; /* rend le label inatic */\r\n  left: 5px;\r\n  top: 10px;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n  -moz-transition:0.2s ease all;\r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* animation qui fait monter le texte lorsque l'input est active */\r\n\r\ninput:focus ~ label, input:valid ~ label {\r\n  top: -20px;\r\n  /*transform: scale(.75); left: -2px;*/\r\n  font-size:14px;\r\n  color: #4a89dc;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.bar:before, .bar:after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #4a89dc;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n  /*-moz-transition:0.2s ease all;*/\r\n  /*-webkit-transition:0.2s ease all;*/\r\n}\r\n\r\n/* Effet bar */\r\n\r\n.bar:before {\r\n  left: 50%;\r\n}\r\n\r\n/* Effet bar */\r\n\r\n.bar:after {\r\n  right: 50%;\r\n}\r\n\r\n/* Animation bar quand input focus */\r\n\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n\r\n.highlight {\r\n  position: absolute;\r\n  height: 60%;\r\n  width: 100px;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n/* grossissement bar quand input est focus */\r\n\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* === ANIMATIONS === */\r\n\r\n@-webkit-keyframes inputHighlighter {\r\n  from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n  from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n\r\n/*=== BOUTON ===*/\r\n\r\n.button {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 12px 24px;\r\n  margin: .3em 0 1em 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  -webkit-transition: all 0.15s ease;\r\n  transition: all 0.15s ease;\r\n}\r\n\r\n.button:focus {\r\n  outline: none;\r\n}\r\n\r\n.buttonPurple {\r\n  background: #7289da;\r\n  text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);\r\n}\r\n\r\n.buttonPurple:hover {\r\n  background: #697ec4;\r\n}\r\n\r\n.footer {\r\n  color: #87909c;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n  margin-bottom: 0;\r\n  margin-top: -10px;\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\n.footer a {\r\n\r\n  text-decoration: none;\r\n  color: white;\r\n  -webkit-transition: opacity .5s, color .5s;\r\n  transition: opacity .5s, color .5s;\r\n  cursor: pointer;\r\n  font-weight: bolder;\r\n  /*border: solid 3px purple;*/\r\n  width: 50px;\r\n  margin: auto;\r\n}\r\n\r\n.footer a:hover {\r\n  color: #fafafa;\r\n  text-decoration: underline;\r\n  /*border-bottom: white 3px solid;*/\r\n  /*padding-bottom: 3px;*/\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/creation-compte/creation-compte.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"main-container-center\">\n\n    <div class=\"left-container\">\n      <div class=\"main-container-left\">\n        <div class=\"logo\"></div>\n        <div class=\"name-discord\"></div>\n      </div>\n    </div>\n    <form class=\"right-container\">\n\n      <h1 class=\"title\">Créer un compte</h1>\n\n      <form id=\"form-login\" #contactForm=\"ngForm\">\n\n        <div class=\"group\">\n          <input type=\"text\" [(ngModel)]=\"usernames.email\" name=\"email\" required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label>email</label>\n        </div>\n        <div class=\"group\">\n          <input type=\"text\" [(ngModel)]=\"usernames.username\" name =\"username\" required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label>nom d'utilisateur</label>\n        </div>\n        <div class=\"group\">\n          <input type=\"password\" [(ngModel)]=\"usernames.password\" name=\"password\" required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label>mot de passe</label>\n        </div>\n        <button (click)=\"saveUser()\" type=\"button\" class=\"button buttonPurple\">Continuer\n          <div class=\"ripples buttonRipples\">\n            <span class=\"ripplesCircle\"></span>\n          </div>\n        </button>\n      </form>\n\n      <!--<app-spinner *ngIf=\"showSpinner\"></app-spinner>-->\n\n      <!-- FOOTER-->\n      <div class=\"footer\">\n        <p>Vous avez déjà un compte ?&nbsp; <a [routerLink]=\"['/login']\">Login</a></p>\n      </div>\n    </form>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/creation-compte/creation-compte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreationCompteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreationCompteComponent = /** @class */ (function () {
    function CreationCompteComponent(http, router) {
        this.http = http;
        this.router = router;
        this.usernames = {};
        this.showSpinner = true;
    }
    CreationCompteComponent.prototype.ngOnInit = function () {
    };
    CreationCompteComponent.prototype.saveUser = function () {
        var _this = this;
        this.http.post('/users', this.usernames)
            .subscribe(function (res) {
            _this.router.navigate(['/chat-room', res]);
            // this.usernames = res;
            // if (this.usernames.username == null) {
            // } else {
            //   alert('cette utilisateur existe deja!');
            //   this.router.navigate(['/signup']);
            // }
        }, function (err) {
            console.log(err);
        });
    };
    CreationCompteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-creation-compte',
            template: __webpack_require__("./src/app/creation-compte/creation-compte.component.html"),
            styles: [__webpack_require__("./src/app/creation-compte/creation-compte.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CreationCompteComponent);
    return CreationCompteComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ".feed-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  /*background-color: #c4c4c4;*/\r\n}\r\n\r\n.chat-container{\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 10px 0;\r\n}\r\n\r\n.message-container{\r\n  border: solid 1px red;\r\n\r\n\r\n  display: -webkit-box;\r\n\r\n\r\n  display: -ms-flexbox;\r\n\r\n\r\n  display: flex;\r\n  height: auto;\r\n  width: 70%;\r\n  min-width: 400px;\r\n  border-radius: 5px;\r\n  -webkit-box-align:stretch;\r\n      -ms-flex-align:stretch;\r\n          align-items:stretch;\r\n  background-color: #eee;\r\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n          box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.message-contenu{\r\n  height: auto;\r\n  -webkit-box-flex: 9;\r\n      -ms-flex: 9;\r\n          flex: 9;\r\n  background-color: #fff;\r\n  padding: 10px;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-container\">\n  <!--<app-messages [chatMessage]=unMessage></app-messages>-->\n  <div class=\"chat-container\">\n    <div class=\"message-container\">\n      <div class=\"message-contenu\"></div>\n    </div>\n  </div>\n</div>\n\n<!--<div class=\"chat\">-->\n<!--<div class=\"message\"></div>-->\n<!--</div>-->\n<!---->\n<!--<div class=\"footer\">-->\n<!--<input-->\n<!--class=\"chatInput\"-->\n<!--[(ngModel)]=\"message\"-->\n<!--(keydown)=\"returnKey($event)\"-->\n<!--#input>-->\n<!--<button class=\"chatButton\" (click)=send()>Send</button>-->\n<!--</div>-->\n\n\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(chatS) {
        this.chatS = chatS;
    }
    // constructor(private chatS: ChatService) {
    // this.initializeWebSocketConnection();
    // }
    // initializeWebSocketConnection() {
    //   const ws = new SockJS('http://localhost:8080/connexion-websocket');
    //   this.stompClient = Stomp.over(ws);
    //   const that = this;
    //   this.stompClient.connect({}, function(frame) {
    //     that.stompClient.subscribe('/chat', (msgReceived) => {
    //       if (msgReceived.body) {
    //         // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
    //         // console.log(message.body);
    //         this.feed = msgReceived;
    //       }
    //     });
    //   });
    // }
    FeedComponent.prototype.ngOnInit = function () {
        this.chatS.getMsg();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.chatS.getMsg();
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed',
            template: __webpack_require__("./src/app/feed/feed.component.html"),
            styles: [__webpack_require__("./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/liste-utilisateurs/liste-utilisateurs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/liste-utilisateurs/liste-utilisateurs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\n  <app-utilisateurs>\n    <!-- *ngFor permet d'afficher tous les éléments (un utilisateur) de la liste (d'utilisateurs)-->\n    <!--[user]=unUtilisateur *ngFor=\"let unUtilisateur of lesUtilisateurs\">-->\n  </app-utilisateurs>\n</div>\n"

/***/ }),

/***/ "./src/app/liste-utilisateurs/liste-utilisateurs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeUtilisateursComponent; });
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

var ListeUtilisateursComponent = /** @class */ (function () {
    function ListeUtilisateursComponent() {
    }
    ListeUtilisateursComponent.prototype.ngOnInit = function () {
    };
    ListeUtilisateursComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-liste-utilisateurs',
            template: __webpack_require__("./src/app/liste-utilisateurs/liste-utilisateurs.component.html"),
            styles: [__webpack_require__("./src/app/liste-utilisateurs/liste-utilisateurs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListeUtilisateursComponent);
    return ListeUtilisateursComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n  -webkit-box-align: center;\r\n  -webkit-box-pack: center;\r\n\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  z-index: 1;\r\n\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n\r\n  width: 650px;\r\n  height: 550px;\r\n}\r\n\r\n.main-container-center{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: row;\r\n      flex-direction: row;\r\n  overflow: hidden;\r\n\r\n  -webkit-box-direction: normal;\r\n  -webkit-box-orient: horizontal;\r\n\r\n  /*width: 450px;\r\n  margin: 100px auto;\r\n  padding: 10px;*/\r\n\r\n  border-radius: 20px;\r\n  -webkit-box-shadow: 3px 3px 3px #555;\r\n          box-shadow: 3px 3px 3px #555;\r\n}\r\n\r\n/* =========== LOGO (PARTIE GAUCHE) =========== */\r\n\r\n.left-container {\r\n  background-color: white;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  text-align: center;\r\n\r\n  -webkit-box-align: center;\r\n  -webkit-box-pack: center;\r\n  padding: 50px;\r\n}\r\n\r\n.left-container .main-container-left {\r\n\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-weight: inherit;\r\n  font-size: 100%;\r\n\r\n  border: 0;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\n.left-container .main-container-left .logo{\r\n\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 17.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 168 190%22 enable-background%3D%22new 0 0 168 190%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Crect x%3D%2214.4%22 y%3D%2246.1%22 fill%3D%22%23FFFFFF%22 width%3D%22139.2%22 height%3D%2297.7%22%2F%3E%0D%09%3Cg%3E%0D%09%09%3ClinearGradient id%3D%22SVGID_1_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2266.6616%22 y1%3D%2279.7119%22 x2%3D%2266.6616%22 y2%3D%22100.7434%22%3E%0D%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%237491D5%22%2F%3E%0D%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%234E68A0%22%2F%3E%0D%09%09%3C%2FlinearGradient%3E%0D%09%09%3Cpath fill%3D%22url(%23SVGID_1_)%22 d%3D%22M66.7%2C79.7c-5.4%2C0-9.8%2C4.7-9.8%2C10.5c0%2C5.8%2C4.4%2C10.5%2C9.8%2C10.5c5.4%2C0%2C9.8-4.7%2C9.8-10.5%0D%09%09%09C76.5%2C84.4%2C72.1%2C79.7%2C66.7%2C79.7z%22%2F%3E%0D%09%09%3ClinearGradient id%3D%22SVGID_2_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%22101.661%22 y1%3D%2279.7119%22 x2%3D%22101.661%22 y2%3D%22100.7434%22%3E%0D%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%237491D5%22%2F%3E%0D%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%234E68A0%22%2F%3E%0D%09%09%3C%2FlinearGradient%3E%0D%09%09%3Cpath fill%3D%22url(%23SVGID_2_)%22 d%3D%22M101.7%2C79.7c-5.4%2C0-9.8%2C4.7-9.8%2C10.5c0%2C5.8%2C4.4%2C10.5%2C9.8%2C10.5c5.4%2C0%2C9.8-4.7%2C9.8-10.5%0D%09%09%09C111.5%2C84.4%2C107.1%2C79.7%2C101.7%2C79.7z%22%2F%3E%0D%09%09%3ClinearGradient id%3D%22SVGID_3_%22 gradientUnits%3D%22userSpaceOnUse%22 x1%3D%2284%22 y1%3D%22-4.545736e-07%22 x2%3D%2284%22 y2%3D%22190%22%3E%0D%09%09%09%3Cstop  offset%3D%220%22 style%3D%22stop-color%3A%237491D5%22%2F%3E%0D%09%09%09%3Cstop  offset%3D%221%22 style%3D%22stop-color%3A%234E68A0%22%2F%3E%0D%09%09%3C%2FlinearGradient%3E%0D%09%09%3Cpath fill%3D%22url(%23SVGID_3_)%22 d%3D%22M148.4%2C0H19.6C8.8%2C0%2C0%2C8.8%2C0%2C19.6v128.4c0%2C10.8%2C8.8%2C19.6%2C19.6%2C19.6h108.9l-5.1-17.5l12.3%2C11.3%0D%09%09%09l11.6%2C10.7L168%2C190v-41.9v-9.5V19.6C168%2C8.8%2C159.2%2C0%2C148.4%2C0z M111.3%2C124.1c0%2C0-3.4-4.1-6.3-7.7c12.6-3.5%2C17.4-11.3%2C17.4-11.3%0D%09%09%09c-4%2C2.6-7.7%2C4.4-11.1%2C5.6c-4.8%2C2-9.5%2C3.3-14%2C4.1c-9.2%2C1.7-17.6%2C1.3-24.9-0.1c-5.5-1-10.2-2.5-14.1-4.1c-2.2-0.8-4.6-1.9-7.1-3.3%0D%09%09%09c-0.3-0.2-0.6-0.3-0.9-0.5c-0.1-0.1-0.3-0.2-0.4-0.2c-1.7-1-2.6-1.6-2.6-1.6s4.6%2C7.6%2C16.8%2C11.2c-2.9%2C3.6-6.4%2C7.9-6.4%2C7.9%0D%09%09%09c-21.2-0.6-29.3-14.5-29.3-14.5c0-30.6%2C13.8-55.4%2C13.8-55.4c13.8-10.3%2C26.9-10%2C26.9-10l1%2C1.1C52.8%2C50.3%2C45%2C57.9%2C45%2C57.9%0D%09%09%09s2.1-1.2%2C5.7-2.7c10.3-4.5%2C18.4-5.7%2C21.8-6c0.5-0.1%2C1.1-0.2%2C1.6-0.2c5.9-0.7%2C12.5-0.9%2C19.4-0.2c9.1%2C1%2C18.9%2C3.7%2C28.9%2C9.1%0D%09%09%09c0%2C0-7.5-7.2-23.9-12.1l1.3-1.5c0%2C0%2C13.1-0.3%2C26.9%2C10c0%2C0%2C13.8%2C24.8%2C13.8%2C55.4C140.6%2C109.6%2C132.5%2C123.5%2C111.3%2C124.1z%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n  background-size: 150px 150px;\r\n  height: 150px;\r\n  width: 150px;\r\n\r\n}\r\n\r\n.left-container .main-container-left .name-discord{\r\n\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 17.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 492 91.3%22 enable-background%3D%22new 0 0 492 91.3%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath fill%3D%22%23738BD7%22 d%3D%22M33.2%2C1.3H0v37.3l22.1%2C19.9V22.2H34c7.5%2C0%2C11.2%2C3.6%2C11.2%2C9.4v27.7c0%2C5.8-3.5%2C9.7-11.2%2C9.7H0V90h33.2%0D%09c17.8%2C0.1%2C34.5-8.8%2C34.5-29.2V31C67.7%2C10.3%2C51%2C1.3%2C33.2%2C1.3z M207.3%2C60.9V30.3c0-11%2C19.8-13.5%2C25.8-2.5l18.3-7.4%0D%09C244.3%2C4.6%2C231.1%2C0%2C220.2%2C0c-17.8%2C0-35.4%2C10.3-35.4%2C30.3v30.6c0%2C20.2%2C17.6%2C30.3%2C35%2C30.3c11.2%2C0%2C24.6-5.5%2C32-19.9l-19.6-9%0D%09C227.4%2C74.6%2C207.3%2C71.6%2C207.3%2C60.9z M146.7%2C34.5c-6.9-1.5-11.5-4-11.8-8.3c0.4-10.3%2C16.3-10.7%2C25.6-0.8l14.7-11.3%0D%09C166%2C3%2C155.6%2C0%2C144.8%2C0c-16.3%2C0-32.1%2C9.2-32.1%2C26.6c0%2C16.9%2C13%2C26%2C27.3%2C28.2c7.3%2C1%2C15.4%2C3.9%2C15.2%2C8.9c-0.6%2C9.5-20.2%2C9-29.1-1.8%0D%09L112%2C75.2c8.3%2C10.7%2C19.6%2C16.1%2C30.2%2C16.1c16.3%2C0%2C34.4-9.4%2C35.1-26.6C178.3%2C42.9%2C162.5%2C37.4%2C146.7%2C34.5z M79.8%2C90h22.4V1.3H79.8V90z%0D%09 M457.5%2C1.3h-33.2v37.3l22.1%2C19.9V22.2h11.8c7.5%2C0%2C11.2%2C3.6%2C11.2%2C9.4v27.7c0%2C5.8-3.5%2C9.7-11.2%2C9.7h-34V90h33.2%0D%09c17.8%2C0.1%2C34.5-8.8%2C34.5-29.2V31C492%2C10.3%2C475.3%2C1.3%2C457.5%2C1.3z M294.6%2C0c-18.4%2C0-36.7%2C10-36.7%2C30.5v30.3%0D%09c0%2C20.3%2C18.4%2C30.5%2C36.9%2C30.5s36.7-10.2%2C36.7-30.5V30.5C331.4%2C10.2%2C313%2C0%2C294.6%2C0z M309%2C60.8c0%2C6.4-7.2%2C9.7-14.3%2C9.7%0D%09c-7.2%2C0-14.4-3.1-14.4-9.7V30.5c0-6.5%2C7-10%2C14-10c7.3%2C0%2C14.7%2C3.1%2C14.7%2C10V60.8z M411.8%2C30.5c-0.5-20.8-14.7-29.2-33-29.2h-35.5V90%0D%09H366V61.8h4L390.6%2C90h28l-24.2-30.5C405.2%2C56.2%2C411.8%2C46.9%2C411.8%2C30.5z M379.2%2C42.5H366V22.2h13.2C393.4%2C22.2%2C393.4%2C42.5%2C379.2%2C42.5%0D%09z%22%2F%3E%0D%3C%2Fsvg%3E%0D\");\r\n  background-repeat: no-repeat;\r\n  height: 25px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n\r\n}\r\n\r\n/* =========== FORMULAIRE (PARTIE DROITE) ===========*/\r\n\r\n.right-container {\r\n\r\n  position: relative;\r\n\r\n  background-color: rgba(30,30,35,0.8);\r\n  border-radius: 0;\r\n\r\n  padding: 30px;\r\n  width: 400px;\r\n\r\n}\r\n\r\n.right-container .title {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  margin: 0 0 20px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.right-container #form-login {\r\n\r\n  width: 96%;\r\n  margin: 3em auto;\r\n  padding: 3em 2em 2em 2em;\r\n  background: #fafafa;\r\n  border: 1px solid #ebebeb;\r\n  -webkit-box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\r\n          box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\r\n  /*display:block;*/\r\n}\r\n\r\n.right-container #form-login .group {\r\n  position: relative;\r\n  margin-bottom: 45px;\r\n\r\n}\r\n\r\n.right-container #form-login input {\r\n  /*-webkit-appearance: none;*/\r\n  font-size: 18px;\r\n  padding: 10px 10px 10px 5px;\r\n  display: block;\r\n  background: #fafafa;\r\n  color: #636363;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid #757575;\r\n}\r\n\r\n.right-container #form-login input:focus {\r\n  outline: none; /* pour enlever le carré autour */\r\n}\r\n\r\nlabel {\r\n  color: #999;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  text-transform: uppercase;\r\n  position: absolute;\r\n  pointer-events: none; /* rend le label inatic */\r\n  left: 5px;\r\n  top: 10px;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n  -moz-transition:0.2s ease all;\r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* animation qui fait monter le texte lorsque l'input est active */\r\n\r\ninput:focus ~ label, input:valid ~ label {\r\n  top: -20px;\r\n  /*transform: scale(.75); left: -2px;*/\r\n  font-size:14px;\r\n  color: #4a89dc;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.bar:before, .bar:after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #4a89dc;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n  /*-moz-transition:0.2s ease all;*/\r\n  /*-webkit-transition:0.2s ease all;*/\r\n}\r\n\r\n/* Effet bar */\r\n\r\n.bar:before {\r\n  left: 50%;\r\n}\r\n\r\n/* Effet bar */\r\n\r\n.bar:after {\r\n  right: 50%;\r\n}\r\n\r\n/* Animation bar quand input focus */\r\n\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n\r\n.highlight {\r\n  position: absolute;\r\n  height: 60%;\r\n  width: 100px;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n/* grossissement bar quand input est focus */\r\n\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* === ANIMATIONS === */\r\n\r\n@-webkit-keyframes inputHighlighter {\r\n  from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n  from { background:#5264AE; }\r\n  to    { width:0; background:transparent; }\r\n}\r\n\r\n/*=== BOUTON ===*/\r\n\r\n.button {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 12px 24px;\r\n  margin: .3em 0 1em 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  background: transparent;\r\n  border: 0;\r\n  cursor: pointer;\r\n  -webkit-transition: all 0.15s ease;\r\n  transition: all 0.15s ease;\r\n}\r\n\r\n.button:focus {\r\n  outline: none;\r\n}\r\n\r\n.buttonPurple {\r\n  background: #7289da;\r\n  text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);\r\n}\r\n\r\n.buttonPurple:hover {\r\n  background: #697ec4;\r\n}\r\n\r\n.footer {\r\n  color: #87909c;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n  margin-bottom: 0;\r\n  margin-top: -10px;\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\n.footer a {\r\n\r\n  text-decoration: none;\r\n  color: white;\r\n  -webkit-transition: opacity .5s, color .5s;\r\n  transition: opacity .5s, color .5s;\r\n  cursor: pointer;\r\n  font-weight: bolder;\r\n  /*border: solid 3px purple;*/\r\n  width: 80px;\r\n  margin: auto;\r\n}\r\n\r\n.footer a:hover {\r\n  color: #fafafa;\r\n  text-decoration: underline;\r\n  /*border-bottom: white 1px solid;*/\r\n  /*padding-bottom: 3px;*/\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"main-container-center\">\n\n    <div class=\"left-container\">\n      <div class=\"main-container-left\">\n        <div class=\"logo\"></div>\n        <div class=\"name-discord\"></div>\n      </div>\n    </div>\n    <form class=\"right-container\">\n\n      <h1 class=\"title\">bon retour parmi nous !</h1>\n\n      <form id=\"form-login\">\n\n        <div class=\"group\">\n          <input type=\"text\" [(ngModel)]=\"username\"  name=\"username\" required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label>email</label>\n        </div>\n        <div class=\"group\">\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label>mot de passe</label>\n        </div>\n        <button type=\"button\" class=\"button buttonPurple\" (click)=\"login()\">\n          Se Connecter\n          <div class=\"ripples buttonRipples\">\n            <span class=\"ripplesCircle\"></span>\n          </div>\n        </button>\n      </form>\n\n      <!-- FOOTER-->\n      <div class=\"footer\">\n        <p>Besoin d'un compte ?&nbsp; <a [routerLink]=\"['/signup']\">S'inscrire</a></p>\n      </div>\n    </form>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    // constructor(private router: Router, private authService: AuthService, private token: TokenStorage) { }
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        if (this.username === 'admin' && this.password === 'admin') {
            this.router.navigate(['chat-room']);
            // alert('Ca marche !!');
        }
        else {
            // alert('Identifiant invalide!');
        }
    };
    // login(): void {
    //   this.authService.attemptAuth(this.username, this.password).subscribe(
    //     data => {
    //       this.token.saveToken(data.token);
    //       this.router.navigate(['user']);
    //     }
    //   );
    // }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ".messageContainer{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: auto;\r\n  width: 70%;\r\n  min-width: 400px;\r\n  border-radius: 5px;\r\n  -webkit-box-align:stretch;\r\n      -ms-flex-align:stretch;\r\n          align-items:stretch;\r\n  background-color: #eee;\r\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n          box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.messageContent{\r\n  height: auto;\r\n  -webkit-box-flex: 9;\r\n      -ms-flex: 9;\r\n          flex: 9;\r\n  background-color: #fff;\r\n  padding: 10px;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\">\n  <!--<div class=\"messageData\"-->\n       <!--[ngClass]=\"{'isOwnMessageData':isOwnMessage}\">-->\n        <!--<span class=\"sender\"-->\n              <!--[ngClass]=\"{'isOwnSender':isOwnMessage}\">-->\n            <!--{{ userName }}-->\n        <!--</span>-->\n    <!--<span class=\"timestamp\"-->\n          <!--[ngClass] = \"{'isOwnTimestamp':isOwnMessage}\">-->\n            <!--{{ timeStamp | date:'medium' }}-->\n        <!--</span>-->\n  <!--</div>-->\n  <div class=\"messageContent\">\n       <!--[ngClass]=\"{'isOwnMessageContent':isOwnMessage}\"-->\n    {{ messageContent }}\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modele_message_modele__ = __webpack_require__("./src/app/modele/message.modele.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.timeStamp = new Date();
    }
    MessagesComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        // this.timeStamp = chatMessage.timeSent;
        // this.userEmail = chatMessage.email;
        // this.userName = chatMessage.userName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__modele_message_modele__["a" /* Message */])
    ], MessagesComponent.prototype, "chatMessage", void 0);
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/modele/message.modele.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
        this.timeSent = new Date();
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/modele/utilisateur.modele.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilisateurModele; });
var UtilisateurModele = /** @class */ (function () {
    function UtilisateurModele() {
    }
    return UtilisateurModele;
}());



/***/ }),

/***/ "./src/app/saisie-message/saisie-message.component.css":
/***/ (function(module, exports) {

module.exports = ".chatInput{\r\n  -webkit-box-flex: 10;\r\n      -ms-flex: 10;\r\n          flex: 10;\r\n  font-size: 1.3em;\r\n  font-family: 'Open Sans', sans-serif;\r\n  background-color: #eee;\r\n  color: #000;\r\n  -webkit-transition: 0.1s ease-out;\r\n  transition: 0.1s ease-out;\r\n  padding-left: 80px;\r\n}\r\n\r\n.chatInput:focus{\r\n  background-color: #E4F1FE;\r\n  color: #222;\r\n  -webkit-transition: 0.2s ease-in;\r\n  transition: 0.2s ease-in;\r\n}\r\n\r\n.chatButton{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  padding: 10px;\r\n  padding: 8px 24px;\r\n  font-size: 1.3em;\r\n  font-family: 'Droid Sans', sans-serif;\r\n  background-color: #7289da;\r\n  color: white;\r\n  -webkit-transition: 0.2s ease-out;\r\n  transition: 0.2s ease-out;\r\n  min-width: 50px;\r\n  border-radius: 7px;\r\n}\r\n\r\n.chatButton:hover{\r\n  background-color: #444;\r\n}\r\n"

/***/ }),

/***/ "./src/app/saisie-message/saisie-message.component.html":
/***/ (function(module, exports) {

module.exports = "<input\n  class=\"chatInput\"\n  [(ngModel)]=\"message\"\n  (keydown)=\"handleSubmit($event)\"\n  placeholder=\"Envoyer un message\"\n/>\n\n<button class=\"chatButton\" (click)=send()>Envoyez</button>\n"

/***/ }),

/***/ "./src/app/saisie-message/saisie-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaisieMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaisieMessageComponent = /** @class */ (function () {
    // private this.stompClient;
    function SaisieMessageComponent(chat) {
        this.chat = chat;
    }
    SaisieMessageComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        // this.stompClient.send("/app/send/message" , {}, message);
        this.message = '';
    };
    SaisieMessageComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    SaisieMessageComponent.prototype.ngOnInit = function () {
    };
    SaisieMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saisie-message',
            template: __webpack_require__("./src/app/saisie-message/saisie-message.component.html"),
            styles: [__webpack_require__("./src/app/saisie-message/saisie-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]])
    ], SaisieMessageComponent);
    return SaisieMessageComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs__ = __webpack_require__("./node_modules/stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client__ = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService() {
        var ws = new __WEBPACK_IMPORTED_MODULE_2_sockjs_client___default.a('http://localhost:8080/connexion-websocket');
        this.stompClient = __WEBPACK_IMPORTED_MODULE_1_stompjs___default.a.over(ws);
    }
    ChatService.prototype.getMsg = function () {
        var that = this;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/chat', function (msgReceived) {
                if (msgReceived.body) {
                    __WEBPACK_IMPORTED_MODULE_3_jquery___default()('.chat-container').append('<div class=\'message-container\'>' +
                        '<div class=\'message-contenu\'>' +
                        msgReceived.body +
                        '</div>' +
                        '</div>');
                }
                // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
                // console.log(message.body);
                // this.feed.push(msgReceived.body);
                // this.feed = msgReceived.body;
                // return this.feed;
                // alert('MESSAGE RECEIVE= ' + msgReceived);
                // alert('FEED= ' + this.feed);
                // }
            });
        });
    };
    ChatService.prototype.getMessages = function (yolo) {
        var that = this;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/chat', function (msgReceived) {
                if (msgReceived.body) {
                    // this.feed = msgReceived.body;
                    // this.feed.push(msgReceived.body);
                    yolo = msgReceived.body;
                }
                // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
                // console.log(message.body);
                // this.feed.push(msgReceived.body);
                // this.feed = msgReceived.body;
                // return this.feed;
                // alert('MESSAGE RECEIVE= ' + msgReceived);
                // alert('FEED= ' + this.feed);
                // }
            });
        });
    };
    ChatService.prototype.sendMessage = function (msg) {
        this.stompClient.send('/app/send/message', {}, msg);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n  margin: 100px auto 0;\r\n  width: 70px;\r\n  text-align: center;\r\n}\r\n\r\n.spinner > div {\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #333;\r\n\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n}\r\n\r\n.spinner .bounce1 {\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n\r\n.spinner .bounce2 {\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes sk-bouncedelay {\r\n  0%, 80%, 100% { -webkit-transform: scale(0) }\r\n  40% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bouncedelay {\r\n  0%, 80%, 100% {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n  } 40% {\r\n      -webkit-transform: scale(1.0);\r\n      transform: scale(1.0);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
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

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spinner',
            template: __webpack_require__("./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__("./src/app/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/utilisateurs/utilisateurs.component.css":
/***/ (function(module, exports) {

module.exports = ".an-user-container{\r\n  height: auto;\r\n  padding: 10px;\r\n  width: 90%;\r\n  margin-top: 10px;\r\n  border-radius: 1px;\r\n  -webkit-box-align:start;\r\n      -ms-flex-align:start;\r\n          align-items:flex-start;\r\n  background-color: #7289da;\r\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n  color: #A098A5;\r\n  border-radius: 8px;\r\n  -webkit-transition: ease-in 0.2s;\r\n  transition: ease-in 0.2s;\r\n}\r\n\r\n.an-user-container:hover{\r\n  background-color: #4d6dde;\r\n  color: #ddd;\r\n  -webkit-transition: ease-in 0.1s;\r\n  transition: ease-in 0.1s;\r\n}\r\n\r\n.an-user{\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/utilisateurs/utilisateurs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"an-user-container\">\n  <span class=\"status\"></span>\n  <span class=\"an-user\">\n    <!--{{unUtilisateur.username}}-->\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/utilisateurs/utilisateurs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilisateursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modele_utilisateur_modele__ = __webpack_require__("./src/app/modele/utilisateur.modele.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilisateursComponent = /** @class */ (function () {
    function UtilisateursComponent() {
    }
    UtilisateursComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__modele_utilisateur_modele__["a" /* UtilisateurModele */])
    ], UtilisateursComponent.prototype, "unUtilisateur", void 0);
    UtilisateursComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-utilisateurs',
            template: __webpack_require__("./src/app/utilisateurs/utilisateurs.component.html"),
            styles: [__webpack_require__("./src/app/utilisateurs/utilisateurs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UtilisateursComponent);
    return UtilisateursComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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