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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-details/movie-details.component */ 249);
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-list/movies-list.component */ 5871);
/* harmony import */ var _ticket_purchase_ticket_purchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-purchase/ticket-purchase.component */ 8504);
/* harmony import */ var _purchase_finalized_purchase_finalized_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-finalized/purchase-finalized.component */ 499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_1__.MoviesListComponent
}, {
  path: 'details',
  component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_0__.MovieDetailsComponent
}, {
  path: 'buyTicket',
  component: _ticket_purchase_ticket_purchase_component__WEBPACK_IMPORTED_MODULE_2__.TicketPurchaseComponent
}, {
  path: 'purchaseFinalized',
  component: _purchase_finalized_purchase_finalized_component__WEBPACK_IMPORTED_MODULE_3__.PurchaseFinalizedComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
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
    styles: ["body[_ngcontent-%COMP%] {\n  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n}\n\n.page[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.page__container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n\n@media only screen and (max-width: 600px) {\n  .page__container[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0hBQUE7QUFDRjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFBSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUVBO0VBQ0k7SUFDRSxZQUFBO0VBQ0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG59XG4ucGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5wYWdlX19jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list/movies-list.component */ 5871);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ 4705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details/movie-details.component */ 249);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 5725);
/* harmony import */ var _now_showing_now_showing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./now-showing/now-showing.component */ 3991);
/* harmony import */ var _search_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-categories/search-categories.component */ 5248);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/loader/loader.component */ 8556);
/* harmony import */ var _ticket_purchase_ticket_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ticket-purchase/ticket-purchase.component */ 8504);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _purchase_finalized_purchase_finalized_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./purchase-finalized/purchase-finalized.component */ 499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);


























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_21__.NgxPaginationModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatNativeDateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__.MoviesListComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__.MovieDetailsComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__.TopBarComponent, _now_showing_now_showing_component__WEBPACK_IMPORTED_MODULE_6__.NowShowingComponent, _search_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_7__.SearchCategoriesComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent, _ticket_purchase_ticket_purchase_component__WEBPACK_IMPORTED_MODULE_9__.TicketPurchaseComponent, _purchase_finalized_purchase_finalized_component__WEBPACK_IMPORTED_MODULE_10__.PurchaseFinalizedComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_21__.NgxPaginationModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatNativeDateModule],
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);








