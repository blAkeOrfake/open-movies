"use strict";
(self["webpackChunkopen_movies"] = self["webpackChunkopen_movies"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-details/movie-details.component */ 249);
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-list/movies-list.component */ 5871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_1__.MoviesListComponent
}, {
  path: 'details',
  component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_0__.MovieDetailsComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'open-movies';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    consts: [[1, "page"], [1, "page__container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: [".page[_ngcontent-%COMP%] {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(4, 16, 58) 35%, rgb(23, 60, 125) 100%);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__container[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnR0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg0LDE2LDU4LDEpIDM1JSwgcmdiYSgyMyw2MCwxMjUsMSkgMTAwJSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmX19jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list/movies-list.component */ 5871);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ 4705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details/movie-details.component */ 249);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 5725);
/* harmony import */ var _now_showing_now_showing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./now-showing/now-showing.component */ 3991);
/* harmony import */ var _search_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-categories/search-categories.component */ 5248);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/loader/loader.component */ 8556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);




















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_19__.NgxPaginationModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__.MoviesListComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__.MovieDetailsComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__.TopBarComponent, _now_showing_now_showing_component__WEBPACK_IMPORTED_MODULE_6__.NowShowingComponent, _search_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_7__.SearchCategoriesComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_19__.NgxPaginationModule],
    exports: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent]
  });
})();

/***/ }),

/***/ 249:
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieDetailsComponent: () => (/* binding */ MovieDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../query.service */ 3363);
/* harmony import */ var _movie_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-storage.service */ 4038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);






function MovieDetailsComponent_mat_card_50_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", movie_r2.poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", movie_r2.title, " ");
  }
}
function MovieDetailsComponent_mat_card_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Last searched: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MovieDetailsComponent_mat_card_50_div_5_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.watchedMovies);
  }
}
class MovieDetailsComponent {
  constructor(route, queryService, movieStorageService) {
    this.route = route;
    this.queryService = queryService;
    this.movieStorageService = movieStorageService;
    this.watchedMovies = [];
    this.p = this.movieStorageService.getLastPaginationFromStorage();
  }
  ngOnInit() {
    this.watchedMovies = this.movieStorageService.getMoviesFromStorage();
    const imdbID = this.route.snapshot.queryParamMap.get('id');
    this.queryService.getMovies(true, imdbID).subscribe(data => {
      this.movie = data;
      this.movieStorageService.addMovieToStorage(data.Title, data.Poster);
    });
  }
  static #_ = this.ɵfac = function MovieDetailsComponent_Factory(t) {
    return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_query_service__WEBPACK_IMPORTED_MODULE_0__.QueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_movie_storage_service__WEBPACK_IMPORTED_MODULE_1__.MovieStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MovieDetailsComponent,
    selectors: [["app-movie-details"]],
    decls: 51,
    vars: 14,
    consts: [["id", "main", 1, "mat-elevation-z1"], ["alt", "Movie poster image", 3, "src"], ["class", "mat-elevation-z1", 4, "ngIf"], [1, "mat-elevation-z1"], ["fxFlex", "", "fxLayout", "column", "fxLayoutGap", "10px", 2, "height", "50vh"], ["fxLayout", "row wrap"], ["fxFlex", "25", "fxFlex.md", "33", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "style", "padding: 5px;", 4, "ngFor", "ngForOf"], ["fxFlex", "25", "fxFlex.md", "33", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", 2, "padding", "5px"], ["mat-card-image", "", "alt", "Movie poster image", 2, "max-width", "150px", "height", "auto", 3, "src"]],
    template: function MovieDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Actors: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Awards: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "BoxOffice: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Country: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "DVD: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Director: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Genre: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Language: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Metascore: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Plot: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Production: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, MovieDetailsComponent_mat_card_50_Template, 6, 1, "mat-card", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.movie.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Actors, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Awards, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.BoxOffice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.DVD, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Director, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Genre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Language, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Metascore, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Plot, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.movie.Production, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.watchedMovies);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle],
    styles: ["#main[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4038:
/*!******************************************!*\
  !*** ./src/app/movie-storage.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovieStorageService: () => (/* binding */ MovieStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class StorageMovieClass {}
class MovieStorageService {
  addMovieToStorage(titleParam, posterParam) {
    const savedMovies = [];
    savedMovies.push({
      title: titleParam,
      poster: posterParam
    });
    let s = localStorage.getItem('savedMovies');
    if (s) {
      s = JSON.parse(s);
      for (const mov of s) {
        if (mov.title !== titleParam) {
          savedMovies.push(mov);
        }
      }
      localStorage.removeItem('savedMovies');
    }
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }
  getMoviesFromStorage() {
    return JSON.parse(localStorage.getItem('savedMovies'));
  }
  savePaginationToStorage(currentPage) {
    localStorage.setItem('currentPage', currentPage.toString());
  }
  getLastPaginationFromStorage() {
    return +localStorage.getItem('currentPage') || 1;
  }
  saveSearchToStorage(search) {
    localStorage.setItem('search', search);
  }
  getLastSearchFromStorage() {
    return localStorage.getItem('search') || 'spider';
  }
  saveLastYearSearchToStorage(year) {
    if (year) {
      if (this.getLastYearSearchFromStorage() !== year) {
        this.savePaginationToStorage(1);
      }
      localStorage.setItem('year', year.toString());
    } else {
      localStorage.removeItem('year');
    }
  }
  getLastYearSearchFromStorage() {
    return +localStorage.getItem('year') || '';
  }
  saveLastTypeSearchToStorage(type) {
    if (type) {
      if (this.getLastTypeSearchFromStorage() !== type) {
        this.savePaginationToStorage(1);
      }
      localStorage.setItem('type', type);
    } else {
      localStorage.removeItem('type');
    }
  }
  getLastTypeSearchFromStorage() {
    return localStorage.getItem('type') || undefined;
  }
  static #_ = this.ɵfac = function MovieStorageService_Factory(t) {
    return new (t || MovieStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MovieStorageService,
    factory: MovieStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5871:
/*!******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoviesListComponent: () => (/* binding */ MoviesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../query.service */ 3363);
/* harmony import */ var _movie_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-storage.service */ 4038);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 4705);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 5725);
/* harmony import */ var _now_showing_now_showing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../now-showing/now-showing.component */ 3991);
/* harmony import */ var _search_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-categories/search-categories.component */ 5248);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ 8556);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 1060);












function MoviesListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MoviesListComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Search results for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.searchInput);
  }
}
function MoviesListComponent_div_6_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No results found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MoviesListComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MoviesListComponent_div_6_ng_template_2_div_0_Template, 2, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r4.searchInput == null ? null : ctx_r4.searchInput.length) > 0);
  }
}
const _c0 = function () {
  return ["/details"];
};
const _c1 = function (a0) {
  return {
    id: a0
  };
};
function MoviesListComponent_div_6_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, card_r8.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", card_r8.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", card_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", card_r8.description, ", ", card_r8.type, " ");
  }
}
const _c2 = function (a1, a2) {
  return {
    itemsPerPage: 10,
    currentPage: a1,
    totalItems: a2
  };
};
function MoviesListComponent_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MoviesListComponent_div_6_div_4_ng_container_1_Template, 7, 9, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ctx_r5.cardList, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c2, ctx_r5.p, ctx_r5.total)));
  }
}
function MoviesListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MoviesListComponent_div_6_ng_container_1_Template, 5, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MoviesListComponent_div_6_ng_template_2_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MoviesListComponent_div_6_div_4_Template, 3, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.cardList.length > 0)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.cardList.length > 0);
  }
}
class MoviesListComponent {
  // @Input() set searchInput(value: string) {
  // 	this._searchInput = value;
  // 	this.loadMovies();
  // };
  get searchInput() {
    return this._searchInput;
  }
  constructor(queryService, movieStorageService, router, cRef) {
    this.queryService = queryService;
    this.movieStorageService = movieStorageService;
    this.router = router;
    this.cRef = cRef;
    this.loading = false;
    this.cardList = [];
    this.total = 0;
  }
  generateCards(movies) {
    if (!movies) return;
    this.p = this.movieStorageService.getLastPaginationFromStorage();
    for (const movie of movies) {
      this.cardList.push({
        imgSrc: movie.Poster,
        title: movie.Title,
        description: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type
      });
    }
    this.loading = false;
    this.cRef.detectChanges();
  }
  loadMovies() {
    this.cardList = [];
    this.loading = true;
    this.queryService.getMovies(false).subscribe(data => {
      this.total = data.totalResults;
      this.generateCards(data.Search);
    });
  }
  goToDetails(imdbID) {
    this.router.navigateByUrl(`/details`, /* Removed unsupported properties by Angular migration: queryParams. */{});
  }
  searchValueChanged(searchInputValue) {
    this._searchInput = searchInputValue;
    this.loadMovies();
    document.getElementById('search-results-box').scrollIntoView({
      behavior: 'smooth'
    });
  }
  pageChanged(event) {
    this.p = event;
    this.movieStorageService.savePaginationToStorage(this.p);
    this.loadMovies();
  }
  static #_ = this.ɵfac = function MoviesListComponent_Factory(t) {
    return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_query_service__WEBPACK_IMPORTED_MODULE_0__.QueryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_movie_storage_service__WEBPACK_IMPORTED_MODULE_1__.MovieStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MoviesListComponent,
    selectors: [["app-movies-list"]],
    decls: 9,
    vars: 2,
    consts: [[1, "list-container"], [3, "searchValueChanged"], ["class", "spinner", 4, "ngIf"], ["id", "search-results-box", 4, "ngIf"], [1, "footer-spacer"], [1, "spinner"], ["id", "search-results-box"], [4, "ngIf", "ngIfElse"], ["noResultsTemplate", ""], ["class", "result-cards-list", 4, "ngIf"], [1, "search-results__label"], ["class", "search-results__no-results", 4, "ngIf"], [1, "search-results__no-results"], [1, "result-cards-list"], [4, "ngFor", "ngForOf"], [1, "single-card", 3, "routerLink", "queryParams"], ["mat-card-image", "", "alt", "card image", 1, "single-card__image", 3, "src"], [1, "single-card__title"], [1, "single-card__content"]],
    template: function MoviesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-search", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("searchValueChanged", function MoviesListComponent_Template_app_search_searchValueChanged_2_listener($event) {
          return ctx.searchValueChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-now-showing")(4, "app-search-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MoviesListComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MoviesListComponent_div_6_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Jakub Rosner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cardList && !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopBarComponent, _now_showing_now_showing_component__WEBPACK_IMPORTED_MODULE_4__.NowShowingComponent, _search_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_5__.SearchCategoriesComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe],
    styles: [".list-container[_ngcontent-%COMP%] {\n  padding: 36px;\n  width: calc(100% - 36px);\n  height: 100%;\n  overflow-y: scroll;\n  padding-right: 17px; \n\n  box-sizing: content-box;\n  padding-bottom: 100px;\n}\n\n.search-results__label[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n.search-results__no-results[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 24px;\n  font-weight: 300;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  width: 52%;\n  background-color: #7965fd;\n  color: white;\n  text-align: center;\n  border-radius: 25px 25px 0px 0px;\n}\n\n.spacer-medium[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.footer-spacer[_ngcontent-%COMP%] {\n  height: 100px;\n  color: transparent;\n  visibility: hidden;\n}\n\n.result-cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.result-cards-list[_ngcontent-%COMP%]   .single-card[_ngcontent-%COMP%] {\n  width: 266px;\n  border-radius: 16px;\n  background-color: #2C3758;\n  cursor: pointer;\n}\n.result-cards-list[_ngcontent-%COMP%]   .single-card__title[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #FEFEFE;\n  background-color: #2C3758;\n}\n.result-cards-list[_ngcontent-%COMP%]   .single-card__content[_ngcontent-%COMP%] {\n  border-radius: 0 0 16px 16px;\n  color: #FEFEFE;\n  background-color: #2C3758;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: 48px 0px 24px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQSxFQUFBLGlFQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtBQUFKOztBQUdJO0VBQ0ksZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUFGUjtBQUlJO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUFKUjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFPQTtFQUNJLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSko7QUFTSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsZUFBQTtBQVJSO0FBWVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBVlo7QUFZUTtFQUNJLDRCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0FBWFo7O0FBZUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVpKIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzNnB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7IC8qIEluY3JlYXNlL2RlY3JlYXNlIHRoaXMgdmFsdWUgZm9yIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eSAqL1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgICAmX19sYWJlbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG4gICAgJl9fbm8tcmVzdWx0cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG5cbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG59XG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNTIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTY1ZmQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbn1cbi5zcGFjZXItbWVkaXVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZm9vdGVyLXNwYWNlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ucmVzdWx0LWNhcmRzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTZweDtcblxuICAgIC8vIGZsZXhcbiAgICAvLyBmeEZsZXggZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjEwcHhcIiBzdHlsZT1cImhlaWdodDogZml0LWNvbnRlbnRcIlxuXG4gICAgLnNpbmdsZS1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDI2NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNzU4O1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgIH1cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMzc1ODtcbiAgICAgICAgfVxuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMzc1ODtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zcGlubmVyIHtcbiAgICBtYXJnaW46IDQ4cHggMHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7259:
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoviesService: () => (/* binding */ MoviesService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class MoviesService {
  constructor(http) {
    this.http = http;
  }
  get(searchCase) {
    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIEndpoint + "?apikey=" + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIKey + searchCase);
  }
  static #_ = this.ɵfac = function MoviesService_Factory(t) {
    return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MoviesService,
    factory: MoviesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3991:
/*!******************************************************!*\
  !*** ./src/app/now-showing/now-showing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NowShowingComponent: () => (/* binding */ NowShowingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NowShowingComponent {
  static #_ = this.ɵfac = function NowShowingComponent_Factory(t) {
    return new (t || NowShowingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NowShowingComponent,
    selectors: [["app-now-showing"]],
    decls: 20,
    vars: 0,
    consts: [[1, "now-showing-container"], [1, "now-showing-container__label"], [1, "carousel"], ["id", "slider"], ["type", "radio", "name", "slider", "id", "s1"], ["type", "radio", "name", "slider", "id", "s2"], ["type", "radio", "name", "slider", "id", "s3", "checked", ""], ["type", "radio", "name", "slider", "id", "s4"], ["type", "radio", "name", "slider", "id", "s5"], ["for", "s1", "id", "slide1"], ["for", "s2", "id", "slide2"], ["for", "s3", "id", "slide3"], ["for", "s4", "id", "slide4"], ["for", "s5", "id", "slide5"], [1, "single-row"], [1, "view-details-btn"]],
    template: function NowShowingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Showing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4)(8, "input", 5)(9, "input", 6)(10, "input", 7)(11, "input", 8)(12, "label", 9)(13, "label", 10)(14, "label", 11)(15, "label", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14)(18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".now-showing-container[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.now-showing-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n.now-showing-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.now-showing-container[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.now-showing-container[_ngcontent-%COMP%]   .single-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.now-showing-container[_ngcontent-%COMP%]   .view-details-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background-color: #4DCAE7;\n  width: 140px;\n  height: 40px;\n  color: #FEFEFE;\n  font-size: 18px;\n  position: relative;\n  bottom: 36px;\n}\n\n#slider[_ngcontent-%COMP%] {\n  height: 400px;\n  position: relative;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n}\n\n#slider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 250px;\n  height: 80%;\n  border-radius: 16px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n  transition: transform 0.4s ease;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  transform: translate3d(-60%, 0, -50px);\n  rotate: -2deg;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  transform: translate3d(-30%, 0, -25px);\n  rotate: -1deg;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%] {\n  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);\n  transform: translate3d(0, 0, 0);\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  transform: translate3d(30%, 0, -25px);\n  rotate: 1deg;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  transform: translate3d(60%, 0, -50px);\n  rotate: 2deg;\n}\n\n#slide1[_ngcontent-%COMP%] {\n  background: #00BCD4;\n  content: url('/open-movies/img_avengers.jpeg');\n}\n\n#slide2[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  content: url('/open-movies/img_hmf.jpeg');\n}\n\n#slide3[_ngcontent-%COMP%] {\n  background: #CDDC39;\n  content: url('/open-movies/img_top_gun.jpeg');\n}\n\n#slide4[_ngcontent-%COMP%] {\n  background: #FFC107;\n  content: url('/open-movies/img_gotg.jpeg');\n}\n\n#slide5[_ngcontent-%COMP%] {\n  background: #FF5722;\n  content: url('/open-movies/img_fast.jpeg');\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm93LXNob3dpbmcvbm93LXNob3dpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFFQSx5QkFBQTtVQUFBLGlCQUFBO0FBRlI7QUFJSTtFQUNJLGFBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBSFI7QUFLSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7QUFOUjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFVRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVMsUUFBQTtFQUNULGVBQUE7RUFDQSwrQkFBQTtBQU5KOztBQVNFOzs7RUFHRSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQU5KOztBQVNFOzs7RUFHRSwyRUFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtBQU5KOztBQVNFOzs7RUFHRSw4RUFBQTtFQUNBLCtCQUFBO0FBTko7O0FBU0U7OztFQUdFLDJFQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0U7OztFQUdFLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0k7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0FBTlI7O0FBUUk7RUFDSSxtQkFBQTtFQUNBLHlDQUFBO0FBTFI7O0FBT0k7RUFDSSxtQkFBQTtFQUNBLDZDQUFBO0FBSlI7O0FBTUk7RUFDSSxtQkFBQTtFQUNBLDBDQUFBO0FBSFI7O0FBS0k7RUFDSSxtQkFBQTtFQUNBLDBDQUFBO0FBRlIiLCJzb3VyY2VzQ29udGVudCI6WyIubm93LXNob3dpbmctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLmNhcm91c2VsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbiAgICBbdHlwZT1yYWRpb10ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zaW5nbGUtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC52aWV3LWRldGFpbHMtYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERDQUU3O1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG5cbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAzNnB4O1xuICAgIH1cbn1cblxuI3NsaWRlciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gIFxuICAjc2xpZGVyIGxhYmVsIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xuICB9XG4gIFxuICAjczE6Y2hlY2tlZCB+ICNzbGlkZTQsICNzMjpjaGVja2VkIH4gI3NsaWRlNSxcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGUxLCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXG4gICNzNTpjaGVja2VkIH4gI3NsaWRlMyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMzcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTYwJSwwLC01MHB4KTtcbiAgICByb3RhdGU6IC0yZGVnO1xuICB9XG4gIFxuICAjczE6Y2hlY2tlZCB+ICNzbGlkZTUsICNzMjpjaGVja2VkIH4gI3NsaWRlMSxcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGUyLCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXG4gICNzNTpjaGVja2VkIH4gI3NsaWRlNCB7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjMpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMCUsMCwtMjVweCk7XG4gICAgcm90YXRlOiAtMWRlZztcbiAgfVxuICBcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGUxLCAjczI6Y2hlY2tlZCB+ICNzbGlkZTIsXG4gICNzMzpjaGVja2VkIH4gI3NsaWRlMywgI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxuICAjczU6Y2hlY2tlZCB+ICNzbGlkZTUge1xuICAgIGJveC1zaGFkb3c6IDAgMTNweCAyNXB4IDAgcmdiYSgwLDAsMCwuMyksIDAgMTFweCA3cHggMCByZ2JhKDAsMCwwLC4xOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIH1cbiAgXG4gICNzMTpjaGVja2VkIH4gI3NsaWRlMiwgI3MyOmNoZWNrZWQgfiAjc2xpZGUzLFxuICAjczM6Y2hlY2tlZCB+ICNzbGlkZTQsICNzNDpjaGVja2VkIH4gI3NsaWRlNSxcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGUxIHtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMyksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAlLDAsLTI1cHgpO1xuICAgIHJvdGF0ZTogMWRlZztcbiAgfVxuICBcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGUzLCAjczI6Y2hlY2tlZCB+ICNzbGlkZTQsXG4gICNzMzpjaGVja2VkIH4gI3NsaWRlNSwgI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxuICAjczU6Y2hlY2tlZCB+ICNzbGlkZTIge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjM3KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDYwJSwwLC01MHB4KTtcbiAgICByb3RhdGU6IDJkZWc7XG4gIH1cbiAgXG4gICAgI3NsaWRlMSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMEJDRDQ7XG4gICAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfYXZlbmdlcnMuanBlZycpO1xuICAgIH1cbiAgICAjc2xpZGUyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19obWYuanBlZycpXG4gICAgfVxuICAgICNzbGlkZTMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0REQzM5O1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX3RvcF9ndW4uanBlZycpXG4gICAgfVxuICAgICNzbGlkZTQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX2dvdGcuanBlZycpXG4gICAgfVxuICAgICNzbGlkZTUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkY1NzIyO1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX2Zhc3QuanBlZycpXG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3363:
/*!**********************************!*\
  !*** ./src/app/query.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryService: () => (/* binding */ QueryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.service */ 7259);
/* harmony import */ var _movie_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-storage.service */ 4038);



class QueryService {
  constructor(moviesService, movieStorageService) {
    this.moviesService = moviesService;
    this.movieStorageService = movieStorageService;
  }
  getMovies(searchById, id = undefined) {
    const search = this.movieStorageService.getLastSearchFromStorage();
    const page = this.movieStorageService.getLastPaginationFromStorage();
    const year = this.movieStorageService.getLastYearSearchFromStorage();
    let type = this.movieStorageService.getLastTypeSearchFromStorage();
    if (type === 'All') {
      type = '';
    }
    if (searchById) {
      return this.moviesService.get(`&i=${id}`);
    } else {
      return this.moviesService.get(`&s=${search}&page=${page}&y=${year}&type=${type}`);
    }
  }
  static #_ = this.ɵfac = function QueryService_Factory(t) {
    return new (t || QueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_movies_service__WEBPACK_IMPORTED_MODULE_0__.MoviesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_movie_storage_service__WEBPACK_IMPORTED_MODULE_1__.MovieStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: QueryService,
    factory: QueryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5248:
/*!******************************************************************!*\
  !*** ./src/app/search-categories/search-categories.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchCategoriesComponent: () => (/* binding */ SearchCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SearchCategoriesComponent {
  static #_ = this.ɵfac = function SearchCategoriesComponent_Factory(t) {
    return new (t || SearchCategoriesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchCategoriesComponent,
    selectors: [["app-search-categories"]],
    decls: 46,
    vars: 0,
    consts: [[1, "search-categories-container"], [1, "search-categories-container__label"], [1, "categories-list"], [1, "category"], [1, "category__icon"], [1, "category__name"]],
    template: function SearchCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\uD83E\uDD2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uD83D\uDC7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83D\uDE08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Thriller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uD83E\uDD70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Romantic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3)(27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\uD83E\uDD20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3)(32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\uD83D\uDC7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sci-fi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3)(37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\uD83D\uDD75\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Crime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3)(42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\uD83E\uDDF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".search-categories-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.search-categories-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background-color: #2C3758;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category__icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category__name[_ngcontent-%COMP%] {\n  color: #FEFEFE;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoLWNhdGVnb3JpZXMvc2VhcmNoLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFEUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFGWjtBQUlZO0VBQ0ksZUFBQTtBQUZoQjtBQUlZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNhdGVnb3JpZXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTZweDtcblxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgICAgICZfX2ljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX25hbWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4705:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _movie_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie-storage.service */ 4038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 5309);







function SearchComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r1, " ");
  }
}
const _c0 = function (a0) {
  return {
    "advanced-filters--hidden": a0
  };
};
class SearchComponent {
  constructor(movieStorageService) {
    this.movieStorageService = movieStorageService;
    this.searchValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.movieTypes = ['All', 'Movie', 'Series', 'Episode'];
    this.filtersActive = false;
    this.typeInput = this.movieTypes[0];
  }
  ngOnInit() {
    // this.searchInput = this.movieStorageService.getLastSearchFromStorage();
    this.yearInput = +this.movieStorageService.getLastYearSearchFromStorage() || undefined;
    this.typeInput = this.movieStorageService.getLastTypeSearchFromStorage() || this.movieTypes[0];
  }
  handleSubmit() {
    this.movieStorageService.saveSearchToStorage(this.searchInput);
    this.movieStorageService.saveLastYearSearchToStorage(this.yearInput);
    this.movieStorageService.saveLastTypeSearchToStorage(this.typeInput);
    this.searchValueChanged.emit(this.searchInput);
  }
  toggleFilters() {
    this.filtersActive = !this.filtersActive;
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_movie_storage_service__WEBPACK_IMPORTED_MODULE_0__.MovieStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    outputs: {
      searchValueChanged: "searchValueChanged"
    },
    decls: 21,
    vars: 7,
    consts: [[3, "ngSubmit"], [1, "searchBar"], [1, "searchBar__left"], [1, "search"], [1, "material-symbols-outlined", "clickable", 3, "click"], [1, "search-input"], ["type", "text", "placeholder", "Search movie", "name", "searchInput", 1, "transparent-input", 3, "ngModel", "ngModelChange"], [1, "filters"], [1, "advanced-filters", 3, "ngClass"], [1, "advanced-filters__filter", "input-year"], [1, "material-symbols-outlined"], ["type", "number", "placeholder", "ex. '2023", "name", "yearInput", 1, "transparent-filter", 3, "ngModel", "ngModelChange"], [1, "advanced-filters__filter"], ["name", "typeInput", 1, "transparent-filter", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_0_listener($event) {
          ctx.handleSubmit();
          return $event.preventDefault();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_span_click_4_listener() {
          return ctx.handleSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.searchInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_span_click_9_listener() {
          return ctx.toggleFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " tune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.yearInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12)(17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " verified ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_mat_select_ngModelChange_19_listener($event) {
          return ctx.typeInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SearchComponent_mat_option_20_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, !ctx.filtersActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.yearInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.movieTypes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption],
    styles: [".searchBar[_ngcontent-%COMP%] {\n  background-color: #2C3758;\n  height: 64px;\n  width: 100%;\n  border-radius: 36px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n.searchBar__left[_ngcontent-%COMP%] {\n  display: flex;\n}\n.searchBar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.searchBar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.searchBar[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-right: 24px;\n}\n\n.advanced-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  transition: height 0.4s ease-out;\n}\n.advanced-filters__filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background-color: #2C3758;\n  height: 64px;\n  width: 100%;\n  padding: 0px 26px;\n  border-radius: 32px;\n  margin-top: 16px;\n  visibility: visible;\n  transition: height 0.4s ease, visibility 0.4s ease;\n}\n.advanced-filters--hidden[_ngcontent-%COMP%]   .advanced-filters__filter[_ngcontent-%COMP%] {\n  height: 0px;\n  pointer-events: none;\n  visibility: hidden;\n  transition: height 0.4s ease, visibility 0.2s ease;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #ABACB3;\n}\n\ninput.transparent-input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  position: relative;\n  display: block;\n  outline: none;\n  padding: 3px;\n  color: #ABACB3;\n  width: 360px;\n  font-size: 24px;\n}\n\ninput.transparent-filter[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  position: relative;\n  display: block;\n  outline: none;\n  padding: 3px;\n  color: #ABACB3;\n  font-size: 24px;\n}\n\n.input-year[_ngcontent-%COMP%] {\n  width: 216px;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #ABACB3;\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #ABACB3;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ABACB3;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #ABACB3;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n          appearance: textfield;\n  -moz-appearance: textfield;\n}\n\n  .mat-mdc-select-arrow {\n  color: #ABACB3;\n}\n  .mat-mdc-select-value {\n  color: #ABACB3;\n  font-size: 22px;\n  font-weight: 500;\n}\n  .mdc-menu-surface.mat-mdc-select-panel {\n  background-color: rgba(44, 55, 96, 0.9803921569);\n}\n  .mdc-list-item__primary-text {\n  color: #ABACB3;\n}\n  .mdc-list-item--selected .mdc-list-item__primary-text {\n  color: #FEFEFE;\n}\n  .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal::after {\n  color: #4dcae7;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQURKO0FBR0k7RUFDSSxhQUFBO0FBRFI7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFJSTtFQUNJLG1CQUFBO0FBRlI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0FBSko7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQUxSO0FBU1E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0FBUFo7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7QUFSSjs7QUFVQTtFQUE4QixjQUFBO0FBTjlCOztBQU9BO0VBQW9CLGNBQUE7QUFIcEI7O0FBSUE7RUFBcUIsY0FBQTtBQUFyQjs7QUFDQTtFQUF5QixjQUFBO0FBR3pCOztBQUZBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUhBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDBCQUFBO0FBTUo7O0FBRkk7RUFDSSxjQUFBO0FBS1I7QUFISTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLUjtBQUhJO0VBQ0ksZ0RBQUE7QUFLUjtBQUhJO0VBQ0ksY0FBQTtBQUtSO0FBSEk7RUFDSSxjQUFBO0FBS1I7QUFISTtFQUNJLGNBQUE7QUFLUiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hCYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG5cbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuXG4gICAgJl9fbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnNlYXJjaCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICB9XG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICB9XG4gICAgLmZpbHRlcnMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgIH1cbn1cblxuLmFkdmFuY2VkLWZpbHRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG5cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cyBlYXNlLW91dDtcblxuICAgICZfX2ZpbHRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNzU4O1xuXG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cyBlYXNlLCB2aXNpYmlsaXR5IDAuNHMgZWFzZTtcblxuICAgIH1cbiAgICAmLS1oaWRkZW4ge1xuICAgICAgICAuYWR2YW5jZWQtZmlsdGVyc19fZmlsdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cyBlYXNlLCB2aXNpYmlsaXR5IDAuMnMgZWFzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICNBQkFDQjM7XG59XG5pbnB1dC50cmFuc3BhcmVudC1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBjb2xvcjogI0FCQUNCMztcblxuICAgIHdpZHRoOiAzNjBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5pbnB1dC50cmFuc3BhcmVudC1maWx0ZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgY29sb3I6ICNBQkFDQjM7XG5cbiAgICBmb250LXNpemU6IDI0cHg7XG5cbn1cbi5pbnB1dC15ZWFyIHtcbiAgICB3aWR0aDogMjE2cHg7XG59XG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI0FCQUNCMzt9IFxuOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogI0FCQUNCMzsgfVxuOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICNBQkFDQjM7IH1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI0FCQUNCMzsgfVxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLm1hdC1tZGMtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6ICNBQkFDQjM7XG4gICAgfVxuICAgIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiAjQUJBQ0IzO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5tZGMtbWVudS1zdXJmYWNlLm1hdC1tZGMtc2VsZWN0LXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzc2MGZhO1xuICAgIH1cbiAgICAubWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNBQkFDQjM7XG4gICAgfVxuICAgIC5tZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCAubWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgfVxuICAgIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1taW5pbWFsOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiAjNGRjYWU3O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8556:
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LoaderComponent {
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 9,
    vars: 0,
    consts: [[1, "lds-roller"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #fff;\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.036s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.072s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.108s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.144s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.18s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.216s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.252s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.288s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@keyframes _ngcontent-%COMP%_lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGdFQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURFO0VBQ0Usd0JBQUE7QUFJSjs7QUFGRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEU7RUFDRSx3QkFBQTtBQU1KOztBQUpFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFPSjs7QUFMRTtFQUNFLHdCQUFBO0FBUUo7O0FBTkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVNKOztBQVBFO0VBQ0Usd0JBQUE7QUFVSjs7QUFSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEU7RUFDRSx1QkFBQTtBQVlKOztBQVZFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFhSjs7QUFYRTtFQUNFLHdCQUFBO0FBY0o7O0FBWkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWVKOztBQWJFO0VBQ0Usd0JBQUE7QUFnQko7O0FBZEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWlCSjs7QUFmRTtFQUNFLHdCQUFBO0FBa0JKOztBQWhCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbUJKOztBQWpCRTtFQUNFO0lBQ0UsdUJBQUE7RUFvQko7RUFsQkU7SUFDRSx5QkFBQTtFQW9CSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yb2xsZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdiB7XG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgIHRvcDogNjNweDtcbiAgICBsZWZ0OiA2M3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogNTZweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgdG9wOiA3MXB4O1xuICAgIGxlZnQ6IDQ4cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIHRvcDogNzJweDtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIHRvcDogNzFweDtcbiAgICBsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogMjRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgdG9wOiA2M3B4O1xuICAgIGxlZnQ6IDE3cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 5725:
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopBarComponent: () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TopBarComponent {
  static #_ = this.ɵfac = function TopBarComponent_Factory(t) {
    return new (t || TopBarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TopBarComponent,
    selectors: [["app-top-bar"]],
    decls: 16,
    vars: 0,
    consts: [[1, "top-bar-container"], [1, "top-bar-container__left"], [1, "circle", "profile"], [1, "material-symbols-outlined", "movie-icon"], [1, "label"], [1, "label__top"], [1, "label__bottom"], [1, "circle", "notifications"], [1, "material-symbols-outlined", "bell-icon"], [1, "notifications__dot"]],
    template: function TopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " movie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " movie enthusiast \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Find your favorite movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " notifications_active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".top-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  padding-bottom: 48px;\n}\n.top-bar-container__left[_ngcontent-%COMP%] {\n  display: flex;\n}\n.top-bar-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  background-color: #2C3758;\n}\n.top-bar-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 24px;\n  gap: 4px;\n  font-size: 24px;\n  font-weight: 500;\n  color: #2C3758;\n}\n.top-bar-container[_ngcontent-%COMP%]   .label__top[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 22px;\n  color: #FEFEFE;\n}\n.top-bar-container[_ngcontent-%COMP%]   .label__bottom[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #7e88a6;\n}\n.top-bar-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .movie-icon[_ngcontent-%COMP%] {\n  color: #ABACB3;\n  font-size: 48px;\n}\n.top-bar-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar-container[_ngcontent-%COMP%]   .notifications__dot[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  background-color: #f14545;\n  position: relative;\n  bottom: 16px;\n}\n\n.bell-icon[_ngcontent-%COMP%] {\n  color: #ABACB3;\n  position: relative;\n  left: 4px;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxRQUFBO0VBYUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWRSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ1o7QUFFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBWjtBQU9JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFMWjtBQVFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTlo7O0FBV0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBUko7O0FBVUE7RUFDSSxlQUFBO0FBUEoiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcblxuICAgICZfX2xlZnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XG4gICAgICAgIGdhcDogNHB4O1xuXG4gICAgICAgICZfX3RvcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRUZFRkU7XG5cbiAgICAgICAgfVxuICAgICAgICAmX19ib3R0b20ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjN2U4OGE2O1xuICAgICAgICB9XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMyQzM3NTg7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAubW92aWUtaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogI0FCQUNCMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubm90aWZpY2F0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICZfX2RvdCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0NTQ1O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmVsbC1pY29uIHtcbiAgICBjb2xvcjogI0FCQUNCMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNHB4O1xufVxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  APIEndpoint: 'http://www.omdbapi.com/',
  APIKey: 'f0c79fe8'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map