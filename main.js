(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_admin_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/list-posts/list-posts.component */ "./src/app/components/admin/list-posts/list-posts.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/videojuegos/videojuegos.component */ "./src/app/components/videojuegos/videojuegos.component.ts");
/* harmony import */ var _components_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tecnologia/tecnologia.component */ "./src/app/components/tecnologia/tecnologia.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_list_posts_user_list_posts_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-posts-user/list-posts-user.component */ "./src/app/components/list-posts-user/list-posts-user.component.ts");














var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'user/register', component: _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/login', component: _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'user/profile', component: _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'admin/list-posts', component: _components_admin_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_7__["ListPostsComponent"] },
    { path: 'post/:id', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"] },
    { path: 'posts/:year/:month', component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"] },
    { path: 'videojuegos', component: _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_10__["VideojuegosComponent"] },
    { path: 'tecnologia', component: _components_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_11__["TecnologiaComponent"] },
    { path: 'user/list-posts', component: _components_list_posts_user_list_posts_user_component__WEBPACK_IMPORTED_MODULE_13__["ListPostsUserComponent"] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_12__["Page404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog-mayu';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/list-posts/list-posts.component */ "./src/app/components/admin/list-posts/list-posts.component.ts");
/* harmony import */ var _modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/modal-post/modal-post.component */ "./src/app/modals/modal-post/modal-post.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/videojuegos/videojuegos.component */ "./src/app/components/videojuegos/videojuegos.component.ts");
/* harmony import */ var _components_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tecnologia/tecnologia.component */ "./src/app/components/tecnologia/tecnologia.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_list_posts_user_list_posts_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/list-posts-user/list-posts-user.component */ "./src/app/components/list-posts-user/list-posts-user.component.ts");
/* harmony import */ var _pipes_safePipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/safePipe */ "./src/app/pipes/safePipe.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_admin_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_11__["ListPostsComponent"],
                _modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_12__["ModalPostComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_20__["PostComponent"],
                _components_videojuegos_videojuegos_component__WEBPACK_IMPORTED_MODULE_21__["VideojuegosComponent"],
                _components_tecnologia_tecnologia_component__WEBPACK_IMPORTED_MODULE_22__["TecnologiaComponent"],
                _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__["Page404Component"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_25__["PostsComponent"],
                _components_list_posts_user_list_posts_user_component__WEBPACK_IMPORTED_MODULE_26__["ListPostsUserComponent"],
                _pipes_safePipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([], {
                    // Tell the router to use the hash instead of HTML5 pushstate.
                    //useHash: true,
                    // In order to get anchor / fragment scrolling to work at all, we need to
                    // enable it on the router.
                    anchorScrolling: "enabled",
                    // Once the above is enabled, the fragment link will only work on the
                    // first click. This is because, by default, the Router ignores requests
                    // to navigate to the SAME URL that is currently rendered. Unfortunately,
                    // the fragment scrolling is powered by Navigation Events. As such, we
                    // have to tell the Router to re-trigger the Navigation Events even if we
                    // are navigating to the same URL.
                    onSameUrlNavigation: "reload",
                    // Let's enable tracing so that we can see the aforementioned Navigation
                    // Events when the fragment is clicked.
                    enableTracing: true,
                    scrollPositionRestoration: "enabled"
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"]
            ],
            providers: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuth"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestore"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/list-posts/list-posts.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/list-posts/list-posts.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbGlzdC1wb3N0cy9saXN0LXBvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/list-posts/list-posts.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/list-posts/list-posts.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\r\n\t<div class=\"col\">\r\n\t\t<button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\" data-target=\"#modalPost\">Nuevo Post</button>\r\n\t\t<table class=\"table table-hover\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t\t\t<th scope=\"col\">Título</th>\r\n\t\t\t\t\t<th scope=\"col\">Autor</th>\r\n\t\t\t\t\t<th scope=\"col\">Categoría</th>\r\n\t\t\t\t\t<th scope=\"col\">Fecha</th>\r\n\t\t\t\t\t<th scope=\"col\">&nbsp;</th>\r\n\t\t\t\t\t<th scope=\"col\">&nbsp;</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let post of posts; index as i\">\r\n\t\t\t\t\t<th scope=\"row\">{{i + 1}}</th>\r\n\t\t\t\t\t<td>{{post.titulo}}</td>\r\n\t\t\t\t\t<td>{{post.autor}}</td>\r\n\t\t\t\t\t<td>{{post.categoria}}</td>\r\n\t\t\t\t\t<td>{{post.fecha.day}}/{{post.fecha.month}}/{{post.fecha.year}}</td>\r\n\t\t\t\t\t<td *ngIf=\"post.userUid == userUid || isAdmin == true; else noOwner\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalPost\" (click)=\"onPreUpdatePost(post)\">Editar</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<ng-template #noOwner>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" disabled=\"true\">Editar</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<td *ngIf=\"isAdmin == true; else noAdmin\">\r\n\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"onDeletePost(post.id)\">Eliminar</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<ng-template #noAdmin>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" disabled=\"true\">Eliminar</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n</section>\r\n<app-modal-post [userUid]=\"userUid\"></app-modal-post>"

/***/ }),

/***/ "./src/app/components/admin/list-posts/list-posts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/list-posts/list-posts.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPostsComponent", function() { return ListPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");




var ListPostsComponent = /** @class */ (function () {
    function ListPostsComponent(postService, authService) {
        this.postService = postService;
        this.authService = authService;
        this.posts = [];
        this.isAdmin = null;
        this.userUid = null;
    }
    ListPostsComponent.prototype.ngOnInit = function () {
        this.getListPosts();
        this.getCurrentUser();
    };
    ListPostsComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                _this.userUid = auth.uid;
                _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                    //this.isAdmin = true;
                });
            }
        });
    };
    ListPostsComponent.prototype.getListPosts = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    ListPostsComponent.prototype.onDeletePost = function (idPost) {
        var confirmacion = confirm('Are you sure?');
        if (confirmacion) {
            this.postService.deletePost(idPost);
        }
    };
    ListPostsComponent.prototype.onPreUpdatePost = function (post) {
        this.postService.selectedPost = Object.assign({}, post);
    };
    ListPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-posts',
            template: __webpack_require__(/*! ./list-posts.component.html */ "./src/app/components/admin/list-posts/list-posts.component.html"),
            styles: [__webpack_require__(/*! ./list-posts.component.css */ "./src/app/components/admin/list-posts/list-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ListPostsComponent);
    return ListPostsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\" class=\"mt-5\">\n  <div class=\"container\">\n      <header class=\"blog-header py-3\" id=\"top-home\">\n        <div class=\"align-items-center\">\n          <div class=\"text-center\">\n              <span class=\"blog-header-logo text-dark\"><a routerLink=\"/\">El Blog del Mayu</a></span>\n          </div>\n        </div>\n      </header>\n    \n       <div class=\"nav-scroller py-1 mb-2\">\n        <nav class=\"nav d-flex justify-content-between\">\n          <a class=\"p-2 text-muted\" routerLink=\"/tecnologia\">Tecnología</a>\n          <a class=\"p-2 text-muted\" routerLink=\"/videojuegos\">Videojuegos</a>\n        </nav>\n      </div>\n\n      <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\">\n        <div class=\"col-md-6 px-0\">\n          <h1 class=\"display-4 font-italic\">Tetris 99: Resultados del Torneo</h1>\n          <p class=\"lead my-3 text-justify\">Después de participar en el torneo me percaté de dos cosas puntuales.</p>\n          <p class=\"lead mb-0\"><a routerLink=\"/videojuegos\" [fragment]=\"'tetris99resultado'\" class=\"text-white font-weight-bold\">Continúa leyendo...</a></p>\n        </div>\n      </div>\n        \n      <div class=\"row mb-2\">\n        <div class=\"col-md-6\">\n          <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n            <div class=\"card-body d-flex flex-column align-items-start\">\n              <strong class=\"d-inline-block mb-2 text-primary\">Videojuegos</strong>\n              <h3 class=\"mb-0\">\n                  <a class=\"text-dark\" routerLink=\"/post/gibBq3hS981ydq5Ihk9X\">Super Smash Bros. Ultimate: Reseña</a>\n              </h3>\n              <div class=\"mb-1 text-muted\">Dic 13, 2018</div>\n              <p class=\"card-text mb-auto\">El día Viernes 07 de Diciemrbre del presente, se liberó por fin uno de los juegos más esperados del año, \n                  no hablo de nada más y nada menos que Super Smash Bros Ultimate para Nintendo Switch.</p>\n              <a routerLink=\"/post/gibBq3hS981ydq5Ihk9X\">Continua leyendo...</a>\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n            <div class=\"card-body d-flex flex-column align-items-start\">\n              <strong class=\"d-inline-block mb-2 text-success\">Tecnología</strong>\n              <h3 class=\"mb-0\">\n                <a class=\"text-dark\" routerLink=\"/tecnologia\" [fragment]=\"'symfony'\">Configuración de Proyecto Symfony</a>\n              </h3>\n              <div class=\"mb-1 text-muted\">Feb 13, 2018</div>\n              <p class=\"card-text mb-auto\">Primero que nada requeriremos contar con un interprete PHP, para este fin te recomiendo instalar <a target=\"_blank\" href=\"http://www.wampserver.com/en/\">wamp</a>\n                    (este es un software que nos configurará Apache, PHP y MySql de una sola vez).</p>\n              <a routerLink=\"/tecnologia\" [fragment]=\"'symfony'\">Continua leyendo...</a>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n\n    <main role=\"main\" class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 blog-main\">\n          <h3 class=\"pb-3 mb-4 font-italic border-bottom\">\n            Primero imagínalo, luego prográmalo\n          </h3>\n\n          <div class=\"blog-post\"><a name=”ina” id=\"ina\">\n              <h2 class=\"blog-post-title\">Inauguración del Blog del Mayu</h2></a>\n            <p class=\"blog-post-meta\">Febrero 08, 2018 por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">Cristhian Mayuri</a></p>\n            <p class=\"text-justify\">Bienvenido(a) a mi Blog, mi nombre es Cristhian Mayuri, desarrollador de software de nacionalidad peruana, \n                mi experiencia en el mundo de la programación es de casi 10 años (la mayoría de ellos en una Institución del Estado en Perú).</p>\n            <p class=\"text-justify\">Mi grado de instrucción es de Técnico en Computación e Informática.</p>\n            <p class=\"text-justify\">Mi experiencia es amplia en PHP y mediana en Java, llegando a realizar sistemas administrativos de gran envergadura en el primero.</p>\n            <p class=\"text-justify\">Actualmente estoy incursionando en el desarrollo para android, por lo que es bastante probable que dentro del blog publique algunas\n               entradas interesantes acerca del tema.</p>\n            <p class=\"text-justify\">Poco más queda por decir, salvo el hecho de que esta es mi primera experiencia publicando contenido para la comunidad de internet y espero estar a la altura de las expectativas.</p>\n          </div> \n            \n          <div class=\"blog-post\"><a name=”videojuegos” id=\"videojuegos\">\n              <h2 class=\"blog-post-title\">Inauguración de la Sección de Videojuegos</h2></a>\n            <p class=\"blog-post-meta\">July 18, 2018 por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">Cristhian Mayuri</a></p>\n            <p class=\"text-justify\">Uno de mis pasatiempos favoritos es el de jugar videojuegos, dada esta situación he visto por conveniente crear una nueva sección en mi blog.</p>\n            <p class=\"text-justify\">En esta sección compartiré algunos gameplays y algunas reseñas desde mi humilde opinión. \n                Para empezar subiré algunos gameplays de uno de mis juegos favoritos, ni más ni menos que Darkest Dungeon, los videos los podrás ver desde este <a routerLink=\"/videojuegos\">link</a></p>\n          </div> \n\n        </div><!-- /.blog-main -->\n\n        <aside class=\"col-md-4 blog-sidebar\">\n          <div class=\"p-3 mb-3 bg-light rounded\">\n            <h4 class=\"font-italic\">Acerca del sitio web</h4>\n            <p class=\"mb-0 text-justify\">El blog del Mayu ha sido desarrollado con la finalidad de compartir mis experiencias en diversos campos durante mi día a día cotidiano.</p>\n          </div>\n\n          <div class=\"p-3\">\n            <h4 class=\"font-italic\">Sígueme también en:</h4>\n            <ol class=\"list-unstyled\">\n              <li><a href=\"https://github.com/mayuelcuarto\">GitHub</a></li>\n              <li><a href=\"https://www.youtube.com/channel/UCPN6mJNFnR_e6an6ToTX4pg?view_as=subscriber\">Youtube</a></li>\n            </ol>\n          </div>\n        </aside><!-- /.blog-sidebar -->\n\n      </div><!-- /.row -->\n\n    </main><!-- /.container -->\n\n    <footer class=\"blog-footer\">\n      <p>Este sitio web fue desarrollado con <a href=\"https://getbootstrap.com/\">Bootstrap</a></p>\n      <p>\n        <a routerLink=\".\" fragment=\"top-home\">Subir</a>\n      </p>\n    </footer>\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
        this.posts = [];
        this.post = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (posts) {
            console.log('Posts', posts);
            _this.posts = posts;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/list-posts-user/list-posts-user.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/list-posts-user/list-posts-user.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1wb3N0cy11c2VyL2xpc3QtcG9zdHMtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/list-posts-user/list-posts-user.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/list-posts-user/list-posts-user.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"posts\" class=\"mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let post of posts\">\n        <div class=\"card_book\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <p *ngIf=\"post.video=='no'\">\n                <img class=\"img-fluid\" src=\"{{post.portada}}\" alt=\"{{post.titulo}}\">\n              </p>\n                <div *ngIf=\"post.video!='no'\">\n                  <iframe class=\"card_video\" [src]=\"post.video | safe\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n              <h4 routerLink=\"/post/{{post.id}}\" class=\"card-title\">{{post.titulo}}</h4>\n              <p class=\"card-text\" innerHtml=\"{{post.introduccion}}\">\n              \t\n              </p>\n              <div class=\"container-precio-idioma\">\n                <p class=\"badge badge-info\">\n                  Categoría: {{post.categoria}}\n                </p>\n                <p class=\"badge badge-info\">\n                  Fecha: {{post.fechaDay}}-{{post.fechaMonth}}-{{post.fechaYear}}\n                </p>\n              </div>\n              <a routerLink=\"/post/{{post.id}}\" class=\"btn btn-block btn-primary\">Ver Post</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/list-posts-user/list-posts-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/list-posts-user/list-posts-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListPostsUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPostsUserComponent", function() { return ListPostsUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");



var ListPostsUserComponent = /** @class */ (function () {
    function ListPostsUserComponent(postService) {
        this.postService = postService;
        this.posts = [];
        this.post = '';
    }
    ListPostsUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (posts) {
            console.log('Posts', posts);
            _this.posts = posts;
        });
    };
    ListPostsUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-posts-user',
            template: __webpack_require__(/*! ./list-posts-user.component.html */ "./src/app/components/list-posts-user/list-posts-user.component.html"),
            styles: [__webpack_require__(/*! ./list-posts-user.component.css */ "./src/app/components/list-posts-user/list-posts-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], ListPostsUserComponent);
    return ListPostsUserComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Inicio</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/user/list-posts\">Archivo\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n        <a class=\"nav-link\" routerLink=\"/user/register\">Registro\r\n        </a>\r\n      </li>\r\n      <!--<li class=\"nav-item\" *ngIf=\"isLogged\">\r\n        <a class=\"nav-link\" routerLink=\"/user/profile\">Perfil</a>\r\n      </li>-->\r\n      <li class=\"nav-item\" *ngIf=\"isLogged && isAdmin\">\r\n        <a class=\"nav-link\" routerLink=\"/admin/list-posts\">Lista de Posts</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n        <a class=\"nav-link\" routerLink=\"/user/login\">Login\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n        <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Logout\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, afsAuth) {
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.app_name = 'El Blog del Mayu';
        this.isLogged = false;
        this.isAdmin = null;
        this.userUid = null;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    NavbarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                console.log('user logged');
                _this.isLogged = true;
                _this.userUid = auth.uid;
                _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                });
            }
            else {
                console.log('user not logged');
                _this.isLogged = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.afsAuth.auth.signOut();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page404/page404.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/page404/page404.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page404/page404.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"404page\" class=\"mt-5\">\n\t<p>\n  \tTe has topado con un link defectuoso... \n\t</p>\n</section>"

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/components/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"post\" class=\"mt-5\">\r\n  <div class=\"container\">\r\n    <header class=\"blog-header py-3\" id=\"top-post\">\r\n      <div class=\"align-items-center\">\r\n        <div class=\"text-center\">\r\n          <span class=\"blog-header-logo text-dark\">\r\n            <a routerLink=\"/\">El Blog del Mayu</a>\r\n          </span>\r\n          <br><br>\r\n          <strong class=\"d-inline-block mb-2 text-primary\">(Videojuegos)</strong>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"nav-scroller py-1 mb-2 border-bottom\">\r\n      <nav class=\"nav d-flex justify-content-between\">\r\n        <a class=\"p-2 text-muted\" routerLink=\"/tecnologia\">Tecnología</a>\r\n        <a class=\"p-2 text-muted\" routerLink=\"/videojuegos\">Videojuegos</a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n  <main role=\"main\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 blog-main\">\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">{{post.titulo}}</h2>\r\n          <p class=\"blog-post-meta\">{{this.mes}} {{this.dia}}, {{this.anio}} por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">{{post.autor}}</a></p>\r\n          <div innerHtml=\"{{post.descripcion}}\"></div>\r\n        </div>\r\n      </div><!-- /.blog-main -->\r\n\r\n      <aside class=\"col-md-4 blog-sidebar\">\r\n        <div class=\"p-3 mb-3 bg-light rounded\">\r\n          <h4 class=\"font-italic\">Acerca del sitio web</h4>\r\n          <p class=\"mb-0 text-justify\">El blog del Mayu ha sido desarrollado con la finalidad de compartir mis experiencias en diversos campos durante mi día a día cotidiano.</p>\r\n        </div>\r\n        <div class=\"p-3\">\r\n          <h4 class=\"font-italic\">Archivos</h4>\r\n          <ol class=\"list-unstyled mb-0\">\r\n            <li><a href=\"archivosvj/diciembre2018.html\">Diciembre 2018</a></li>\r\n            <li><a href=\"archivosvj/agosto2018.html\">Agosto 2018</a></li>\r\n            <li><a href=\"archivosvj/julio2018.html\">Julio 2018</a></li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"p-3\">\r\n          <h4 class=\"font-italic\">Sígueme también en:</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"https://github.com/mayuelcuarto\">GitHub</a></li>\r\n            <li><a href=\"https://www.youtube.com/channel/UCPN6mJNFnR_e6an6ToTX4pg?view_as=subscriber\">Youtube</a></li>\r\n          </ol>\r\n        </div>\r\n      </aside><!-- /.blog-sidebar -->\r\n    </div><!-- /.row -->\r\n  </main><!-- /.container -->\r\n  <footer class=\"blog-footer\">\r\n    <p>Este sitio web fue desarrollado con <a href=\"https://getbootstrap.com/\">Bootstrap</a></p>\r\n    <p>\r\n      <a routerLink=\".\" fragment=\"top-post\">Subir</a>\r\n    </p>\r\n  </footer>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.post = {};
        this.ruta = null;
        this.dia = null;
        this.mes = null;
        this.anio = null;
    }
    PostComponent.prototype.ngOnInit = function () {
        var idPost = this.route.snapshot.params['id'];
        this.getDetails(idPost);
    };
    PostComponent.prototype.getDetails = function (idPost) {
        var _this = this;
        this.postService.getOnePost(idPost).subscribe(function (post) {
            _this.post = post;
            _this.dia = _this.post.fechaDay;
            _this.mesString(_this.post.fechaMonth);
            _this.anio = _this.post.fechaYear;
        });
    };
    PostComponent.prototype.mesString = function (month) {
        switch (month) {
            case 1:
                this.mes = "Enero";
                break;
            case 2:
                this.mes = "Febrero";
                break;
            case 3:
                this.mes = "Marzo";
                break;
            case 4:
                this.mes = "Abril";
                break;
            case 5:
                this.mes = "Mayo";
                break;
            case 6:
                this.mes = "Junio";
                break;
            case 7:
                this.mes = "Julio";
                break;
            case 8:
                this.mes = "Agosto";
                break;
            case 9:
                this.mes = "Setiembre";
                break;
            case 10:
                this.mes = "Octubre";
                break;
            case 11:
                this.mes = "Noviembre";
                break;
            case 12:
                this.mes = "Diciembre";
                break;
            default:
                // code...
                break;
        }
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"posts\" class=\"mt-5\">\r\n  <div class=\"container\">\r\n    <header class=\"blog-header py-3\" id=\"top-post\">\r\n      <div class=\"align-items-center\">\r\n        <div class=\"text-center\">\r\n          <span class=\"blog-header-logo text-dark\">\r\n            <a routerLink=\"/\">El Blog del Mayu</a>\r\n          </span>\r\n          <br><br>\r\n          <strong class=\"d-inline-block mb-2 text-primary\">(Videojuegos)</strong>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"nav-scroller py-1 mb-2 border-bottom\">\r\n      <nav class=\"nav d-flex justify-content-between\">\r\n        <a class=\"p-2 text-muted\" routerLink=\"/tecnologia\">Tecnología</a>\r\n        <a class=\"p-2 text-muted\" routerLink=\"/videojuegos\">Videojuegos</a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n  <main role=\"main\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 blog-main\" >\r\n        <div class=\"blog-post\" *ngFor=\"let post of posts\">\r\n          <h2 class=\"blog-post-title\">{{post.titulo}}</h2>\r\n          <p class=\"blog-post-meta\">{{this.mesString(post.fechaMonth)}} {{post.fechaDay}}, {{post.fechaYear}} por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">{{post.autor}}</a></p>\r\n          <div innerHtml=\"{{post.descripcion}}\"></div>\r\n        </div>\r\n      </div><!-- /.blog-main -->\r\n\r\n      <aside class=\"col-md-4 blog-sidebar\">\r\n        <div class=\"p-3 mb-3 bg-light rounded\">\r\n          <h4 class=\"font-italic\">Acerca del sitio web</h4>\r\n          <p class=\"mb-0 text-justify\">El blog del Mayu ha sido desarrollado con la finalidad de compartir mis experiencias en diversos campos durante mi día a día cotidiano.</p>\r\n        </div>\r\n        <div class=\"p-3\">\r\n          <h4 class=\"font-italic\">Sígueme también en:</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"https://github.com/mayuelcuarto\">GitHub</a></li>\r\n            <li><a href=\"https://www.youtube.com/channel/UCPN6mJNFnR_e6an6ToTX4pg?view_as=subscriber\">Youtube</a></li>\r\n          </ol>\r\n        </div>\r\n      </aside><!-- /.blog-sidebar -->\r\n    </div><!-- /.row -->\r\n  </main><!-- /.container -->\r\n  <footer class=\"blog-footer\">\r\n    <p>Este sitio web fue desarrollado con <a href=\"https://getbootstrap.com/\">Bootstrap</a></p>\r\n    <p>\r\n      <a routerLink=\".\" fragment=\"top-post\">Subir</a>\r\n    </p>\r\n  </footer>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var year = this.route.snapshot.params['year'];
        var month = this.route.snapshot.params['month'];
        this.getPostsByYearMonth(year, month);
    };
    PostsComponent.prototype.getPostsByYearMonth = function (year, month) {
        var _this = this;
        this.postService.getPostsByYearMonth(year, month).subscribe(function (posts) {
            _this.posts = posts;
            console.log("posts", posts);
        });
    };
    PostsComponent.prototype.mesString = function (month) {
        switch (month) {
            case 1:
                return "Enero";
                break;
            case 2:
                return "Febrero";
                break;
            case 3:
                return "Marzo";
                break;
            case 4:
                return "Abril";
                break;
            case 5:
                return "Mayo";
                break;
            case 6:
                return "Junio";
                break;
            case 7:
                return "Julio";
                break;
            case 8:
                return "Agosto";
                break;
            case 9:
                return "Setiembre";
                break;
            case 10:
                return "Octubre";
                break;
            case 11:
                return "Noviembre";
                break;
            case 12:
                return "Diciembre";
                break;
            default:
                // code...
                break;
        }
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/tecnologia/tecnologia.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/tecnologia/tecnologia.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjbm9sb2dpYS90ZWNub2xvZ2lhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/tecnologia/tecnologia.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/tecnologia/tecnologia.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"tecnologia\" class=\"mt-5\">\r\n\t<div class=\"container\">\r\n\t\t<header class=\"blog-header py-3\" id=\"top-tec\">\r\n\t\t\t<div class=\"align-items-center\">\r\n\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t<span class=\"blog-header-logo text-dark\"><a routerLink=\"/\">El Blog del Mayu</a></span><br><br>\r\n\t\t\t\t\t<strong class=\"d-inline-block mb-2 text-primary\">(Tecnología)</strong>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div class=\"nav-scroller py-1 mb-2 border-bottom\">\r\n\t\t\t<nav class=\"nav d-flex justify-content-between\">\r\n\t\t\t\t<a class=\"p-2 text-muted\" routerLink=\"/tecnologia\">Tecnología</a>\r\n\t\t\t\t<a class=\"p-2 text-muted\" routerLink=\"/videojuegos\">Videojuegos</a>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<main role=\"main\" class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-8 blog-main\">\r\n\t\t\t\t<div class=\"blog-post\"><a name=\"symfony\" id=\"symfony\">\r\n\t\t\t\t\t<h2 class=\"blog-post-title\">Configuración de Proyecto Symfony 3</h2></a>\r\n\t\t\t\t\t<p class=\"blog-post-meta\">Febrero 13, 2018 por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">Cristhian Mayuri</a></p>\r\n\t\t\t\t\t<p class=\"text-justify\">Hola de nuevo, como comente en el post de inauguración mi experiencia radica más que todo en el uso del lenguaje PHP, habiendo dicho esto comencemos.</p>\r\n\t\t\t\t\t<p class=\"text-justify\">Hoy en día saber programar haciendo uso de un Framework PHP es lo más requerido por las empresas de desarrollo web, el día de hoy te presento la configuración rápida del Framework Symfony.</p>\r\n\t\t\t\t\t<p class=\"text-justify\">En la <a target=\"_blank\" href=\"https://symfony.com/doc/current/setup.html\">documentación oficial de Symfony</a>, se nos proporciona una solución haciendo uso de Composer (esta es la que usaremos). </p>\r\n\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t<li class=\"list-group-item text-justify\">Primero que nada requeriremos contar con un interprete PHP, para este fin te recomiendo instalar <a target=\"_blank\" href=\"http://www.wampserver.com/en/\">wamp</a>\r\n\t\t\t\t\t\t(este es un software que nos configurará Apache, PHP y MySql de una sola vez).</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item text-justify\">Hecho lo anterior debemos descargar <a target=\"_blank\" href=\"https://getcomposer.org/download/\" >\r\n\t\t\t\t\t\tComposer</a>. Este programa se encarga de administrar de manera muy efectiva librerías de PHP. \r\n\t\t\t\t\t\tLa instalación de Composer en Windows consiste en dar siguiente a la mayoría de pasos, salvo al \r\n\t\t\t\t\t\tque nos pide que asignemos nuestro interprete de PHP, en donde de haber instalado wamp asignaremos:<br><br>\r\n\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<img src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Ftecnologia%2Fsymfony3newproject%2Fcomposer.png?alt=media&token=0985f91b-5c2c-482d-9878-2a18fcc79641\" class=\"img-thumbnail\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\tEsta ruta puede cambiar en el directorio wamp que podría ser el de 32 bits en cuyo caso el nombre no \r\n\t\t\t\t\t\tllevaría 64 sino \"wamp\" a secas y también en la versión de PHP, que a partir de algunas versiones atrás \r\n\t\t\t\t\t\tya incluye la versión 7.* de PHP (puedes asignar esta versión si deseas experimentar las características \r\n\t\t\t\t\t\tmás recientes de PHP).\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"list-group-item text-justify\">Para confirmar que Composer se ha instalado correctamente ejecutaremos el siguiente comando en la consola: <code>composer -v</code>.<br>\r\n\t\t\t\t\t\tObtendremos un resultado similar a este: <br><br>\r\n\t\t\t\t\t\t<img src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Ftecnologia%2Fsymfony3newproject%2Fcomposer_version.png?alt=media&token=eab8b70f-f9f1-45b8-91fc-195858ab249d\" class=\"img-thumbnail\"><br><br>\r\n\r\n\t\t\t\t\tPues bien, tenemos instalado wamp y composer, ahora procederemos a crear un Proyecto con Symfony.</li>\r\n\t\t\t\t\t<li class=\"list-group-item text-justify\">Para instalar Symfony debemos ubicarnos a través de la consola en el directorio de publicación de wamp:<br><br>\r\n\r\n\t\t\t\t\t\t<code>cd C:/wamp(64)/www</code><br><br>\r\n\t\t\t\t\t\tUna vez situados en la carpeta de publicación ejecutaremos el siguiente comando también en la consola:<br><br>\r\n\t\t\t\t\t\t<code>composer create-project symfony/framework-standard-edition nombreproyecto \"3.*\"</code><br><br>\r\n\r\n\r\n\t\t\t\t\t\tAhora procederé a detallar un poco que hace este comando:<br>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><span class=\"font-weight-bold\">composer create-project:</span> Se encarga de invocar la función de creación de proyectos de Composer.</li>\r\n\t\t\t\t\t\t\t<li><span class=\"font-weight-bold\">symfony/framework-standard-edition:</span> Es el directorio que le decimos a Composer que tome como base.</li>\r\n\t\t\t\t\t\t\t<li><span class=\"font-weight-bold\">nombreproyecto:</span> Es el nombre y a la vez directorio del proyecto que vamos a crear.</li>\r\n\t\t\t\t\t\t\t<li><span class=\"font-weight-bold\">\"3.*\":</span> Es la versión de Symfony que instalaremos el asterisco después del punto indica que puede ser cualquier versión arriba de la 3, también se podría omitir escribir este fragmento de código y así se instalaría la versión más reciente.</li>\r\n\t\t\t\t\t\t</ul><br>\r\n\r\n\r\n\t\t\t\t\t\t<img src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Ftecnologia%2Fsymfony3newproject%2Fsymfonyproject1.png?alt=media&token=a64d00ec-1977-4261-a5bf-6aa0fcf1d324\" class=\"img-thumbnail\"><br><br>\r\n\r\n\t\t\t\t\t\tSi haz realizado los pasos correctamente empezará la instalación del Framework Symfony, desde ya te aviso que la primera instalación toma su tiempo. Pasado un rato la consola te pedirá que ingreses los datos de configuración del proyecto. Ya que esto es una prueba dejaremos todo por defecto (dar al ENTER y dejar en blanco).<br><br>\r\n\r\n\t\t\t\t\t\t<img src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Ftecnologia%2Fsymfony3newproject%2Fsymfonyproject2.png?alt=media&token=5619af89-de09-4f3a-96b9-755cc867197b\" class=\"img-thumbnail\"><br><br>\r\n\r\n\t\t\t\t\t\tY ya está, hemos creado nuestro proyecto con el Framework Symfony. Como dice el título del artículo he tratado de crear la guía del caso más simple. Si deseas ver algunos ejemplos de proyectos algo más complejos de Symfony, puedes seguirme en mi perfil de <a href=\"https://github.com/mayuelcuarto\">GitHub</a>, espero te haya servido y hasta la próxima.\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div><!-- /.blog-main -->\r\n\r\n\t\t\t<aside class=\"col-md-4 blog-sidebar\">\r\n\t\t\t\t<div class=\"p-3 mb-3 bg-light rounded\">\r\n\t\t\t\t\t<h4 class=\"font-italic\">Acerca del sitio web</h4>\r\n\t\t\t\t\t<p class=\"mb-0 text-justify\">El blog del Mayu ha sido desarrollado con la finalidad de compartir mis experiencias en diversos campos durante mi día a día cotidiano.</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"p-3\">\r\n\t\t\t\t\t<h4 class=\"font-italic\">Sígueme también en:</h4>\r\n\t\t\t\t\t<ol class=\"list-unstyled\">\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/mayuelcuarto\">GitHub</a></li>\r\n\t\t\t\t\t\t<li><a href=\"https://www.youtube.com/channel/UCPN6mJNFnR_e6an6ToTX4pg?view_as=subscriber\">Youtube</a></li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</div>\r\n\t\t\t</aside><!-- /.blog-sidebar -->\r\n\t\t</div><!-- /.row -->\r\n\t</main><!-- /.container -->\r\n\r\n\t<footer class=\"blog-footer\">\r\n\t\t<p>Este sitio web fue desarrollado con <a href=\"https://getbootstrap.com/\">Bootstrap</a></p>\r\n\t\t<p>\r\n\t\t\t<a routerLink=\".\" fragment=\"top-tec\">Subir</a>\r\n\t\t</p>\r\n\t</footer>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/tecnologia/tecnologia.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tecnologia/tecnologia.component.ts ***!
  \***************************************************************/
/*! exports provided: TecnologiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaComponent", function() { return TecnologiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TecnologiaComponent = /** @class */ (function () {
    function TecnologiaComponent() {
    }
    TecnologiaComponent.prototype.ngOnInit = function () {
    };
    TecnologiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tecnologia',
            template: __webpack_require__(/*! ./tecnologia.component.html */ "./src/app/components/tecnologia/tecnologia.component.html"),
            styles: [__webpack_require__(/*! ./tecnologia.component.css */ "./src/app/components/tecnologia/tecnologia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TecnologiaComponent);
    return TecnologiaComponent;
}());



/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\r\n  border: 0 solid #fff !important;\r\n}\r\n\r\n.btn-social{\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tcolor: #fff;\r\n\tborder-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.btn-facebook{\r\n\tbackground: #3b5998;\r\n}\r\n\r\n.btn-google{\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcclxuICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9va3tcclxuXHRiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZXtcclxuXHRiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/users/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_login\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formLogin=\"ngForm\" (ngSubmit)=\"onLogin()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Login</h1>\n                <div class=\"form-group\">\n                  <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\"  required>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" \n                    required>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"onLogin()\">Login</button>\n                  <a routerLink=\"/user/register\" class=\"form-control login-user\">Are you new ?</a>\n                </div>\n                <div class=\"form-group\">\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\"><span class=\"fa fa-facebook\"> Facebook</span></button>\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\"><span class=\"fa fa-google\"> Google</span></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.loginEmailUser(this.email, this.password)
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    LoginComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/users/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\r\n  border: 0px solid #fff !important;\r\n}\r\n\r\n.btn-social{\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tcolor: #fff;\r\n\tborder-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.btn-facebook{\r\n\tbackground: #3b5998;\r\n}\r\n\r\n.btn-google{\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc29jaWFse1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29re1xyXG5cdGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xle1xyXG5cdGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"register\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_register\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" required\n                    minlength=\"8\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"\n                    required minlength=\"5\" maxlength=\"10\">\n                </div>\n                <hr>\n                <div class=\"form-group\">\n                  <h5>Seleccionar imagen:</h5>\n                  <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n                </div>\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-stripped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) + '%'\">\n                  </div>\n                </div>\n                <br>\n                <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n                <button type=\"submit\" *ngIf=\"urlImage | async; else btnDisabled\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\n                <ng-template #btnDisabled>\n                  <button type=\"submit\" disabled=\"true\" class=\"btn btn-lg btn-secondary btn-block\">Register</button>\n                </ng-template>\n                <div class=\"form-group\">\n                  <a routerLink=\"/user/login\" class=\"form-control login-user\">Do you have account?</a>\n                </div>\n                <div class=\"form-group\">\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\"><span class=\"fa fa-facebook\"> Facebook</span></button>\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\"><span class=\"fa fa-google\"> Google</span></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.email = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onUpload = function (e) {
        var _this = this;
        //console.log('subir',e.target.files[0]);
        var id = Math.random().toString(36).substr(2);
        var file = e.target.files[0];
        var filePath = "uploads / profile_" + id;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
    };
    RegisterComponent.prototype.onAddUser = function () {
        var _this = this;
        this.authService.registerUser(this.email, this.password)
            .then(function (res) {
            _this.authService.isAuth().subscribe(function (user) {
                if (user) {
                    user.updateProfile({
                        displayName: '',
                        photoURL: _this.inputImageUser.nativeElement.value
                    }).then(function (res) {
                        _this.onLoginRedirect();
                    }).catch(function (err) { return _this.onCatchError(err); });
                }
            });
            //this.router.navigate(['/admin/list-books']);
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['/']);
    };
    RegisterComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUser'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "inputImageUser", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/videojuegos/videojuegos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/videojuegos/videojuegos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9qdWVnb3MvdmlkZW9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/videojuegos/videojuegos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/videojuegos/videojuegos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"videojuegos\" class=\"mt-5\">\r\n\t<div class=\"container\">\r\n    <header class=\"blog-header py-3\" id=\"top-vj\">\r\n      <div class=\"align-items-center\">\r\n        <div class=\"text-center\">\r\n          <span class=\"blog-header-logo text-dark\">\r\n            <a routerLink=\"/\">El Blog del Mayu</a>\r\n          </span>\r\n          <br><br>\r\n          <strong class=\"d-inline-block mb-2 text-primary\">(Videojuegos)</strong>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"nav-scroller py-1 mb-2 border-bottom\">\r\n      <nav class=\"nav d-flex justify-content-between\">\r\n        <a class=\"p-2 text-muted\" routerLink=\"/tecnologia\">Tecnología</a>\r\n        <a class=\"p-2 text-muted\" routerLink=\"/videojuegos\">Videojuegos</a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n  <main role=\"main\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 blog-main\">\r\n        <div class=\"blog-post\">\r\n          <a name=”tetris99torneo” id=\"tetris99torneo\">\r\n            <h2 class=\"blog-post-title\">Tetris 99: Primer Torneo</h2>\r\n          </a>\r\n          <p class=\"blog-post-meta\">Marzo 08, 2019 por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">Cristhian Mayuri</a>\r\n          </p>\r\n          <p class=\"text-justify\">El día de hoy, Viernes 08 de Marzo del 2019, tendrá lugar el primer torneo en línea oficial de Tetris 99, el cúal tendrá una duración de todo el fin de semana y que contará con un premio de 999 puntos de oro de Nintendo (más o menos $10).\r\n          </p>\r\n          <p class=\"text-justify\">Las reglas son sencillas, basicamente es jugar Tetris 99 todo el fin de semana y ganar todas las partidas que se pueda.\r\n          </p>\r\n          <p class=\"text-justify\">Más allá de que las reglas parezcan sencillas, el juego es otra historia. Tetris 99 para los que no lo sepan, es un Battleroyal basado en el clásico juego Tetris pero con la posibilidad de atacar y ser atacado por otros 98 jugadores (de ahí el nombre).\r\n          </p>\r\n\r\n          <div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#carousel\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#carousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"carousel-item active\">\r\n                <img class=\"d-block w-100 img-thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Fvideojuegos%2Ftetris99%2Ftetris99_1.jpg?alt=media&token=85e4cffc-60e5-40e5-879d-6bd395cbaa8e\" alt=\"Visual1\">\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <img class=\"d-block w-100 img-thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Fvideojuegos%2Ftetris99%2Ftetris99_2.jpg?alt=media&token=a3d13f71-a5cd-4254-9c70-d508212a8664\" alt=\"Visual2\">\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <img class=\"d-block w-100 img-thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Fvideojuegos%2Ftetris99%2Ftetris99_3.jpg?alt=media&token=5d8e3d19-60f3-4e5b-9609-45135552bc37\" alt=\"Visual3\">\r\n              </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#carousel\" role=\"button\" data-slide=\"prev\">\r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#carousel\" role=\"button\" data-slide=\"next\">\r\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </div>\r\n          \r\n          <p class=\"text-justify\">Para poder jugar Tetris 99 se necesita contar con una consola Nintendo Switch y una subscripción a Nintendo Switch Online. \r\n            Contando con estos dos requisitos, el juego puede ser descargado de manera totalmente gratuita.\r\n          </p>\r\n          <p class=\"text-justify\">En el blog del Mayu jugaremos al torneo con el objetivo de derrocar el reinado japonés, ya que los jugadores más Top del juego, son de esta nacionalidad, luego de obtener los resultados, este post será actualizado.\r\n          </p>\r\n          <p class=\"text-justify\">Espero la pasen muy bien, se despide <b>El Mayu</b>.</p>\r\n        </div>\r\n        <!-- Inicio de post resultados del torneo -->\r\n        <div class=\"blog-post\">\r\n          <a id=\"tetris99resultado\">\r\n            <h2 class=\"blog-post-title\">Tetris 99: Resultados del Torneo</h2>\r\n          </a>\r\n          <p class=\"blog-post-meta\">Marzo 12, 2019 por <a href=\"https://www.linkedin.com/in/cristhian-mayuri-quiroz/\">Cristhian Mayuri</a></p>\r\n          <p class=\"text-justify\">Después de participar en el torneo me percaté de dos cosas puntuales. Primero que nada,  \r\n            los japoneses iban muy enserio con respecto al torneo, ya que no pude ganar una sola partida, cuanto mucho llegué al \r\n            top 3. Como segundo punto me di cuenta de que, aunque hubiera podido ganar algunas partidas, probablemente no hubiera \r\n            podido recibir el premio, ya que en letras pequeñas decía que solo estaba disponible para residentes de Norteamérica, Canadá (salvo Quebec) y México. \r\n          </p>\r\n          <p class=\"text-center\">\r\n            <img src=\"https://firebasestorage.googleapis.com/v0/b/blogmayu-a1ffd.appspot.com/o/imagenes%2Fvideojuegos%2Ftetris99%2Ftetris99_4.jpg?alt=media&token=8c06b7c7-1585-4652-b52a-60978bf1b4c8\" class=\"img-thumbnail\" />\r\n          </p>\r\n          <p class=\"text-justify\">Como un dato adicional a tener en cuenta, el cartel del torneo solo aparecía si jugabas con una cuenta \r\n            de región Norteamérica (supongo que con Canadá y México también) y fue con esta con la que participé (más por probar que pensando en el premio).\r\n          </p>\r\n          <p class=\"text-justify\">Sin más noticias sobre el torneo, se despide <b>El Mayu</b>.\r\n          </p>\r\n        </div>\r\n      </div><!-- /.blog-main -->\r\n\r\n      <aside class=\"col-md-4 blog-sidebar\">\r\n        <div class=\"p-3 mb-3 bg-light rounded\">\r\n          <h4 class=\"font-italic\">Acerca del sitio web</h4>\r\n          <p class=\"mb-0 text-justify\">El blog del Mayu ha sido desarrollado con la finalidad de compartir mis experiencias en diversos campos durante mi día a día cotidiano.\r\n          </p>\r\n        </div>\r\n        <div class=\"p-3\">\r\n          <h4 class=\"font-italic\">Archivos</h4>\r\n          <ol class=\"list-unstyled mb-0\">\r\n            <li><a routerLink=\"/posts/2019/03\">Marzo 2019</a></li>\r\n            <li><a routerLink=\"/posts/2018/12\">Diciembre 2018</a></li>\r\n            <li><a routerLink=\"/posts/2018/8\">Agosto 2018</a></li>\r\n            <li><a routerLink=\"/posts/2018/7\">Julio 2018</a></li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"p-3\">\r\n          <h4 class=\"font-italic\">Sígueme también en:</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"https://github.com/mayuelcuarto\">GitHub</a></li>\r\n            <li><a href=\"https://www.youtube.com/channel/UCPN6mJNFnR_e6an6ToTX4pg?view_as=subscriber\">Youtube</a></li>\r\n          </ol>\r\n        </div>\r\n      </aside><!-- /.blog-sidebar -->\r\n    </div><!-- /.row -->\r\n  </main><!-- /.container -->\r\n\r\n  <footer class=\"blog-footer\">\r\n    <p>Este sitio web fue desarrollado con <a href=\"https://getbootstrap.com/\">Bootstrap</a></p>\r\n    <p>\r\n      <a routerLink=\".\" fragment=\"top-vj\">Subir</a>\r\n    </p>\r\n  </footer>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/videojuegos/videojuegos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/videojuegos/videojuegos.component.ts ***!
  \*****************************************************************/
/*! exports provided: VideojuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegosComponent", function() { return VideojuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideojuegosComponent = /** @class */ (function () {
    function VideojuegosComponent() {
    }
    VideojuegosComponent.prototype.ngOnInit = function () {
    };
    VideojuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videojuegos',
            template: __webpack_require__(/*! ./videojuegos.component.html */ "./src/app/components/videojuegos/videojuegos.component.html"),
            styles: [__webpack_require__(/*! ./videojuegos.component.css */ "./src/app/components/videojuegos/videojuegos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideojuegosComponent);
    return VideojuegosComponent;
}());



/***/ }),

/***/ "./src/app/modals/modal-post/modal-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/modals/modal-post/modal-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1wb3N0L21vZGFsLXBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modals/modal-post/modal-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modals/modal-post/modal-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalPost\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n          {{ !this.postService.selectedPost.id ? 'Nuevo Post' : 'Editar Post' }}\r\n        </h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCloseModal(formPost)\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #formPost=\"ngForm\" (ngSubmit)=\"onSavePost(formPost)\">\r\n          <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.postService.selectedPost.id\">\r\n          <input type=\"hidden\" name=\"userUid\" [value]=\"userUid\">\r\n          <input type=\"hidden\" name=\"createdAt\" [value]=\"today\">\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"titulo\">Titulo</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"titulo\" placeholder=\"Título\" [(ngModel)]=\"this.postService.selectedPost.titulo\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"portada\">Portada</label>\r\n              <input type=\"text\" name=\"portada\" class=\"form-control\" placeholder=\"Portada\" [(ngModel)]=\"this.postService.selectedPost.portada\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"autor\">Autor</label>\r\n              <input type=\"text\" name=\"autor\" class=\"form-control\" placeholder=\"Autor\" [(ngModel)]=\"this.postService.selectedPost.autor\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"video\">Video</label>\r\n              <input type=\"text\" name=\"video\" class=\"form-control\" placeholder=\"Video\" [(ngModel)]=\"this.postService.selectedPost.video\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"fecha\">Fecha</label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" name=\"fecha\" class=\"form-control\" placeholder=\"Fecha\" [(ngModel)]=\"this.postService.selectedPost.fecha\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"categoria\">Categoría</label>\r\n              <select class=\"form-control\" name=\"categoria\" [(ngModel)]=\"this.postService.selectedPost.categoria\">\r\n                <option value=\"videojuegos\">Videojuegos</option>\r\n                <option value=\"tecnologia\">Tecnologia</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"introduccion\" class=\"col-form-label\">Introducción:</label>\r\n            <textarea class=\"form-control\" rows=\"4\" name=\"introduccion\" [(ngModel)]=\"this.postService.selectedPost.introduccion\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"descripcion\" class=\"col-form-label\">Descripcion:</label>\r\n            <textarea class=\"form-control\" rows=\"4\" name=\"descripcion\" [(ngModel)]=\"this.postService.selectedPost.descripcion\"></textarea>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #btnClose (click)=\"onCloseModal(formPost)\">Cerrar</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Guardar Post</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modals/modal-post/modal-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modals/modal-post/modal-post.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPostComponent", function() { return ModalPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");



var ModalPostComponent = /** @class */ (function () {
    function ModalPostComponent(postService) {
        this.postService = postService;
        this.today = new Date();
    }
    ModalPostComponent.prototype.ngOnInit = function () {
    };
    ModalPostComponent.prototype.onSavePost = function (postForm) {
        if (postForm.value.id == null) {
            // New
            postForm.value.userUid = this.userUid;
            postForm.value.createdAt = this.today;
            var fechaDay = postForm.value.fecha.day;
            var fechaMonth = postForm.value.fecha.month;
            var fechaYear = postForm.value.fecha.year;
            postForm.value.fechaDay = fechaDay;
            postForm.value.fechaMonth = fechaMonth;
            postForm.value.fechaYear = fechaYear;
            this.postService.addPost(postForm.value);
        }
        else {
            // Update
            var fechaDay = postForm.value.fecha.day;
            var fechaMonth = postForm.value.fecha.month;
            var fechaYear = postForm.value.fecha.year;
            postForm.value.fechaDay = fechaDay;
            postForm.value.fechaMonth = fechaMonth;
            postForm.value.fechaYear = fechaYear;
            this.postService.updatePost(postForm.value);
        }
        postForm.resetForm();
        this.btnClose.nativeElement.click();
    };
    ModalPostComponent.prototype.onCloseModal = function (postForm) {
        postForm.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnClose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalPostComponent.prototype, "btnClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalPostComponent.prototype, "userUid", void 0);
    ModalPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-post',
            template: __webpack_require__(/*! ./modal-post.component.html */ "./src/app/modals/modal-post/modal-post.component.html"),
            styles: [__webpack_require__(/*! ./modal-post.component.css */ "./src/app/modals/modal-post/modal-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], ModalPostComponent);
    return ModalPostComponent;
}());



/***/ }),

/***/ "./src/app/pipes/safePipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/safePipe.ts ***!
  \***********************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(afsAuth, afs) {
        this.afsAuth = afsAuth;
        this.afs = afs;
    }
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) {
                resolve(userData),
                    _this.updateUserData(userData.user);
            }).catch(function (err) { return console.log(reject(err)); });
        });
    };
    AuthService.prototype.loginEmailUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginFacebookUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
            .then(function (credential) { _this.updateUserData(credential.user); });
    };
    AuthService.prototype.loginGoogleUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider())
            .then(function (credential) { _this.updateUserData(credential.user); });
    };
    AuthService.prototype.logoutUser = function () {
        this.afsAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            id: user.uid,
            email: user.email,
            roles: {
                simpleUser: true
            }
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.isUserAdmin = function (userUid) {
        return this.afs.doc("users/" + userUid).valueChanges();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PostService = /** @class */ (function () {
    function PostService(afs) {
        this.afs = afs;
        this.selectedPost = {
            id: null
        };
    }
    PostService.prototype.getAllPosts = function () {
        this.postsCollection = this.afs.collection('posts');
        return this.posts = this.postsCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    PostService.prototype.getPostsByYearMonth = function (year, month) {
        year = +year;
        month = +month;
        this.postsCollection = this.afs.collection('posts', function (ref) { return ref.where('fechaYear', '==', year).where('fechaMonth', '==', month); });
        return this.posts = this.postsCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    PostService.prototype.getOnePost = function (idPost) {
        this.postDoc = this.afs.doc("posts/" + idPost);
        return this.post = this.postDoc.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists == false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    };
    PostService.prototype.addPost = function (post) {
        this.postsCollection.add(post);
    };
    PostService.prototype.updatePost = function (post) {
        var idPost = post.id;
        this.postDoc = this.afs.doc("posts/" + idPost);
        this.postDoc.update(post);
    };
    PostService.prototype.deletePost = function (idPost) {
        this.postDoc = this.afs.doc("posts/" + idPost);
        this.postDoc.delete();
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBFbaW21v8WiZiwRecCxWyr0RMWITgSI98",
        authDomain: "blogmayu-a1ffd.firebaseapp.com",
        databaseURL: "https://blogmayu-a1ffd.firebaseio.com",
        projectId: "blogmayu-a1ffd",
        storageBucket: "blogmayu-a1ffd.appspot.com",
        messagingSenderId: "932547514225"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp64\www\blog-mayu\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map