const _c0 = function (a0) {
  return {
    "star-full": a0
  };
};
function MovieDetailsComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " star ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rating_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, !!rating_r2.full));
  }
}
const _c1 = function () {
  return ["/details"];
};
const _c2 = function (a0) {
  return {
    id: a0
  };
};
function MovieDetailsComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, movie_r3.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", movie_r3.poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", movie_r3.title, " ");
  }
}
class MovieDetailsComponent {
  constructor(router, route, queryService, movieStorageService) {
    this.router = router;
    this.route = route;
    this.queryService = queryService;
    this.movieStorageService = movieStorageService;
    this.watchedMovies = [];
    this.p = this.movieStorageService.getLastPaginationFromStorage();
  }
  ngOnInit() {
    this.watchedMovies = this.movieStorageService.getMoviesFromStorage()?.filter(x => !!x.title && x.title !== 'unknown');
    const imdbID = this.route.snapshot.queryParamMap.get('id');
    this.queryService.getMovies(true, imdbID).subscribe(data => {
      this.movie = data;
      console.log('movie', this.movie);
      this.movieStorageService.setCurrentMovie(this.movie);
      this.movieStorageService.addMovieToStorage(data?.Title || 'unknown', data?.Poster || 'unknown', data?.imdbID);
    });
  }
  ratingStars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push({
        full: i < this.calculateRating(this.movie?.Ratings)
      });
    }
    console.log('stars', stars);
    return stars;
  }
  calculateRating(ratings) {
    if (!ratings) return 0;
    let rating = 0;
    for (const r of ratings) {
      if (r.Source === 'Internet Movie Database') {
        rating = +r.Value.split('/')[0];
      }
      if (r.Source === 'Rotten Tomatoes') {
        rating += +r.Value.split('%')[0] / 10;
      }
      if (r.Source === 'Metacritic') {
        rating += +r.Value.split('/')[0] / 10;
      }
    }
    // average ratings
    rating = rating / 3;
    return rating / 2;
  }
  goBack() {
    // window.history.back();
    this.router.navigate(['/']);
  }
  buyTicket() {
    this.router.navigate(['buyTicket'], {
      queryParams: {
        id: this.movie?.imdbID
      }
    });
  }
  static #_ = this.ɵfac = function MovieDetailsComponent_Factory(t) {
    return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_query_service__WEBPACK_IMPORTED_MODULE_0__.QueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_movie_storage_service__WEBPACK_IMPORTED_MODULE_1__.MovieStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MovieDetailsComponent,
    selectors: [["app-movie-details"]],
    decls: 42,
    vars: 8,
    consts: [[1, "details-container"], [1, "details-container__header"], ["mat-fab", "", 1, "back-icon-btn", 3, "click"], [1, "details-container__label"], [2, "width", "48px"], [1, "details-container__content"], [1, "details-container__content__poster"], ["alt", "Loading", 3, "src"], [1, "details-container__content__info"], [1, "movie-title"], [1, "movie-info"], [1, "movie-info__year"], [1, "dot"], [1, "movie-info__category"], [1, "movie-info__length"], [1, "movie-rating"], [4, "ngFor", "ngForOf"], [1, "details-container__content__description"], [1, "description-text"], [1, "details-container__footer"], [1, "details-container__footer__label"], [1, "viewed-cards-list"], [1, "buy-ticket-footer"], ["mat-button", "", 1, "buy-ticket-footer__btn", 3, "click"], [1, "material-icons-outlined", "star-icon", 3, "ngClass"], [1, "single-card", 3, "routerLink", "queryParams"], ["mat-card-image", "", "alt", "card image", 1, "single-card__image", 3, "src"], [1, "single-card__title"]],
    template: function MovieDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Movie Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MovieDetailsComponent_ng_container_24_Template, 3, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17)(26, "div", 3)(27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Previously");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " viewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, MovieDetailsComponent_ng_container_38_Template, 5, 7, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 22)(40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_40_listener() {
          return ctx.buyTicket();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Buy ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.movie == null ? null : ctx.movie.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie == null ? null : ctx.movie.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie == null ? null : ctx.movie.Year);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie == null ? null : ctx.movie.Genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie == null ? null : ctx.movie.Runtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ratingStars());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie == null ? null : ctx.movie.Plot);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.watchedMovies);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatFabButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    styles: [".details-container[_ngcontent-%COMP%] {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(4, 16, 58) 35%, rgb(23, 60, 125) 100%);\n  padding: 36px;\n  height: 100%;\n  max-width: 100vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  box-sizing: content-box;\n  padding-bottom: 100px;\n}\n.details-container__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.details-container__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FEFEFE;\n  font-size: 28px;\n}\n.details-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: transparent;\n}\n.details-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(98, 107, 132, 0.3294117647);\n}\n.details-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  left: 4px;\n  bottom: 3px;\n  color: #FEFEFE;\n  font-size: 28px;\n}\n.details-container__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.details-container__content__poster[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 24px;\n  margin-bottom: 48px;\n}\n.details-container__content__poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  width: 100%;\n  height: 100%;\n  min-width: 300px;\n  min-height: 420px;\n  max-width: 300px;\n  max-height: 450px;\n  background-color: rgba(98, 107, 132, 0.6588235294);\n  -webkit-box-reflect: below 1px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(90%, transparent), to(rgba(255, 255, 255, 0.1)));\n  box-shadow: 8px 8px 45px 3px rgb(66, 68, 90);\n}\n.details-container__content__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 48px;\n}\n.details-container__content__info[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%] {\n  color: #FEFEFE;\n  font-size: 28px;\n  font-style: bold;\n  margin-bottom: 16px;\n}\n.details-container__content__info[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  color: #626B84;\n  font-size: 12px;\n  margin-bottom: 12px;\n}\n.details-container__content__info[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n}\n.details-container__content__info[_ngcontent-%COMP%]   .movie-rating[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  color: #626B84;\n  font-size: 24px;\n}\n.details-container__content__info[_ngcontent-%COMP%]   .movie-rating[_ngcontent-%COMP%]   .star-icon.star-full[_ngcontent-%COMP%] {\n  color: #F2C94C;\n}\n.details-container__content__description[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  color: #626B84;\n  font-size: 16px;\n}\n.details-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n}\n.details-container__footer[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  margin-bottom: 80px;\n}\n.details-container__footer__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 24px;\n  color: #FEFEFE;\n}\n.details-container__footer[_ngcontent-%COMP%]   .viewed-cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 24px;\n  padding-bottom: 100px;\n}\n.details-container__footer[_ngcontent-%COMP%]   .viewed-cards-list[_ngcontent-%COMP%]   .single-card[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 16px;\n  background-color: #2C3758;\n  cursor: pointer;\n}\n.details-container__footer[_ngcontent-%COMP%]   .viewed-cards-list[_ngcontent-%COMP%]   .single-card__image[_ngcontent-%COMP%] {\n  min-width: 170px;\n  min-height: 200px;\n  background-color: rgba(98, 107, 132, 0.6588235294);\n}\n.details-container__footer[_ngcontent-%COMP%]   .viewed-cards-list[_ngcontent-%COMP%]   .single-card__title[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #FEFEFE;\n  background-color: #2C3758;\n  border-radius: 16px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  background-color: #626B84;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n.buy-ticket-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100px;\n  position: fixed;\n  bottom: 0px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(180deg, rgba(2, 0, 36, 0.0788909314) 0%, rgba(3, 12, 52, 0.557882528) 30%, rgba(4, 14, 55, 0.801580007) 51%, rgba(4, 16, 58, 0.9472382703) 70%);\n}\n.buy-ticket-footer__btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 16px;\n  background-color: #4DCAE7;\n  width: 250px;\n  height: 64px;\n  color: #FEFEFE !important;\n  font-family: Roboto;\n  letter-spacing: normal;\n  font-size: 24px;\n  position: relative;\n  bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnR0FBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFHQSxxQkFBQTtBQUZKO0FBSUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBSFI7QUFLUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSFo7QUFNUTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQUpaO0FBT1k7RUFDSSxrREFBQTtBQUxoQjtBQVFZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTmhCO0FBVUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVJSO0FBVVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFUWjtBQVdZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsa0RBQUE7RUFFQSwrSkFBQTtFQUdBLDRDQUFBO0FBWGhCO0FBY1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0FBYlo7QUFlWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQWRoQjtBQWdCWTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtBQWhCaEI7QUFrQmdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBaEJwQjtBQW9CZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWxCcEI7QUFvQm9CO0VBQ0ksY0FBQTtBQWxCeEI7QUF3Qlk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXRCaEI7QUEwQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBeEJSO0FBMEJJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQXhCUjtBQTBCUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF4Qlo7QUEyQlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUVBLGdCQUFBO0VBQ0EscUJBQUE7QUExQlo7QUE0Qlk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7QUEzQmhCO0FBNkJnQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtBQTNCcEI7QUE2QmdCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBM0JwQjs7QUFrQ0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUEvQko7O0FBa0NBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0osMktBQUE7QUFoQ0E7QUFrQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFoQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIsIDAsIDM2KSAwJSwgcmdiKDQsIDE2LCA1OCkgMzUlLCByZ2IoMjMsIDYwLCAxMjUpIDEwMCUpO1xuXG4gICAgcGFkZGluZzogMzZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE3cHg7IC8qIEluY3JlYXNlL2RlY3JlYXNlIHRoaXMgdmFsdWUgZm9yIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eSAqL1xuXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2staWNvbi1idG4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNmI4NDU0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICZfX3Bvc3RlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MjBweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNkI4NGE4O1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgMXB4IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoOTAlLCB0cmFuc3BhcmVudCksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSkpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDhweCA0NXB4IDNweCByZ2JhKDY2LCA2OCwgOTAsIDEpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogOHB4IDhweCA0NXB4IDNweCByZ2JhKDY2LCA2OCwgOTAsIDEpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDhweCA4cHggNDVweCAzcHggcmdiYSg2NiwgNjgsIDkwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcblxuICAgICAgICAgICAgLm1vdmllLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcblxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW92aWUtaW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjI2Qjg0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgICAgICAgICAgICAuZG90IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW92aWUtcmF0aW5nIHtcbiAgICAgICAgICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MjZCODQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgJi5zdGFyLWZ1bGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGMkM5NEM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgLmRlc2NyaXB0aW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjI2Qjg0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgfVxuICAgICZfX2Zvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG5cbiAgICAgICAgJl9fbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXdlZC1jYXJkcy1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMTZweDtcblxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgXG4gICAgICAgICAgICAuc2luZ2xlLWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgJl9faW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OCwgMTA3LCAxMzIsIDAuNjU4ODIzNTI5NCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjZCODQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uYnV5LXRpY2tldC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwwLDM2LDAuMDc4ODkwOTMxMzcyNTQ4OTkpIDAlLCByZ2JhKDMsMTIsNTIsMC41NTc4ODI1MjgwMTEyMDQ1KSAzMCUsIHJnYmEoNCwxNCw1NSwwLjgwMTU4MDAwNzAwMjgwMTIpIDUxJSwgcmdiYSg0LDE2LDU4LDAuOTQ3MjM4MjcwMzA4MTIzMikgNzAlKTtcblxuICAgICZfX2J0biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERDQUU3O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkUgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
  constructor() {
    this.currentMovie = null;
  }
  getCurrentMovie() {
    return this.currentMovie;
  }
  setCurrentMovie(movie) {
    this.currentMovie = movie;
  }
  addMovieToStorage(titleParam, posterParam, imdbIdParam) {
    const savedMovies = [];
    savedMovies.push({
      title: titleParam,
      poster: posterParam,
      imdbID: imdbIdParam
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
    }, error => {
      this.loading = false;
      console.warn(error);
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
    styles: [".list-container[_ngcontent-%COMP%] {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(4, 16, 58) 35%, rgb(23, 60, 125) 100%);\n  padding: 36px;\n  height: 100%;\n  max-width: 100vw;\n  overflow-y: scroll;\n  overflow-x: clip;\n  box-sizing: content-box;\n  padding-bottom: 100px;\n}\n\n.search-results__label[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n.search-results__no-results[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 24px;\n  font-weight: 300;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  width: 52%;\n  background-color: #7965fd;\n  color: white;\n  text-align: center;\n  border-radius: 25px 25px 0px 0px;\n}\n\n.spacer-medium[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.footer-spacer[_ngcontent-%COMP%] {\n  height: 100px;\n  color: transparent;\n  visibility: hidden;\n}\n\n.result-cards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n}\n.result-cards-list[_ngcontent-%COMP%]   .single-card[_ngcontent-%COMP%] {\n  width: 266px;\n  border-radius: 16px;\n  background-color: #2C3758;\n  cursor: pointer;\n}\n.result-cards-list[_ngcontent-%COMP%]   .single-card__title[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #FEFEFE;\n  background-color: #2C3758;\n}\n.result-cards-list[_ngcontent-%COMP%]   .single-card__content[_ngcontent-%COMP%] {\n  border-radius: 0 0 16px 16px;\n  color: #FEFEFE;\n  background-color: #2C3758;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: 48px 0px 24px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdHQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0k7RUFDSSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQUZSO0FBSUk7RUFDSSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQUpSOztBQVFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUxKOztBQU9BO0VBQ0ksbUJBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUpKO0FBTUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7QUFMUjtBQVNRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVBaO0FBU1E7RUFDSSw0QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtBQVJaOztBQVlBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDAsIDM2KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMiwgMCwgMzYpIDAlLCByZ2IoNCwgMTYsIDU4KSAzNSUsIHJnYigyMywgNjAsIDEyNSkgMTAwJSk7XG4gICAgcGFkZGluZzogMzZweDtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBjbGlwO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5zZWFyY2gtcmVzdWx0cyB7XG4gICAgJl9fbGFiZWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgICZfX25vLXJlc3VsdHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk2NWZkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XG59XG4uc3BhY2VyLW1lZGl1bSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmZvb3Rlci1zcGFjZXIge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnJlc3VsdC1jYXJkcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAuc2luZ2xlLWNhcmQge1xuICAgICAgICB3aWR0aDogMjY2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgfVxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNzU4O1xuICAgICAgICB9XG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE2cHggMTZweDtcblxuICAgICAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNzU4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnNwaW5uZXIge1xuICAgIG1hcmdpbjogNDhweCAwcHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);



class NowShowingComponent {
  constructor(router) {
    this.router = router;
    this.movieNamesIds = [{
      name: 'avengers',
      id: 'tt4154796'
    }, {
      name: 'hmf',
      id: 'tt15771916'
    }, {
      name: 'topgun',
      id: 'tt1745960'
    }, {
      name: 'gog',
      id: 'tt6791350'
    }, {
      name: 'fast',
      id: 'tt5433140'
    }];
  }
  goToMovieDetails() {
    const elements = document.querySelectorAll("label");
    elements.forEach(el => {
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.getPropertyValue('transform') === "matrix(1, 0, 0, 1, 0, 0)") {
        const movie = this.movieNamesIds.find(x => x.name === el.getAttribute('name'));
        this.router.navigate(['/details'], {
          queryParams: {
            id: movie.id
          }
        });
        return;
      }
      console.warn("Could not find movie");
    });
  }
  static #_ = this.ɵfac = function NowShowingComponent_Factory(t) {
    return new (t || NowShowingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NowShowingComponent,
    selectors: [["app-now-showing"]],
    decls: 20,
    vars: 0,
    consts: [[1, "now-showing-container"], [1, "now-showing-container__label"], [1, "carousel"], ["id", "slider"], ["type", "radio", "name", "slider", "id", "s1"], ["type", "radio", "name", "slider", "id", "s2"], ["type", "radio", "name", "slider", "id", "s3", "checked", ""], ["type", "radio", "name", "slider", "id", "s4"], ["type", "radio", "name", "slider", "id", "s5"], ["for", "s1", "id", "slide1", "name", "avengers"], ["for", "s2", "id", "slide2", "name", "hmf"], ["for", "s3", "id", "slide3", "name", "topgun"], ["for", "s4", "id", "slide4", "name", "gog"], ["for", "s5", "id", "slide5", "name", "fast"], [1, "single-row"], ["mat-button", "", 1, "view-details-btn", 3, "click"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NowShowingComponent_Template_button_click_18_listener() {
          return ctx.goToMovieDetails();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
    styles: [".now-showing-container[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.now-showing-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n.now-showing-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.now-showing-container[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.now-showing-container[_ngcontent-%COMP%]   .single-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.now-showing-container[_ngcontent-%COMP%]   .view-details-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background-color: #4DCAE7;\n  width: 140px;\n  height: 40px;\n  color: #FEFEFE;\n  font-family: Roboto;\n  letter-spacing: normal;\n  font-size: 18px;\n  position: relative;\n  bottom: 36px;\n}\n\n#slider[_ngcontent-%COMP%] {\n  height: 400px;\n  position: relative;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n}\n\n#slider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 250px;\n  height: 80%;\n  border-radius: 16px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n  transition: transform 0.4s ease;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  transform: translate3d(-60%, 0, -50px);\n  rotate: -2deg;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  transform: translate3d(-30%, 0, -25px);\n  rotate: -1deg;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%] {\n  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);\n  transform: translate3d(0, 0, 0);\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  transform: translate3d(30%, 0, -25px);\n  rotate: 1deg;\n}\n\n#s1[_ngcontent-%COMP%]:checked    ~ #slide3[_ngcontent-%COMP%], #s2[_ngcontent-%COMP%]:checked    ~ #slide4[_ngcontent-%COMP%], #s3[_ngcontent-%COMP%]:checked    ~ #slide5[_ngcontent-%COMP%], #s4[_ngcontent-%COMP%]:checked    ~ #slide1[_ngcontent-%COMP%], #s5[_ngcontent-%COMP%]:checked    ~ #slide2[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  transform: translate3d(60%, 0, -50px);\n  rotate: 2deg;\n}\n\n#slide1[_ngcontent-%COMP%] {\n  background: #00BCD4;\n  content: url('img_avengers.jpeg');\n}\n\n#slide2[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  content: url('img_hmf.jpeg');\n}\n\n#slide3[_ngcontent-%COMP%] {\n  background: #CDDC39;\n  content: url('img_top_gun.jpeg');\n}\n\n#slide4[_ngcontent-%COMP%] {\n  background: #FFC107;\n  content: url('img_gotg.jpeg');\n}\n\n#slide5[_ngcontent-%COMP%] {\n  background: #FF5722;\n  content: url('img_fast.jpeg');\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm93LXNob3dpbmcvbm93LXNob3dpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFFQSx5QkFBQTtVQUFBLGlCQUFBO0FBRlI7QUFJSTtFQUNJLGFBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBSFI7QUFLSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FBTlI7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBUEo7O0FBVUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFTLFFBQUE7RUFDVCxlQUFBO0VBQ0EsK0JBQUE7QUFOSjs7QUFTRTs7O0VBR0UsMkNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7QUFOSjs7QUFTRTs7O0VBR0UsMkVBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7QUFOSjs7QUFTRTs7O0VBR0UsOEVBQUE7RUFDQSwrQkFBQTtBQU5KOztBQVNFOzs7RUFHRSwyRUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNFOzs7RUFHRSwyQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNJO0VBQ0ksbUJBQUE7RUFDQSxpQ0FBQTtBQU5SOztBQVFJO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtBQUxSOztBQU9JO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtBQUpSOztBQU1JO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtBQUhSOztBQUtJO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdy1zaG93aW5nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcblxuICAgICZfX2xhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogI0ZFRkVGRTtcblxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gICAgW3R5cGU9cmFkaW9dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAudmlldy1kZXRhaWxzLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzREQ0FFNztcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogMzZweDtcbiAgICB9XG59XG5cbiNzbGlkZXIge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuICBcbiAgI3NsaWRlciBsYWJlbCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwOyByaWdodDogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgfVxuICBcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGU0LCAjczI6Y2hlY2tlZCB+ICNzbGlkZTUsXG4gICNzMzpjaGVja2VkIH4gI3NsaWRlMSwgI3M0OmNoZWNrZWQgfiAjc2xpZGUyLFxuICAjczU6Y2hlY2tlZCB+ICNzbGlkZTMge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjM3KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02MCUsMCwtNTBweCk7XG4gICAgcm90YXRlOiAtMmRlZztcbiAgfVxuICBcbiAgI3MxOmNoZWNrZWQgfiAjc2xpZGU1LCAjczI6Y2hlY2tlZCB+ICNzbGlkZTEsXG4gICNzMzpjaGVja2VkIH4gI3NsaWRlMiwgI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxuICAjczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4zKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLDAsLTI1cHgpO1xuICAgIHJvdGF0ZTogLTFkZWc7XG4gIH1cbiAgXG4gICNzMTpjaGVja2VkIH4gI3NsaWRlMSwgI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxuICAjczM6Y2hlY2tlZCB+ICNzbGlkZTMsICNzNDpjaGVja2VkIH4gI3NsaWRlNCxcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcbiAgICBib3gtc2hhZG93OiAwIDEzcHggMjVweCAwIHJnYmEoMCwwLDAsLjMpLCAwIDExcHggN3B4IDAgcmdiYSgwLDAsMCwuMTkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB9XG4gIFxuICAjczE6Y2hlY2tlZCB+ICNzbGlkZTIsICNzMjpjaGVja2VkIH4gI3NsaWRlMyxcbiAgI3MzOmNoZWNrZWQgfiAjc2xpZGU0LCAjczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXG4gICNzNTpjaGVja2VkIH4gI3NsaWRlMSB7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjMpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwJSwwLC0yNXB4KTtcbiAgICByb3RhdGU6IDFkZWc7XG4gIH1cbiAgXG4gICNzMTpjaGVja2VkIH4gI3NsaWRlMywgI3MyOmNoZWNrZWQgfiAjc2xpZGU0LFxuICAjczM6Y2hlY2tlZCB+ICNzbGlkZTUsICNzNDpjaGVja2VkIH4gI3NsaWRlMSxcbiAgI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4zNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MCUsMCwtNTBweCk7XG4gICAgcm90YXRlOiAyZGVnO1xuICB9XG4gIFxuICAgICNzbGlkZTEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBCQ0Q0O1xuICAgICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX2F2ZW5nZXJzLmpwZWcnKTtcbiAgICB9XG4gICAgI3NsaWRlMiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfaG1mLmpwZWcnKVxuICAgIH1cbiAgICAjc2xpZGUzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0NEREMzOTtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ190b3BfZ3VuLmpwZWcnKVxuICAgIH1cbiAgICAjc2xpZGU0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19nb3RnLmpwZWcnKVxuICAgIH1cbiAgICAjc2xpZGU1IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGNTcyMjtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19mYXN0LmpwZWcnKVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 499:
/*!********************************************************************!*\
  !*** ./src/app/purchase-finalized/purchase-finalized.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchaseFinalizedComponent: () => (/* binding */ PurchaseFinalizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _receipt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../receipt.service */ 7385);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






class PurchaseFinalizedComponent {
  constructor(router, receiptService) {
    this.router = router;
    this.receiptService = receiptService;
    this.receipt = null;
  }
  ngOnInit() {
    this.receipt = this.receiptService.getCurrentReceipt();
  }
  getOrderNo() {
    // return random order number of 8 digits
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  }
  goBack() {
    this.router.navigate(['/']);
  }
  static #_ = this.ɵfac = function PurchaseFinalizedComponent_Factory(t) {
    return new (t || PurchaseFinalizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_receipt_service__WEBPACK_IMPORTED_MODULE_0__.ReceiptService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PurchaseFinalizedComponent,
    selectors: [["ng-component"]],
    decls: 46,
    vars: 12,
    consts: [[1, "ticket-container"], [1, "ticket-container__header"], ["mat-fab", "", 1, "back-icon-btn", 3, "click"], [1, "ticket-container__label"], [2, "width", "48px"], [1, "ticket-container__content"], [1, "label"], [1, "value"], ["src", "assets/images/qr_code.png", "alt", "ticket", 1, "ticket-image"], [1, "ticket-container__footer"]],
    template: function PurchaseFinalizedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PurchaseFinalizedComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div")(10, "table")(11, "tr")(12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Movie: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr")(17, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr")(23, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tickets: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr")(28, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Seats: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr")(33, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr")(39, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Order no: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.receipt == null ? null : ctx.receipt.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 6, ctx.receipt == null ? null : ctx.receipt.date, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.receipt == null ? null : ctx.receipt.tickets, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.receipt == null ? null : ctx.receipt.seats == null ? null : ctx.receipt.seats.join(", "));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](37, 9, ctx.receipt == null ? null : ctx.receipt.total, "2.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getOrderNo(), "");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: [".ticket-container[_ngcontent-%COMP%] {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(4, 16, 58) 35%, rgb(23, 60, 125) 100%);\n  padding: 36px;\n  height: 100%;\n  max-width: 100vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  box-sizing: content-box;\n  padding-bottom: 100px;\n}\n.ticket-container__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.ticket-container__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FEFEFE;\n  font-size: 28px;\n}\n.ticket-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: transparent;\n}\n.ticket-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(98, 107, 132, 0.3294117647);\n}\n.ticket-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  left: 4px;\n  bottom: 3px;\n  color: #FEFEFE;\n  font-size: 28px;\n}\n.ticket-container__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 64px;\n  color: #555E7A;\n  font-size: 22px;\n  font-weight: 400;\n}\n.ticket-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #555E7A;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 24px;\n  color: #555E7A;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 24px;\n  color: #5479b9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVyY2hhc2UtZmluYWxpemVkL3B1cmNoYXNlLWZpbmFsaXplZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0dBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBSUEscUJBQUE7QUFISjtBQUtJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtBQUpSO0FBTVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUpaO0FBT1E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFMWjtBQVFZO0VBQ0ksa0RBQUE7QUFOaEI7QUFTWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVBoQjtBQVdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVlI7QUFnQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZFI7O0FBa0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFmSjs7QUFpQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWJKIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2tldC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDIsIDAsIDM2KSAwJSwgcmdiKDQsIDE2LCA1OCkgMzUlLCByZ2IoMjMsIDYwLCAxMjUpIDEwMCUpO1xuXG4gICAgcGFkZGluZzogMzZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXG4gICAgLy8gcGFkZGluZy1yaWdodDogMTdweDsgLyogSW5jcmVhc2UvZGVjcmVhc2UgdGhpcyB2YWx1ZSBmb3IgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5ICovXG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2staWNvbi1idG4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNmI4NDU0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNjRweDtcblxuICAgICAgICBjb2xvcjogIzU1NUU3QTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIFxuICAgIH1cbiAgICAmX19mb290ZXIge1xuXG4gICAgfVxuICAgICZfX2xhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICB9XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM1NTVFN0E7XG59XG4ubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNTU1RTdBO1xufVxuLnZhbHVlIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzU0NzliOTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 7385:
/*!************************************!*\
  !*** ./src/app/receipt.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Receipt: () => (/* binding */ Receipt),
/* harmony export */   ReceiptService: () => (/* binding */ ReceiptService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class Receipt {}
class ReceiptService {
  constructor() {
    this.currentReceipt = null;
  }
  getCurrentReceipt() {
    return this.currentReceipt;
  }
  setCurrentReceipt(receipt) {
    this.currentReceipt = receipt;
  }
  static #_ = this.ɵfac = function ReceiptService_Factory(t) {
    return new (t || ReceiptService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ReceiptService,
    factory: ReceiptService.ɵfac,
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
    decls: 49,
    vars: 0,
    consts: [[1, "search-categories-container"], [1, "search-categories-container__top"], [1, "search-categories-container__label"], [1, "search-categories-container__subLabel"], [1, "categories-list"], [1, "category"], [1, "category__icon"], [1, "category__name"]],
    template: function SearchCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "See more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83E\uDD2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\uD83D\uDC7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Horror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\uD83D\uDE08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Thriller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5)(25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\uD83E\uDD70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Romantic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5)(30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\uD83E\uDD20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5)(35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\uD83D\uDC7D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sci-fi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5)(40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uD83D\uDD75\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Crime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5)(45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\uD83E\uDDF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".search-categories-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.search-categories-container__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.search-categories-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n  margin-bottom: 24px;\n}\n.search-categories-container__subLabel[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 22px;\n  color: #7e88a6;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background-color: #2C3758;\n  border-radius: 36px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]:hover {\n  background-color: rgba(44, 55, 88, 0.4509803922);\n  cursor: pointer;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category__icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.search-categories-container[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .category__name[_ngcontent-%COMP%] {\n  color: #FEFEFE;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoLWNhdGVnb3JpZXMvc2VhcmNoLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDUjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0FBQVI7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFEUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFGWjtBQUlZO0VBQ0ksZ0RBQUE7RUFDQSxlQUFBO0FBRmhCO0FBS1k7RUFDSSxlQUFBO0FBSGhCO0FBS1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhoQiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAmX190b3Age1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgICZfX2xhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBjb2xvcjogI0ZFRkVGRTtcblxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgICAmX19zdWJMYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgY29sb3I6ICM3ZTg4YTY7XG4gICAgfVxuXG4gICAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTZweDtcblxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogNHB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzNzU4NzM7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX19uYW1lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    styles: [".searchBar[_ngcontent-%COMP%] {\n  background-color: #2C3758;\n  height: 64px;\n  width: 100%;\n  border-radius: 36px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n.searchBar__left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 1;\n  flex-basis: 164px;\n  flex-grow: 2;\n}\n.searchBar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.searchBar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  width: 100%;\n}\n.searchBar[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-right: 24px;\n  flex-shrink: 0;\n  flex-basis: 30px;\n}\n\n.advanced-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: height 0.1s ease-out;\n}\n.advanced-filters__filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background-color: #2C3758;\n  height: 64px;\n  width: 216px;\n  padding: 0px 26px;\n  border-radius: 32px;\n  margin-top: 16px;\n  visibility: visible;\n  transition: height 0.1s ease, visibility 0.05s ease;\n}\n.advanced-filters--hidden[_ngcontent-%COMP%]   .advanced-filters__filter[_ngcontent-%COMP%] {\n  height: 0px;\n  pointer-events: none;\n  visibility: hidden;\n  transition: height 0.1s ease, visibility 0.05s ease;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #ABACB3;\n}\n\ninput.transparent-input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  position: relative;\n  display: block;\n  outline: none;\n  padding: 3px;\n  color: #ABACB3;\n  width: 100%;\n  font-size: 24px;\n}\n\ninput.transparent-filter[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  position: relative;\n  display: block;\n  outline: none;\n  padding: 3px;\n  color: #ABACB3;\n  width: 100%;\n  font-size: 24px;\n}\n\n.input-year[_ngcontent-%COMP%] {\n  width: 216px;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #ABACB3;\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #ABACB3;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ABACB3;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #ABACB3;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n          appearance: textfield;\n  -moz-appearance: textfield;\n}\n\n  .mat-mdc-select-arrow {\n  color: #ABACB3;\n}\n  .mat-mdc-select-value {\n  color: #ABACB3;\n  font-size: 22px;\n  font-weight: 500;\n}\n  .mdc-menu-surface.mat-mdc-select-panel {\n  background-color: rgba(44, 55, 96, 0.9803921569);\n}\n  .mdc-list-item__primary-text {\n  color: #ABACB3;\n}\n  .mdc-list-item--selected .mdc-list-item__primary-text {\n  color: #FEFEFE;\n}\n  .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal::after {\n  color: #4dcae7;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQURKO0FBR0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQURSO0FBSUk7RUFDSSxrQkFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFGUjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0NBQUE7QUFKSjtBQU1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0FBTFI7QUFTUTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUFQWjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBUko7O0FBVUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBRUEsZUFBQTtBQVRKOztBQVdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUVBLGVBQUE7QUFWSjs7QUFhQTtFQUNJLFlBQUE7QUFWSjs7QUFZQTtFQUE4QixjQUFBO0FBUjlCOztBQVNBO0VBQW9CLGNBQUE7QUFMcEI7O0FBTUE7RUFBcUIsY0FBQTtBQUZyQjs7QUFHQTtFQUF5QixjQUFBO0FBQ3pCOztBQUFBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUdGOztBQURBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDBCQUFBO0FBSUo7O0FBQUk7RUFDSSxjQUFBO0FBR1I7QUFESTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQURJO0VBQ0ksZ0RBQUE7QUFHUjtBQURJO0VBQ0ksY0FBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFESTtFQUNJLGNBQUE7QUFHUiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hCYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzM3NTg7XG5cbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuXG4gICAgJl9fbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgICAgICBmbGV4LWJhc2lzOiAxNjRweDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgIH1cblxuICAgIC5zZWFyY2gge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgfVxuICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZmlsdGVycyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBmbGV4LWJhc2lzOiAzMHB4O1xuICAgIH1cbn1cblxuLmFkdmFuY2VkLWZpbHRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4xcyBlYXNlLW91dDtcblxuICAgICZfX2ZpbHRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNzU4O1xuXG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IDIxNnB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMjZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMXMgZWFzZSwgdmlzaWJpbGl0eSAwLjA1cyBlYXNlO1xuXG4gICAgfVxuICAgICYtLWhpZGRlbiB7XG4gICAgICAgIC5hZHZhbmNlZC1maWx0ZXJzX19maWx0ZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjFzIGVhc2UsIHZpc2liaWxpdHkgMC4wNXMgZWFzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICNBQkFDQjM7XG59XG5pbnB1dC50cmFuc3BhcmVudC1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBjb2xvcjogI0FCQUNCMztcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuaW5wdXQudHJhbnNwYXJlbnQtZmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGNvbG9yOiAjQUJBQ0IzO1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBmb250LXNpemU6IDI0cHg7XG5cbn1cbi5pbnB1dC15ZWFyIHtcbiAgICB3aWR0aDogMjE2cHg7XG59XG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI0FCQUNCMzt9IFxuOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogI0FCQUNCMzsgfVxuOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICNBQkFDQjM7IH1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI0FCQUNCMzsgfVxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLm1hdC1tZGMtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6ICNBQkFDQjM7XG4gICAgfVxuICAgIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiAjQUJBQ0IzO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5tZGMtbWVudS1zdXJmYWNlLm1hdC1tZGMtc2VsZWN0LXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzc2MGZhO1xuICAgIH1cbiAgICAubWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNBQkFDQjM7XG4gICAgfVxuICAgIC5tZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCAubWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgfVxuICAgIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1taW5pbWFsOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiAjNGRjYWU3O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 8504:
/*!**************************************************************!*\
  !*** ./src/app/ticket-purchase/ticket-purchase.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketPurchaseComponent: () => (/* binding */ TicketPurchaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _movie_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie-storage.service */ 4038);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _receipt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../receipt.service */ 7385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);










const _c0 = function (a0, a1) {
  return {
    "row-single--selected": a0,
    "row-single--reserved": a1
  };
};
function TicketPurchaseComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketPurchaseComponent_ng_container_29_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const seatNumber_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleSeat(seatNumber_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seatNumber_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("row-single seat-row" + (seatNumber_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r1.selectedSeats.includes(seatNumber_r2), ctx_r1.reservedSeats.includes(seatNumber_r2)));
  }
}
class TicketPurchaseComponent {
  get reservedSeats() {
    const savedReservedSeats = this.savedReservedSeats.find(x => x.date.toISOString() === this.selectedDate.toISOString());
    if (savedReservedSeats) {
      return savedReservedSeats.reserved;
    } else {
      const reservedCount = this.randomIntFromInterval(1, 12);
      const newReservedSeats = [];
      for (let i = 0; i < reservedCount; i++) {
        const seat = this.randomIntFromInterval(0, 59);
        if (newReservedSeats.indexOf(seat) === -1) {
          newReservedSeats.push(seat);
        }
      }
      this.savedReservedSeats.push({
        date: this.selectedDate,
        reserved: newReservedSeats
      });
      return newReservedSeats;
    }
  }
  constructor(movieStorageService, cd, router, receiptService) {
    this.movieStorageService = movieStorageService;
    this.cd = cd;
    this.router = router;
    this.receiptService = receiptService;
    this.ticketPrice = 18.99;
    this.selectedDate = new Date();
    this.allSeats = Array(60).fill(0).map((x, i) => i);
    this.savedReservedSeats = [];
    this.selectedSeats = [];
    this.currentMovie = null;
    this.purchaseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(Date.now(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }
  ngOnInit() {
    this.currentMovie = this.movieStorageService.getCurrentMovie();
    this.cd.detectChanges();
    console.log('currentMovie', this.currentMovie);
  }
  isSeatReserved(seatNumber) {
    return this.reservedSeats.indexOf(seatNumber) > -1;
  }
  isSeatSelected(seatNumber) {
    return this.selectedSeats.indexOf(seatNumber) > -1;
  }
  toggleSeat(seatNumber) {
    if (this.isSeatReserved(seatNumber)) return;
    const index = this.selectedSeats.indexOf(seatNumber);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seatNumber);
    }
    console.log(this.selectedSeats);
  }
  getTotalPrice() {
    return this.ticketPrice * this.selectedSeats.length || 0.00;
  }
  goBack() {
    window.history.back();
  }
  buyNow() {
    this.receiptService.setCurrentReceipt({
      title: this.currentMovie.Title,
      tickets: this.selectedSeats.length,
      date: this.purchaseForm.value.date,
      total: this.getTotalPrice(),
      seats: this.selectedSeats
    });
    this.router.navigate(['purchaseFinalized'], {
      queryParams: {}
    });
  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  static #_ = this.ɵfac = function TicketPurchaseComponent_Factory(t) {
    return new (t || TicketPurchaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_movie_storage_service__WEBPACK_IMPORTED_MODULE_0__.MovieStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_receipt_service__WEBPACK_IMPORTED_MODULE_1__.ReceiptService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TicketPurchaseComponent,
    selectors: [["ng-component"]],
    decls: 53,
    vars: 14,
    consts: [[1, "ticket-container"], [1, "ticket-container__header"], ["mat-fab", "", 1, "back-icon-btn", 3, "click"], [1, "ticket-container__label"], [2, "width", "48px"], [1, "ticket-container__content"], [1, "name"], [1, "name__label"], [1, "date-section__container"], [1, "date-section"], [1, "date-section__selected"], [1, "date-section__icon-select"], ["placeholder", "Choose a date", 3, "matDatepicker", "ngModel", "ngModelChange"], [1, "material-symbols-outlined", "clickable", 3, "click"], ["picker", ""], [1, "ticket-screen-line-container"], [1, "ticket-screen-line"], [1, "ticket-screen-label"], [1, "ticket-container__content__seat-picker"], [1, "seat-row-parent"], [4, "ngFor", "ngForOf"], [1, "legend"], [1, "legend__row"], [1, "legend__box", "legend__box--available"], [1, "legend__box", "legend__box--reserved"], [1, "legend__box", "legend__box--selected"], [1, "ticket-container__footer"], [1, "ticket-container__footer__left"], [1, "ticket-container__footer__left__seats-count"], [1, "ticket-container__footer__left__seats-total"], [1, "ticket-container__footer__right"], ["mat-button", "", 1, "buy-now-btn", 3, "disabled", "click"], [3, "ngClass", "click"]],
    template: function TicketPurchaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketPurchaseComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Select Seats");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11)(18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TicketPurchaseComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.selectedDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketPurchaseComponent_Template_span_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.open());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " calendar_today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18)(28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TicketPurchaseComponent_ng_container_29_Template, 2, 7, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21)(31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 26)(44, "div", 27)(45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 30)(51, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketPurchaseComponent_Template_button_click_51_listener() {
          return ctx.buyNow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Buy now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentMovie == null ? null : ctx.currentMovie.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 8, ctx.selectedDate, "fullDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.selectedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allSeats);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedSeats.length, " Seats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](49, 11, ctx.getTotalPrice(), "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.selectedSeats.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: [".ticket-container[_ngcontent-%COMP%] {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(135deg, rgb(2, 0, 36) 0%, rgb(4, 16, 58) 35%, rgb(23, 60, 125) 100%);\n  padding: 36px;\n  height: 100%;\n  max-width: 100vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  box-sizing: content-box;\n  padding-bottom: 100px;\n}\n.ticket-container__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.ticket-container__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FEFEFE;\n  font-size: 28px;\n}\n.ticket-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: transparent;\n}\n.ticket-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(98, 107, 132, 0.3294117647);\n}\n.ticket-container__header[_ngcontent-%COMP%]   .back-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  left: 4px;\n  bottom: 3px;\n  color: #FEFEFE;\n  font-size: 28px;\n}\n.ticket-container__content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.ticket-container__content[_ngcontent-%COMP%]   .name__label[_ngcontent-%COMP%] {\n  color: #4dcae7;\n  font-size: 32px;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.ticket-container__content[_ngcontent-%COMP%]   .date-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 374px;\n}\n.ticket-container__content[_ngcontent-%COMP%]   .date-section__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.ticket-container__content[_ngcontent-%COMP%]   .date-section__selected[_ngcontent-%COMP%] {\n  color: #555E7A;\n  font-size: 22px;\n  font-weight: 400;\n}\n.ticket-container__content[_ngcontent-%COMP%]   .date-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 1px;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row-parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  grid-column-gap: 8px;\n  grid-row-gap: 8px;\n  max-width: 408px;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row1[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row2[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row3[_ngcontent-%COMP%] {\n  grid-area: 1/4/2/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row4[_ngcontent-%COMP%] {\n  grid-area: 1/6/2/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row5[_ngcontent-%COMP%] {\n  grid-area: 1/7/2/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row6[_ngcontent-%COMP%] {\n  grid-area: 1/8/2/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row7[_ngcontent-%COMP%] {\n  grid-area: 2/1/3/2;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row8[_ngcontent-%COMP%] {\n  grid-area: 2/2/3/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row9[_ngcontent-%COMP%] {\n  grid-area: 2/3/3/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row10[_ngcontent-%COMP%] {\n  grid-area: 2/4/3/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row11[_ngcontent-%COMP%] {\n  grid-area: 2/6/3/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row12[_ngcontent-%COMP%] {\n  grid-area: 2/7/3/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row13[_ngcontent-%COMP%] {\n  grid-area: 2/8/3/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row14[_ngcontent-%COMP%] {\n  grid-area: 2/9/3/10;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row15[_ngcontent-%COMP%] {\n  grid-area: 3/1/4/2;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row16[_ngcontent-%COMP%] {\n  grid-area: 3/2/4/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row17[_ngcontent-%COMP%] {\n  grid-area: 3/3/4/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row18[_ngcontent-%COMP%] {\n  grid-area: 3/4/4/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row19[_ngcontent-%COMP%] {\n  grid-area: 3/6/4/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row20[_ngcontent-%COMP%] {\n  grid-area: 3/7/4/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row21[_ngcontent-%COMP%] {\n  grid-area: 3/8/4/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row22[_ngcontent-%COMP%] {\n  grid-area: 3/9/4/10;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row23[_ngcontent-%COMP%] {\n  grid-area: 4/1/5/2;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row24[_ngcontent-%COMP%] {\n  grid-area: 4/2/5/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row25[_ngcontent-%COMP%] {\n  grid-area: 4/3/5/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row26[_ngcontent-%COMP%] {\n  grid-area: 4/4/5/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row27[_ngcontent-%COMP%] {\n  grid-area: 4/6/5/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row28[_ngcontent-%COMP%] {\n  grid-area: 4/7/5/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row29[_ngcontent-%COMP%] {\n  grid-area: 4/8/5/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row30[_ngcontent-%COMP%] {\n  grid-area: 4/9/5/10;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row31[_ngcontent-%COMP%] {\n  grid-area: 5/1/6/2;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row32[_ngcontent-%COMP%] {\n  grid-area: 5/2/6/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row33[_ngcontent-%COMP%] {\n  grid-area: 5/3/6/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row34[_ngcontent-%COMP%] {\n  grid-area: 5/4/6/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row35[_ngcontent-%COMP%] {\n  grid-area: 5/6/6/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row36[_ngcontent-%COMP%] {\n  grid-area: 5/7/6/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row37[_ngcontent-%COMP%] {\n  grid-area: 5/8/6/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row38[_ngcontent-%COMP%] {\n  grid-area: 5/9/6/10;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row39[_ngcontent-%COMP%] {\n  grid-area: 6/1/7/2;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row40[_ngcontent-%COMP%] {\n  grid-area: 6/2/7/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row41[_ngcontent-%COMP%] {\n  grid-area: 6/3/7/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row42[_ngcontent-%COMP%] {\n  grid-area: 6/4/7/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row43[_ngcontent-%COMP%] {\n  grid-area: 6/6/7/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row44[_ngcontent-%COMP%] {\n  grid-area: 6/7/7/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row45[_ngcontent-%COMP%] {\n  grid-area: 6/8/7/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row46[_ngcontent-%COMP%] {\n  grid-area: 6/9/7/10;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row47[_ngcontent-%COMP%] {\n  grid-area: 7/1/8/2;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row48[_ngcontent-%COMP%] {\n  grid-area: 7/2/8/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row49[_ngcontent-%COMP%] {\n  grid-area: 7/3/8/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row50[_ngcontent-%COMP%] {\n  grid-area: 7/4/8/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row51[_ngcontent-%COMP%] {\n  grid-area: 7/6/8/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row52[_ngcontent-%COMP%] {\n  grid-area: 7/7/8/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row53[_ngcontent-%COMP%] {\n  grid-area: 7/8/8/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row54[_ngcontent-%COMP%] {\n  grid-area: 7/9/8/10;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row55[_ngcontent-%COMP%] {\n  grid-area: 8/2/9/3;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row56[_ngcontent-%COMP%] {\n  grid-area: 8/3/9/4;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row57[_ngcontent-%COMP%] {\n  grid-area: 8/4/9/5;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row58[_ngcontent-%COMP%] {\n  grid-area: 8/6/9/7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row59[_ngcontent-%COMP%] {\n  grid-area: 8/7/9/8;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .seat-row60[_ngcontent-%COMP%] {\n  grid-area: 8/8/9/9;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .row-single[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #1D3798;\n  border-radius: 8px;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .row-single--selected[_ngcontent-%COMP%] {\n  background-color: #4DCAE7;\n  border: 1px solid #4DCAE7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .row-single--reserved[_ngcontent-%COMP%] {\n  background-color: #293A74;\n  border: 1px solid #293A74;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  color: #DDDEE4;\n  font-size: 13px;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .legend__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .legend__box[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 1px solid #1D3798;\n  border-radius: 4px;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .legend__box--selected[_ngcontent-%COMP%] {\n  background-color: #4DCAE7;\n  border: 1px solid #4DCAE7;\n}\n.ticket-container__content__seat-picker[_ngcontent-%COMP%]   .legend__box--reserved[_ngcontent-%COMP%] {\n  background-color: #293A74;\n  border: 1px solid #293A74;\n}\n.ticket-container__footer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 36px;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  color: #FEFEFE;\n}\n.ticket-container__footer__left[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.ticket-container__footer__left__seats-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6D717D;\n  margin-bottom: 12px;\n}\n.ticket-container__footer__left__seats-total[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 500;\n  color: #FEFEFE;\n}\n.ticket-container__footer__right[_ngcontent-%COMP%] {\n  padding-top: 14px;\n}\n.ticket-container__label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 28px;\n  color: #FEFEFE;\n}\n\n.ticket-screen-line-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.ticket-screen-line[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 365px;\n  min-width: 257px;\n  height: 50px;\n  border: solid 5px #1C3797;\n  border-color: #1C3797 transparent transparent transparent;\n  border-radius: 50%/50px 50px 0 0;\n  position: relative;\n  top: 12px;\n  box-shadow: inset 0px 20px 20px 6px rgba(31, 51, 122, 0.3803921569);\n}\n\n.ticket-screen-label[_ngcontent-%COMP%] {\n  color: #445081;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: 16px;\n  text-align: center;\n  position: relative;\n  bottom: 14px;\n}\n\n.buy-now-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 16px;\n  background-color: #4DCAE7;\n  width: 225px;\n  height: 64px;\n  color: #FEFEFE !important;\n  font-family: Roboto;\n  letter-spacing: normal;\n  font-size: 24px;\n  position: relative;\n  bottom: 8px;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #555E7A;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGlja2V0LXB1cmNoYXNlL3RpY2tldC1wdXJjaGFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0dBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBR0EscUJBQUE7QUFGSjtBQUlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtBQUhSO0FBS1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhaO0FBTVE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFKWjtBQU9ZO0VBQ0ksa0RBQUE7QUFMaEI7QUFRWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU5oQjtBQVlRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBVlo7QUFZWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZoQjtBQWFRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFYWjtBQWFZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFYaEI7QUFhWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYaEI7QUFpQlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFmaEI7QUFrQlE7RUFFSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWpCWjtBQW1CWTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0FBbEJoQjtBQXFCZ0I7RUFBYSxrQkFBQTtBQWxCN0I7QUFtQmdCO0VBQWEsa0JBQUE7QUFoQjdCO0FBaUJnQjtFQUFhLGtCQUFBO0FBZDdCO0FBZWdCO0VBQWEsa0JBQUE7QUFaN0I7QUFhZ0I7RUFBYSxrQkFBQTtBQVY3QjtBQVdnQjtFQUFhLGtCQUFBO0FBUjdCO0FBU2dCO0VBQWEsa0JBQUE7QUFON0I7QUFPZ0I7RUFBYSxrQkFBQTtBQUo3QjtBQUtnQjtFQUFhLGtCQUFBO0FBRjdCO0FBR2dCO0VBQWMsa0JBQUE7QUFBOUI7QUFDZ0I7RUFBYyxrQkFBQTtBQUU5QjtBQURnQjtFQUFjLGtCQUFBO0FBSTlCO0FBSGdCO0VBQWMsa0JBQUE7QUFNOUI7QUFMZ0I7RUFBYyxtQkFBQTtBQVE5QjtBQVBnQjtFQUFjLGtCQUFBO0FBVTlCO0FBVGdCO0VBQWMsa0JBQUE7QUFZOUI7QUFYZ0I7RUFBYyxrQkFBQTtBQWM5QjtBQWJnQjtFQUFjLGtCQUFBO0FBZ0I5QjtBQWZnQjtFQUFjLGtCQUFBO0FBa0I5QjtBQWpCZ0I7RUFBYyxrQkFBQTtBQW9COUI7QUFuQmdCO0VBQWMsa0JBQUE7QUFzQjlCO0FBckJnQjtFQUFjLG1CQUFBO0FBd0I5QjtBQXZCZ0I7RUFBYyxrQkFBQTtBQTBCOUI7QUF6QmdCO0VBQWMsa0JBQUE7QUE0QjlCO0FBM0JnQjtFQUFjLGtCQUFBO0FBOEI5QjtBQTdCZ0I7RUFBYyxrQkFBQTtBQWdDOUI7QUEvQmdCO0VBQWMsa0JBQUE7QUFrQzlCO0FBakNnQjtFQUFjLGtCQUFBO0FBb0M5QjtBQW5DZ0I7RUFBYyxrQkFBQTtBQXNDOUI7QUFyQ2dCO0VBQWMsbUJBQUE7QUF3QzlCO0FBdkNnQjtFQUFjLGtCQUFBO0FBMEM5QjtBQXpDZ0I7RUFBYyxrQkFBQTtBQTRDOUI7QUEzQ2dCO0VBQWMsa0JBQUE7QUE4QzlCO0FBN0NnQjtFQUFjLGtCQUFBO0FBZ0Q5QjtBQS9DZ0I7RUFBYyxrQkFBQTtBQWtEOUI7QUFqRGdCO0VBQWMsa0JBQUE7QUFvRDlCO0FBbkRnQjtFQUFjLGtCQUFBO0FBc0Q5QjtBQXJEZ0I7RUFBYyxtQkFBQTtBQXdEOUI7QUF2RGdCO0VBQWMsa0JBQUE7QUEwRDlCO0FBekRnQjtFQUFjLGtCQUFBO0FBNEQ5QjtBQTNEZ0I7RUFBYyxrQkFBQTtBQThEOUI7QUE3RGdCO0VBQWMsa0JBQUE7QUFnRTlCO0FBL0RnQjtFQUFjLGtCQUFBO0FBa0U5QjtBQWpFZ0I7RUFBYyxrQkFBQTtBQW9FOUI7QUFuRWdCO0VBQWMsa0JBQUE7QUFzRTlCO0FBckVnQjtFQUFjLG1CQUFBO0FBd0U5QjtBQXZFZ0I7RUFBYyxrQkFBQTtBQTBFOUI7QUF6RWdCO0VBQWMsa0JBQUE7QUE0RTlCO0FBM0VnQjtFQUFjLGtCQUFBO0FBOEU5QjtBQTdFZ0I7RUFBYyxrQkFBQTtBQWdGOUI7QUEvRWdCO0VBQWMsa0JBQUE7QUFrRjlCO0FBakZnQjtFQUFjLGtCQUFBO0FBb0Y5QjtBQW5GZ0I7RUFBYyxrQkFBQTtBQXNGOUI7QUFyRmdCO0VBQWMsbUJBQUE7QUF3RjlCO0FBdkZnQjtFQUFjLGtCQUFBO0FBMEY5QjtBQXpGZ0I7RUFBYyxrQkFBQTtBQTRGOUI7QUEzRmdCO0VBQWMsa0JBQUE7QUE4RjlCO0FBN0ZnQjtFQUFjLGtCQUFBO0FBZ0c5QjtBQS9GZ0I7RUFBYyxrQkFBQTtBQWtHOUI7QUFqR2dCO0VBQWMsa0JBQUE7QUFvRzlCO0FBakdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBbUdoQjtBQWpHZ0I7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBbUdwQjtBQWhHZ0I7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBa0dwQjtBQTlGWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBZ0doQjtBQTlGZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBZ0dwQjtBQTlGZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFnR3BCO0FBN0ZvQjtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUErRnhCO0FBNUZvQjtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUE4RnhCO0FBdkZJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBeUZSO0FBdkZRO0VBQ0ksZ0JBQUE7QUF5Rlo7QUF4Rlk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0FBeUZoQjtBQXZGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF5RmhCO0FBdEZRO0VBQ0ksaUJBQUE7QUF3Rlo7QUFyRkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdUZSOztBQXBGQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQXVGSjs7QUFyRkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtRUFBQTtBQXdGSjs7QUF0RkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXlGSjs7QUF2RkE7RUFDSSxhQUFBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUEwRlI7O0FBeEZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUEyRkoiLCJzb3VyY2VzQ29udGVudCI6WyIudGlja2V0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDAsIDM2KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoMiwgMCwgMzYpIDAlLCByZ2IoNCwgMTYsIDU4KSAzNSUsIHJnYigyMywgNjAsIDEyNSkgMTAwJSk7XG5cbiAgICBwYWRkaW5nOiAzNnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMTdweDsgLyogSW5jcmVhc2UvZGVjcmVhc2UgdGhpcyB2YWx1ZSBmb3IgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5ICovXG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkVGRUZFO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2staWNvbi1idG4ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNmI4NDU0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fY29udGVudCB7XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAmX19sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZGNhZTc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGF0ZS1zZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM3NHB4O1xuXG4gICAgICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3NlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1NUU3QTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJl9fX2ljb24tc2VsZWN0IHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICZfX3NlYXQtcGlja2VyIHtcblxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAuc2VhdC1yb3ctcGFyZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDhweDtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDhweDtcblxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzEgeyBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cyIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MyB7IGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzQgeyBncmlkLWFyZWE6IDEgLyA2IC8gMiAvIDc7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c1IHsgZ3JpZC1hcmVhOiAxIC8gNyAvIDIgLyA4OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NiB7IGdyaWQtYXJlYTogMSAvIDggLyAyIC8gOTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzcgeyBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c4IHsgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93OSB7IGdyaWQtYXJlYTogMiAvIDMgLyAzIC8gNDsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzEwIHsgZ3JpZC1hcmVhOiAyIC8gNCAvIDMgLyA1OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MTEgeyBncmlkLWFyZWE6IDIgLyA2IC8gMyAvIDc7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cxMiB7IGdyaWQtYXJlYTogMiAvIDcgLyAzIC8gODsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzEzIHsgZ3JpZC1hcmVhOiAyIC8gOCAvIDMgLyA5OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MTQgeyBncmlkLWFyZWE6IDIgLyA5IC8gMyAvIDEwOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MTUgeyBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cxNiB7IGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMzsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzE3IHsgZ3JpZC1hcmVhOiAzIC8gMyAvIDQgLyA0OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MTggeyBncmlkLWFyZWE6IDMgLyA0IC8gNCAvIDU7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cxOSB7IGdyaWQtYXJlYTogMyAvIDYgLyA0IC8gNzsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzIwIHsgZ3JpZC1hcmVhOiAzIC8gNyAvIDQgLyA4OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MjEgeyBncmlkLWFyZWE6IDMgLyA4IC8gNCAvIDk7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cyMiB7IGdyaWQtYXJlYTogMyAvIDkgLyA0IC8gMTA7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cyMyB7IGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gMjsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzI0IHsgZ3JpZC1hcmVhOiA0IC8gMiAvIDUgLyAzOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MjUgeyBncmlkLWFyZWE6IDQgLyAzIC8gNSAvIDQ7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cyNiB7IGdyaWQtYXJlYTogNCAvIDQgLyA1IC8gNTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzI3IHsgZ3JpZC1hcmVhOiA0IC8gNiAvIDUgLyA3OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MjggeyBncmlkLWFyZWE6IDQgLyA3IC8gNSAvIDg7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3cyOSB7IGdyaWQtYXJlYTogNCAvIDggLyA1IC8gOTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzMwIHsgZ3JpZC1hcmVhOiA0IC8gOSAvIDUgLyAxMDsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzMxIHsgZ3JpZC1hcmVhOiA1IC8gMSAvIDYgLyAyOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MzIgeyBncmlkLWFyZWE6IDUgLyAyIC8gNiAvIDM7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3czMyB7IGdyaWQtYXJlYTogNSAvIDMgLyA2IC8gNDsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzM0IHsgZ3JpZC1hcmVhOiA1IC8gNCAvIDYgLyA1OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MzUgeyBncmlkLWFyZWE6IDUgLyA2IC8gNiAvIDc7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3czNiB7IGdyaWQtYXJlYTogNSAvIDcgLyA2IC8gODsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzM3IHsgZ3JpZC1hcmVhOiA1IC8gOCAvIDYgLyA5OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MzggeyBncmlkLWFyZWE6IDUgLyA5IC8gNiAvIDEwOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93MzkgeyBncmlkLWFyZWE6IDYgLyAxIC8gNyAvIDI7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c0MCB7IGdyaWQtYXJlYTogNiAvIDIgLyA3IC8gMzsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzQxIHsgZ3JpZC1hcmVhOiA2IC8gMyAvIDcgLyA0OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NDIgeyBncmlkLWFyZWE6IDYgLyA0IC8gNyAvIDU7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c0MyB7IGdyaWQtYXJlYTogNiAvIDYgLyA3IC8gNzsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzQ0IHsgZ3JpZC1hcmVhOiA2IC8gNyAvIDcgLyA4OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NDUgeyBncmlkLWFyZWE6IDYgLyA4IC8gNyAvIDk7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c0NiB7IGdyaWQtYXJlYTogNiAvIDkgLyA3IC8gMTA7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c0NyB7IGdyaWQtYXJlYTogNyAvIDEgLyA4IC8gMjsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzQ4IHsgZ3JpZC1hcmVhOiA3IC8gMiAvIDggLyAzOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NDkgeyBncmlkLWFyZWE6IDcgLyAzIC8gOCAvIDQ7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c1MCB7IGdyaWQtYXJlYTogNyAvIDQgLyA4IC8gNTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzUxIHsgZ3JpZC1hcmVhOiA3IC8gNiAvIDggLyA3OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NTIgeyBncmlkLWFyZWE6IDcgLyA3IC8gOCAvIDg7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c1MyB7IGdyaWQtYXJlYTogNyAvIDggLyA4IC8gOTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzU0IHsgZ3JpZC1hcmVhOiA3IC8gOSAvIDggLyAxMDsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzU1IHsgZ3JpZC1hcmVhOiA4IC8gMiAvIDkgLyAzOyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NTYgeyBncmlkLWFyZWE6IDggLyAzIC8gOSAvIDQ7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c1NyB7IGdyaWQtYXJlYTogOCAvIDQgLyA5IC8gNTsgfVxuICAgICAgICAgICAgICAgIC5zZWF0LXJvdzU4IHsgZ3JpZC1hcmVhOiA4IC8gNiAvIDkgLyA3OyB9XG4gICAgICAgICAgICAgICAgLnNlYXQtcm93NTkgeyBncmlkLWFyZWE6IDggLyA3IC8gOSAvIDg7IH1cbiAgICAgICAgICAgICAgICAuc2VhdC1yb3c2MCB7IGdyaWQtYXJlYTogOCAvIDggLyA5IC8gOTsgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAucm93LXNpbmdsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxRDM3OTg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICAgICAgICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERDQUU3O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNERDQUU3O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYtLXJlc2VydmVkIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5M0E3NDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI5M0E3NDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWdlbmQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBnYXA6IDI0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNERERFRTQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgICAgICAgICAgJl9fcm93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICZfX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxRDM3OTg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuXG4gICAgICAgICAgICAgICAgICAgICYtLXNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RENBRTc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNERDQUU3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICYtLXJlc2VydmVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTNBNzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjkzQTc0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG5cbiAgICAgICAgJl9fbGVmdCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6MTAwcHg7XG4gICAgICAgICAgICAmX19zZWF0cy1jb3VudCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNkQ3MTdEO1xuXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3NlYXRzLXRvdGFsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19yaWdodCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkU7XG4gICAgfVxufVxuLnRpY2tldC1zY3JlZW4tbGluZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGlja2V0LXNjcmVlbi1saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM2NXB4O1xuICAgIG1pbi13aWR0aDogMjU3cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogc29saWQgNXB4ICMxQzM3OTc7XG4gICAgYm9yZGVyLWNvbG9yOiAjMUMzNzk3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJS81MHB4IDUwcHggMCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDIwcHggMjBweCA2cHggIzFmMzM3YTYxO1xufVxuLnRpY2tldC1zY3JlZW4tbGFiZWwge1xuICAgIGNvbG9yOiAjNDQ1MDgxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDE0cHg7XG59XG4uYnV5LW5vdy1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERDQUU3O1xuICAgICAgICB3aWR0aDogMjI1cHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgY29sb3I6ICNGRUZFRkUgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogOHB4O1xufVxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogIzU1NUU3QTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    styles: [".top-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  padding-bottom: 48px;\n}\n.top-bar-container__left[_ngcontent-%COMP%] {\n  display: flex;\n}\n.top-bar-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  min-width: 70px;\n  min-height: 70px;\n  border-radius: 50%;\n  background-color: #2C3758;\n}\n.top-bar-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 24px;\n  gap: 4px;\n  font-size: 24px;\n  font-weight: 500;\n  color: #2C3758;\n}\n.top-bar-container[_ngcontent-%COMP%]   .label__top[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 22px;\n  color: #FEFEFE;\n}\n.top-bar-container[_ngcontent-%COMP%]   .label__bottom[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #7e88a6;\n}\n.top-bar-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .movie-icon[_ngcontent-%COMP%] {\n  color: #ABACB3;\n  font-size: 48px;\n}\n.top-bar-container[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar-container[_ngcontent-%COMP%]   .notifications__dot[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  background-color: #f14545;\n  position: relative;\n  bottom: 16px;\n}\n\n.bell-icon[_ngcontent-%COMP%] {\n  color: #ABACB3;\n  position: relative;\n  left: 4px;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxRQUFBO0VBYUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWRSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ1o7QUFFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBWjtBQU9JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFMWjtBQVFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTlo7O0FBV0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBUko7O0FBVUE7RUFDSSxlQUFBO0FBUEoiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcblxuICAgICZfX2xlZnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMzc1ODtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgJl9fdG9wIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZFRkVGRTtcblxuICAgICAgICB9XG4gICAgICAgICZfX2JvdHRvbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICM3ZTg4YTY7XG4gICAgICAgIH1cbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzJDMzc1ODtcbiAgICB9XG5cbiAgICAucHJvZmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5tb3ZpZS1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjQUJBQ0IzO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJl9fZG90IHtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTQ1NDU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iZWxsLWljb24ge1xuICAgIGNvbG9yOiAjQUJBQ0IzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0cHg7XG59XG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
  APIEndpoint: 'https://www.omdbapi.com/',
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