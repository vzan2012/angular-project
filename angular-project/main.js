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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<!-- Header Section - Start -->\n<app-header-section></app-header-section>\n<!-- Header Section - End -->\n\n<!-- Movie - Slider - Start -->\n<app-movie-slider></app-movie-slider>\n<!-- Movie - Slider - End -->\n\n<!-- Home page - Contents -->\n<app-home-content></app-home-content>\n\n<!-- Latest Movie News - Start -->\n<app-latest-movie-news></app-latest-movie-news>\n<!-- Latest Movie News - End -->\n\n<!-- Footer Section - Start -->\n<app-footer-section></app-footer-section>\n<!-- Footer Section - End -->\n\n"

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
        this.title = 'angular-project';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Tooltip Scripts
        // $(window).alert("TEST");
        //$('[data-toggle="tooltip"]').tooltip();
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer-section/footer-section.component */ "./src/app/footer-section/footer-section.component.ts");
/* harmony import */ var _header_section_header_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-section/header-section.component */ "./src/app/header-section/header-section.component.ts");
/* harmony import */ var _latest_movie_news_latest_movie_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./latest-movie-news/latest-movie-news.component */ "./src/app/latest-movie-news/latest-movie-news.component.ts");
/* harmony import */ var _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-slider/movie-slider.component */ "./src/app/movie-slider/movie-slider.component.ts");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-content/home-content.component */ "./src/app/home-content/home-content.component.ts");
/* harmony import */ var _home_content_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-content/movie-card/movie-card.component */ "./src/app/home-content/movie-card/movie-card.component.ts");
/* harmony import */ var _home_content_quick_search_box_quick_search_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-content/quick-search-box/quick-search-box.component */ "./src/app/home-content/quick-search-box/quick-search-box.component.ts");
/* harmony import */ var _home_content_adv_search_box_adv_search_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-content/adv-search-box/adv-search-box.component */ "./src/app/home-content/adv-search-box/adv-search-box.component.ts");
/* harmony import */ var _home_content_newsletter_box_newsletter_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-content/newsletter-box/newsletter-box.component */ "./src/app/home-content/newsletter-box/newsletter-box.component.ts");
/* harmony import */ var _popular_people_section_popular_people_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popular-people-section/popular-people-section.component */ "./src/app/popular-people-section/popular-people-section.component.ts");
/* harmony import */ var _contact_page_section_contact_page_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact-page-section/contact-page-section.component */ "./src/app/contact-page-section/contact-page-section.component.ts");
/* harmony import */ var _contact_page_section_contact_sidebar_contact_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-page-section/contact-sidebar/contact-sidebar.component */ "./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.ts");
/* harmony import */ var _contact_page_section_contact_content_contact_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-page-section/contact-content/contact-content.component */ "./src/app/contact-page-section/contact-content/contact-content.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_6__["FooterSectionComponent"],
                _header_section_header_section_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSectionComponent"],
                _latest_movie_news_latest_movie_news_component__WEBPACK_IMPORTED_MODULE_8__["LatestMovieNewsComponent"],
                _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_9__["MovieSliderComponent"],
                _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__["HomeContentComponent"],
                _home_content_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_11__["MovieCardComponent"],
                _home_content_quick_search_box_quick_search_box_component__WEBPACK_IMPORTED_MODULE_12__["QuickSearchBoxComponent"],
                _home_content_adv_search_box_adv_search_box_component__WEBPACK_IMPORTED_MODULE_13__["AdvSearchBoxComponent"],
                _home_content_newsletter_box_newsletter_box_component__WEBPACK_IMPORTED_MODULE_14__["NewsletterBoxComponent"],
                _popular_people_section_popular_people_section_component__WEBPACK_IMPORTED_MODULE_15__["PopularPeopleSectionComponent"],
                _contact_page_section_contact_page_section_component__WEBPACK_IMPORTED_MODULE_16__["ContactPageSectionComponent"],
                _contact_page_section_contact_sidebar_contact_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["ContactSidebarComponent"],
                _contact_page_section_contact_content_contact_content_component__WEBPACK_IMPORTED_MODULE_18__["ContactContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-page-section/contact-content/contact-content.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-content/contact-content.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS1zZWN0aW9uL2NvbnRhY3QtY29udGVudC9jb250YWN0LWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-page-section/contact-content/contact-content.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-content/contact-content.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 pg-contents\">\n\t<div class=\"row page-title\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\n\t\t\t<h3><i class=\"fas fa-globe\"></i><span>Staying in Touch</span></h3>\n\t\t</div>\t\t\t\n\t</div>\t\t\t\t\n\t<div class=\"pg-contents\">\n\t\t<div class=\"contact-cont\">\n\t\t\t<p>If you're looking for some help, the best place to get support is our discussion area.</p>\n\t\t\t<p>If you would like to contact us directly, you can use this <a href=\"\" class=\"link-key\" id=\"contact-form-link\"><strong>form</strong></a>.</p>\n\t\t</div>\n\t\t<div class=\"contact-form-wrap\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-6 offset-lg-3\">\n\t\t\t\t\t<form action=\"\" id=\"contact-form\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"txt-emailAddress\">Email Address</label>\n\t\t\t\t\t\t\t<input type=\"email\" id=\"txt-emailAddress\" class=\"form-control\" />\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"txt-subject\">Subject</label>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"txt-subject\" class=\"form-control\" maxlength=\"30\" />\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"txt-message\">Message</label>\n\t\t\t\t\t\t\t<textarea name=\"\" id=\"\" class=\"form-control txt-message\"></textarea>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"submit\" name=\"\" class=\"btn btn-primary btn-contact-submit\" value=\"Send\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/contact-page-section/contact-content/contact-content.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-content/contact-content.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContactContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactContentComponent", function() { return ContactContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactContentComponent = /** @class */ (function () {
    function ContactContentComponent() {
    }
    ContactContentComponent.prototype.ngOnInit = function () {
    };
    ContactContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-content',
            template: __webpack_require__(/*! ./contact-content.component.html */ "./src/app/contact-page-section/contact-content/contact-content.component.html"),
            styles: [__webpack_require__(/*! ./contact-content.component.css */ "./src/app/contact-page-section/contact-content/contact-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactContentComponent);
    return ContactContentComponent;
}());



/***/ }),

/***/ "./src/app/contact-page-section/contact-page-section.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-page-section.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS1zZWN0aW9uL2NvbnRhY3QtcGFnZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-page-section/contact-page-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-page-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact Page - Section - Start -->\n<div class=\"container pg-top-section pages\">\n\t<div class=\"row\">\n\n\t\t<app-contact-content></app-contact-content>\n\t\t\n\t\t<app-contact-sidebar></app-contact-sidebar>\n\n\t</div>\n</div>\n<!-- Contact Page - Section - End -->"

/***/ }),

/***/ "./src/app/contact-page-section/contact-page-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-page-section.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactPageSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageSectionComponent", function() { return ContactPageSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageSectionComponent = /** @class */ (function () {
    function ContactPageSectionComponent() {
    }
    ContactPageSectionComponent.prototype.ngOnInit = function () {
    };
    ContactPageSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page-section',
            template: __webpack_require__(/*! ./contact-page-section.component.html */ "./src/app/contact-page-section/contact-page-section.component.html"),
            styles: [__webpack_require__(/*! ./contact-page-section.component.css */ "./src/app/contact-page-section/contact-page-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactPageSectionComponent);
    return ContactPageSectionComponent;
}());



/***/ }),

/***/ "./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtcGFnZS1zZWN0aW9uL2NvbnRhY3Qtc2lkZWJhci9jb250YWN0LXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 pg-sidebar\">\n\t<div class=\"social-media-wrap\">\n\t\t<div class=\"caption\">\n\t\t\t<h4><span>Follow Us</span></h4>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\n\t\t\t\t<div class=\"social-media\">\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Facebook\"><i class=\"fab fa-facebook-square fa-2x\"></i></a>\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"YouTube\"><i class=\"fab fa-youtube-square fa-2x\"></i></a>\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Vimeo\"><i class=\"fab fa-vimeo-square fa-2x\"></i></a>\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Twitter\"><i class=\"fab fa-twitter-square fa-2x\"></i></a>\n\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContactSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSidebarComponent", function() { return ContactSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactSidebarComponent = /** @class */ (function () {
    function ContactSidebarComponent() {
    }
    ContactSidebarComponent.prototype.ngOnInit = function () {
    };
    ContactSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-sidebar',
            template: __webpack_require__(/*! ./contact-sidebar.component.html */ "./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./contact-sidebar.component.css */ "./src/app/contact-page-section/contact-sidebar/contact-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactSidebarComponent);
    return ContactSidebarComponent;
}());



/***/ }),

/***/ "./src/app/footer-section/footer-section.component.css":
/*!*************************************************************!*\
  !*** ./src/app/footer-section/footer-section.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1zZWN0aW9uL2Zvb3Rlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/footer-section/footer-section.component.html":
/*!**************************************************************!*\
  !*** ./src/app/footer-section/footer-section.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer Section - Start -->\n<footer class=\"footer\">\n\t<div class=\"container text-center\">\n\t\tCopyright &copy; 2018 Voir Videos. All Rights Reserved.\n\t</div>\n</footer>\n<!-- Footer Section - End -->"

/***/ }),

/***/ "./src/app/footer-section/footer-section.component.ts":
/*!************************************************************!*\
  !*** ./src/app/footer-section/footer-section.component.ts ***!
  \************************************************************/
/*! exports provided: FooterSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSectionComponent", function() { return FooterSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterSectionComponent = /** @class */ (function () {
    function FooterSectionComponent() {
    }
    FooterSectionComponent.prototype.ngOnInit = function () {
    };
    FooterSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-section',
            template: __webpack_require__(/*! ./footer-section.component.html */ "./src/app/footer-section/footer-section.component.html"),
            styles: [__webpack_require__(/*! ./footer-section.component.css */ "./src/app/footer-section/footer-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterSectionComponent);
    return FooterSectionComponent;
}());



/***/ }),

/***/ "./src/app/header-section/header-section.component.css":
/*!*************************************************************!*\
  !*** ./src/app/header-section/header-section.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1zZWN0aW9uL2hlYWRlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/header-section/header-section.component.html":
/*!**************************************************************!*\
  !*** ./src/app/header-section/header-section.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-wrap fixed-top\">\n\t<!-- Top Header -->\n\t<div class=\"container top-header\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-6 top-links-w\">\n\t\t\t\t<div class=\"top-links\">\n\t\t\t\t\t<a href=\"#\">Top Link - 1</a>\n\t\t\t\t\t<a href=\"#\">Top Link - 2</a>\n\t\t\t\t\t<a href=\"#\">Top Link - 3</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-6 social-media-links\">\n\t\t\t\t<div class=\"social-media text-right\">\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" title=\"Facebook\"><i class=\"fa fa-facebook-square fa-2x\"></i></a>\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" title=\"YouTube\"><i class=\"fa fa-youtube-square fa-2x\"></i></a>\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" title=\"Vimeo\"><i class=\"fa fa-vimeo-square fa-2x\"></i></a>\n\t\t\t\t\t<a href=\"\" data-toggle=\"tooltip\" title=\"Twitter\"><i class=\"fa fa-twitter-square fa-2x\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Logo Header -->\n\t<div class=\"container-fluid w-header p-0\">\n\t\t<div class=\"container w-header-cont p-0\">\n\t\t\t<nav class=\"navbar navbar-expand-lg navbar-light\">\n\t\t\t  <h1 class=\"d-none\">Voir Videos</h1>\n\t\t\t  <a class=\"navbar-brand\" href=\"index.html\">\n\t\t\t  \t<img src=\"assets/logo.png\" alt=\"Voir Videos\" data-toggle=\"tooltip\" title=\"Welcome to Voir Videos\" />\n\t\t\t  </a>\n\t\t\t  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#w-navbarContent\" aria-controls=\"w-navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t    <span class=\"navbar-toggler-icon\"></span>\n\t\t\t  </button>\n\n\t\t\t  <div class=\"collapse navbar-collapse\" id=\"w-navbarContent\">\n\t\t\t    <ul class=\"navbar-nav ml-auto\">\n\t\t\t      <li class=\"nav-item active\">\n\t\t\t        <a class=\"nav-link\" href=\"index.html\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t\t      </li>\n\t\t\t      <li class=\"nav-item dropdown\">\n\t\t\t        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"discoverDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t          Discover\n\t\t\t        </a>\n\t\t\t        <div class=\"dropdown-menu\" aria-labelledby=\"discoverDropdown\">\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Action</a>\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n\t\t\t          <div class=\"dropdown-divider\"></div>\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n\t\t\t        </div>\n\t\t\t      </li>\n\t\t\t      <li class=\"nav-item dropdown\">\n\t\t\t        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"discoverDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t          Movies\n\t\t\t        </a>\n\t\t\t        <div class=\"dropdown-menu\" aria-labelledby=\"discoverDropdown\">\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Action</a>\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n\t\t\t          <div class=\"dropdown-divider\"></div>\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n\t\t\t        </div>\n\t\t\t      </li>\n\t\t\t      <li class=\"nav-item dropdown\">\n\t\t\t        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"discoverDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t          TV Shows\n\t\t\t        </a>\n\t\t\t        <div class=\"dropdown-menu\" aria-labelledby=\"discoverDropdown\">\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Action</a>\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n\t\t\t          <div class=\"dropdown-divider\"></div>\n\t\t\t          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n\t\t\t        </div>\n\t\t\t      </li>\n\t\t\t      <li class=\"nav-item\">\n\t\t\t        <a class=\"nav-link\" href=\"people.html\">People</a>\n\t\t\t      </li>\n\t\t\t      <li class=\"nav-item\">\n\t\t\t        <a class=\"nav-link\" href=\"contact.html\">Contact</a>\n\t\t\t      </li>\t\t\t\t      \n\t\t\t    </ul>\n\t\t\t  </div>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/header-section/header-section.component.ts":
/*!************************************************************!*\
  !*** ./src/app/header-section/header-section.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSectionComponent", function() { return HeaderSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderSectionComponent = /** @class */ (function () {
    function HeaderSectionComponent() {
    }
    HeaderSectionComponent.prototype.ngOnInit = function () {
    };
    HeaderSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-section',
            template: __webpack_require__(/*! ./header-section.component.html */ "./src/app/header-section/header-section.component.html"),
            styles: [__webpack_require__(/*! ./header-section.component.css */ "./src/app/header-section/header-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderSectionComponent);
    return HeaderSectionComponent;
}());



/***/ }),

/***/ "./src/app/home-content/adv-search-box/adv-search-box.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/home-content/adv-search-box/adv-search-box.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGVudC9hZHYtc2VhcmNoLWJveC9hZHYtc2VhcmNoLWJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home-content/adv-search-box/adv-search-box.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home-content/adv-search-box/adv-search-box.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-card adv-search-box\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n    \t<i class=\"fa fa-search-plus\"></i><span>Advanced Search</span>\n    </div>\n  </div>\n  <div class=\"card-body\">\n  \t<form class=\"row\">\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<select class=\"form-control\">\n  \t\t\t\t<option value=\"\">Order By (Date, Release Date, Rating)</option>\n  \t\t\t\t<option value=\"\">-</option>\n  \t\t\t</select>\n  \t\t</div>\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<select class=\"form-control\">\n  \t\t\t\t<option value=\"\">Director</option>\n  \t\t\t\t<option value=\"\">-</option>\n  \t\t\t</select>\t\t\t\t  \t\t\t\n  \t\t</div>\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<select class=\"form-control\">\n  \t\t\t\t<option value=\"\">Actor</option>\n  \t\t\t\t<option value=\"\">-</option>\n  \t\t\t</select>\t\t\t\t  \t\t\t\n  \t\t</div>\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<select class=\"form-control\">\n  \t\t\t\t<option value=\"\">Genre</option>\n  \t\t\t\t<option value=\"\">-</option>\n  \t\t\t</select>\t\t\t\t  \t\t\t\n  \t\t</div>\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<select class=\"form-control\">\n  \t\t\t\t<option value=\"\">Director</option>\n  \t\t\t\t<option value=\"\">-</option>\n  \t\t\t</select>\t\t\t\t  \t\t\t\n  \t\t</div>\t\t\t\t  \t\t\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<div class=\"row\">\n  \t\t\t\t<div class=\"col-sm-12\"><label class=\"release-label\" for=\"\">Release Date (Min-Max)</label></div>\n\t  \t\t\t<div class=\"col-12 col-sm-6\">\n\t  \t\t\t\t<div class=\"form-group mb-0\">\n\t  \t\t\t\t\t<select name=\"\" id=\"\" class=\"form-control\">\n\t  \t\t\t\t\t\t<option value=\"\">1900</option>\n\t  \t\t\t\t\t</select>\n\t  \t\t\t\t</div>\n\t  \t\t\t</div>\n\t  \t\t\t<div class=\"col-12 col-sm-6\">\n\t  \t\t\t\t<div class=\"form-group mb-0\">\n\t  \t\t\t\t\t<select name=\"\" id=\"\" class=\"form-control\">\n\t  \t\t\t\t\t\t<option value=\"\">2018</option>\n\t  \t\t\t\t\t</select>\n\t  \t\t\t\t</div>\n\t  \t\t\t</div>\t\t\t\t  \t\t\t\t\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"form-group col-sm-12 btn-sr-wrap\">\n  \t\t\t<button type=\"submit\" id=\"btn-adv-search\" class=\"btn btn-primary mr-3\">Search</button>\n  \t\t\t<button type=\"reset\" class=\"btn btn-reset\">Reset</button>\t\n  \t\t</div>\n\n  \t</form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-content/adv-search-box/adv-search-box.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home-content/adv-search-box/adv-search-box.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdvSearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvSearchBoxComponent", function() { return AdvSearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdvSearchBoxComponent = /** @class */ (function () {
    function AdvSearchBoxComponent() {
    }
    AdvSearchBoxComponent.prototype.ngOnInit = function () {
    };
    AdvSearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-search-box',
            template: __webpack_require__(/*! ./adv-search-box.component.html */ "./src/app/home-content/adv-search-box/adv-search-box.component.html"),
            styles: [__webpack_require__(/*! ./adv-search-box.component.css */ "./src/app/home-content/adv-search-box/adv-search-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvSearchBoxComponent);
    return AdvSearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/home-content/home-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/home-content/home-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGVudC9ob21lLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-content/home-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home-content/home-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Section - Start -->\n<div class=\"container w-cards-cont\">\n\t<div class=\"row\">\n\t\t\t<!-- Left Container Section - Start -->\n\t\t\t<div class=\"col-lg-8 col-md-12 col-sm-12 w-lt-cont\">\n\n\t\t\t\t<!-- Movie Card - Container - Start  -->\n\t\t\t\t<app-movie-card></app-movie-card>\n\t\t\t\t<!-- Movie Card - Container - End  -->\n\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!-- Left Container Section - End -->\n\n\t\t\t<!-- Right Container Section - Start -->\n\t\t\t<div class=\"col-lg-4 col-md-12 col-sm-12 w-rt-sidebox\">\n\t\t\t\t<!-- Quick Search Box - Start -->\n\t\t\t\t<app-quick-search-box></app-quick-search-box>\n\t\t\t\t<!-- Quick Search Box - End -->\n\n\t\t\t\t<!-- Advanced Search Box - Start -->\n\t\t\t\t<app-adv-search-box></app-adv-search-box>\n\t\t\t\t<!-- Advanced Search Box - End -->\n\n\t\t\t\t<!-- Newsletter Box - Start -->\n\t\t\t\t<app-newsletter-box></app-newsletter-box>\n\t\t\t\t<!-- Newsletter Box - End -->\n\n\n\t\t\t</div>\n\t\t\t<!-- Right Container Section - End -->\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/home-content/home-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home-content/home-content.component.ts ***!
  \********************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent() {
    }
    HomeContentComponent.prototype.ngOnInit = function () {
    };
    HomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-content',
            template: __webpack_require__(/*! ./home-content.component.html */ "./src/app/home-content/home-content.component.html"),
            styles: [__webpack_require__(/*! ./home-content.component.css */ "./src/app/home-content/home-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/home-content/movie-card/movie-card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home-content/movie-card/movie-card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGVudC9tb3ZpZS1jYXJkL21vdmllLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-content/movie-card/movie-card.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home-content/movie-card/movie-card.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\t<div class=\"col-lg-12 movie-card-cont px-0\">\n\t\t\t\t\t\n\t\t\t\t\t<!-- Movie 1 - Start -->\n\t\t\t\t\t<div class=\"card w-card movie-card\">\n\t\t\t\t\t\t<div class=\"row card-body\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-12 movie-lhs-pic\">\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/movie-cards/1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-sm-12 movie-rhs-cont\">\n\t\t\t\t\t\t\t\t<div class=\"card-title movie-title\"><a href=\"\">The French Chef</a></div>\n\t\t\t\t\t\t\t\t<div class=\"movie-sh-desc\">The French Chef is a television cooking show created and hosted by Julia Child, and produced and broadcast by WGBH, the public television station in Boston...</div>\n\t\t\t\t\t\t\t\t<div class=\"moviestar-rate-display\">\n\t\t\t\t\t\t\t\t\t<input id=\"input-id\" name=\"input-name\" type=\"number\" class=\"rating\" min=0 max=5 step=1 data-size=\"sm\" data-readonly=\"true\" value=\"2.5\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"movie-ty-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-cal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar\"></i><span class=\"m-year\">1963</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-tags\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tags\"></i><span class=\"m-tags\">TV Show</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Movie 1 - End -->\n\n\t\t\t\t\t<!-- Movie 2 - Start -->\n\t\t\t\t\t<div class=\"card w-card movie-card\">\n\t\t\t\t\t\t<div class=\"row card-body\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-12 movie-lhs-pic\">\n\t\t\t\t\t\t\t\t<a href=\"\"><img class=\"img-fluid\" src=\"assets/movie-cards/2.jpg\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-sm-12 movie-rhs-cont\">\n\t\t\t\t\t\t\t\t<div class=\"card-title movie-title\"><a href=\"\">Incredibles 2</a></div>\n\t\t\t\t\t\t\t\t<div class=\"movie-sh-desc\">Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.</div>\n\t\t\t\t\t\t\t\t<div class=\"moviestar-rate-display\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"rating\" min=0 max=5 step=1 data-size=\"sm\" data-readonly=\"true\" value=\"4\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"movie-ty-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-cal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar\"></i><span class=\"m-year\">2018</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-tags\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tags\"></i><span class=\"m-tags\">Action, Adventure, Animation, Family</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Movie 2 - End -->\n\n\t\t\t\t\t<!-- Movie 3 - Start -->\n\t\t\t\t\t<div class=\"card w-card movie-card\">\n\t\t\t\t\t\t<div class=\"row card-body\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-12 movie-lhs-pic\">\n\t\t\t\t\t\t\t\t<a href=\"\"><img class=\"img-fluid\" src=\"assets/movie-cards/3.jpg\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-sm-12 movie-rhs-cont\">\n\t\t\t\t\t\t\t\t<div class=\"card-title movie-title\"><a href=\"\">Smallfoot</a></div>\n\t\t\t\t\t\t\t\t<div class=\"movie-sh-desc\">A bright young yeti finds something he thought didn't exist—a human. News of this “smallfoot” throws the simple yeti community into an uproar...</div>\n\t\t\t\t\t\t\t\t<div class=\"moviestar-rate-display\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"rating\" min=0 max=5 step=1 data-size=\"sm\" data-readonly=\"true\" value=\"3\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"movie-ty-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-cal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar\"></i><span class=\"m-year\">2018</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-tags\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tags\"></i><span class=\"m-tags\">Adventure, Animation, Comedy</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Movie 3 - End -->\t\t\t\t\t\n\n\t\t\t\t\t<!-- Movie 4 - Start -->\n\t\t\t\t\t<div class=\"card w-card movie-card\">\n\t\t\t\t\t\t<div class=\"row card-body\">\n\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-12 movie-lhs-pic\">\n\t\t\t\t\t\t\t\t<a href=\"\"><img class=\"img-fluid\" src=\"assets/movie-cards/4.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-8 col-sm-12 movie-rhs-cont\">\n\t\t\t\t\t\t\t\t<div class=\"card-title movie-title\"><a href=\"\">A Star Is Born</a></div>\n\t\t\t\t\t\t\t\t<div class=\"movie-sh-desc\">Seasoned musician Jackson Maine discovers - and falls in love with - struggling artist Ally. She has just about given up on her dream to make it big...</div>\n\t\t\t\t\t\t\t\t<div class=\"moviestar-rate-display\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"rating\" min=0 max=5 step=1 data-size=\"sm\" data-readonly=\"true\" value=\"5\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"movie-ty-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-cal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar\"></i><span class=\"m-year\">2018</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"movie-tags\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tags\"></i><span class=\"m-tags\">Drama, Music, Romance</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Movie 4 - End -->\t\t\n\n\t\t\t\t</div>"

/***/ }),

/***/ "./src/app/home-content/movie-card/movie-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home-content/movie-card/movie-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent() {
    }
    MovieCardComponent.prototype.ngOnInit = function () {
    };
    MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-card',
            template: __webpack_require__(/*! ./movie-card.component.html */ "./src/app/home-content/movie-card/movie-card.component.html"),
            styles: [__webpack_require__(/*! ./movie-card.component.css */ "./src/app/home-content/movie-card/movie-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieCardComponent);
    return MovieCardComponent;
}());



/***/ }),

/***/ "./src/app/home-content/newsletter-box/newsletter-box.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/home-content/newsletter-box/newsletter-box.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGVudC9uZXdzbGV0dGVyLWJveC9uZXdzbGV0dGVyLWJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home-content/newsletter-box/newsletter-box.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/home-content/newsletter-box/newsletter-box.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-card newsletter-box\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n    \t<i class=\"fa fa-envelope\"></i><span>Newsletter</span>\n    </div>\n  </div>\n  <div class=\"card-body\">\n  \t<form class=\"row\">\n  \t\t<div class=\"form-group col-sm-12\">\n  \t\t\t<label for=\"newsletter-txt\">Subscribe to our mailing list to get latest movie news to your email inbox</label>\n  \t\t\t<input type=\"email\" class=\"form-control\" name=\"\" id=\"newsletter-txt\" placeholder=\"Your Email Address\" />\n  \t\t</div>\n  \t\t<div class=\"form-group col-sm-12 text-center btn-signup-wrap\">\n  \t\t\t<button type=\"submit\" id=\"btn-signup\" class=\"btn btn-primary\">Sign Up</button>\n  \t\t</div>\n  \t</form>\n  </div>\n</div>\t\t"

/***/ }),

/***/ "./src/app/home-content/newsletter-box/newsletter-box.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home-content/newsletter-box/newsletter-box.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewsletterBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterBoxComponent", function() { return NewsletterBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsletterBoxComponent = /** @class */ (function () {
    function NewsletterBoxComponent() {
    }
    NewsletterBoxComponent.prototype.ngOnInit = function () {
    };
    NewsletterBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletter-box',
            template: __webpack_require__(/*! ./newsletter-box.component.html */ "./src/app/home-content/newsletter-box/newsletter-box.component.html"),
            styles: [__webpack_require__(/*! ./newsletter-box.component.css */ "./src/app/home-content/newsletter-box/newsletter-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsletterBoxComponent);
    return NewsletterBoxComponent;
}());



/***/ }),

/***/ "./src/app/home-content/quick-search-box/quick-search-box.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/home-content/quick-search-box/quick-search-box.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGVudC9xdWljay1zZWFyY2gtYm94L3F1aWNrLXNlYXJjaC1ib3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-content/quick-search-box/quick-search-box.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home-content/quick-search-box/quick-search-box.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-card quick-search-box\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n    \t<i class=\"fa fa-search\"></i><span>Quick Search</span>\n    </div>\n  </div>\n  <div class=\"card-body\">\n  \t<form class=\"row\">\n  \t\t<div class=\"form-group col-12 col-lg-8 col-md-12 col-sm-12\">\n  \t\t\t<input type=\"text\" class=\"form-control\" name=\"\" id=\"q-search-txt\" placeholder=\"Enter a keyword...\" />\n  \t\t</div>\n  \t\t<div class=\"form-group col-12 col-lg-4 col-md-12 col-sm-12 pl-0\">\n  \t\t\t<button type=\"submit\" id=\"btn-search\" class=\"btn btn-primary\">Search</button>\n  \t\t</div>\n  \t</form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-content/quick-search-box/quick-search-box.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home-content/quick-search-box/quick-search-box.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuickSearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSearchBoxComponent", function() { return QuickSearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuickSearchBoxComponent = /** @class */ (function () {
    function QuickSearchBoxComponent() {
    }
    QuickSearchBoxComponent.prototype.ngOnInit = function () {
    };
    QuickSearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quick-search-box',
            template: __webpack_require__(/*! ./quick-search-box.component.html */ "./src/app/home-content/quick-search-box/quick-search-box.component.html"),
            styles: [__webpack_require__(/*! ./quick-search-box.component.css */ "./src/app/home-content/quick-search-box/quick-search-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuickSearchBoxComponent);
    return QuickSearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/latest-movie-news/latest-movie-news.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/latest-movie-news/latest-movie-news.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdGVzdC1tb3ZpZS1uZXdzL2xhdGVzdC1tb3ZpZS1uZXdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/latest-movie-news/latest-movie-news.component.html":
/*!********************************************************************!*\
  !*** ./src/app/latest-movie-news/latest-movie-news.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Latest Movie News - Start -->\n\t<div class=\"container w-cards-lmovienews\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-9 col-md-12 col-sm-12\">\n\t\t\t\t<h3><i class=\"fa fa-film\"></i><span>Latest Movie News</span></h3>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t\t<p class=\"text-right mb-0 va-link-wrap\">\n\t\t\t\t\t<a href=\"\" class=\"va-link\">View All &gt;&gt;</a>\n\t\t\t\t</p>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t\t<a href=\"\"><img src=\"assets/movie-news/1.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">The Rock Got Paid $13 Million More Than...</a></h5>\n\t\t\t\t\t\t<p class=\"text-right mb-0\"><a href=\"#\" class=\"vm-link\">View More &gt;&gt;</a></p>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t\t<a href=\"\"><img src=\"assets/movie-news/2.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Kevin Spacey 'Let Me Be Frank' YouTube...</a></h5>\n\t\t\t\t\t\t<p class=\"text-right mb-0\"><a href=\"#\" class=\"vm-link\">View More &gt;&gt;</a></p>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t\t<a href=\"\"><img src=\"assets/movie-news/3.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">'Goodfellas' character actor Frank Adonis...</a></h5>\n\t\t\t\t\t\t<p class=\"text-right mb-0\"><a href=\"#\" class=\"vm-link\">View More &gt;&gt;</a></p>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t\t<a href=\"\"><img src=\"assets/movie-news/4.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Tom Hanks' Mister Rogers Film Finally...</a></h5>\n\t\t\t\t\t\t<p class=\"text-right mb-0\"><a href=\"#\" class=\"vm-link\">View More &gt;&gt;</a></p>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\n\t\t</div>\n\t</div>\n\t<!-- Latest Movie News - End -->"

/***/ }),

/***/ "./src/app/latest-movie-news/latest-movie-news.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/latest-movie-news/latest-movie-news.component.ts ***!
  \******************************************************************/
/*! exports provided: LatestMovieNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestMovieNewsComponent", function() { return LatestMovieNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatestMovieNewsComponent = /** @class */ (function () {
    function LatestMovieNewsComponent() {
    }
    LatestMovieNewsComponent.prototype.ngOnInit = function () {
    };
    LatestMovieNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-latest-movie-news',
            template: __webpack_require__(/*! ./latest-movie-news.component.html */ "./src/app/latest-movie-news/latest-movie-news.component.html"),
            styles: [__webpack_require__(/*! ./latest-movie-news.component.css */ "./src/app/latest-movie-news/latest-movie-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatestMovieNewsComponent);
    return LatestMovieNewsComponent;
}());



/***/ }),

/***/ "./src/app/movie-slider/movie-slider.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-slider/movie-slider.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLXNsaWRlci9tb3ZpZS1zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movie-slider/movie-slider.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-slider/movie-slider.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Movie Slider - Start -->\n<div class=\"container movie-slider-wrap\">\n\t<div class=\"row movie-slider-cont\">\n\t\t<div class=\"movie-slider owl-carousel owl-theme\">\n\t\t\t<div class=\"col-lg-12 item movie-item\"><a href=\"#\" title=\"\"><img class=\"img-fluid\" src=\"assets/movie-slider/1.jpg\" alt=\"\" title=\"\" /></a></div>\n\t\t\t<div class=\"col-lg-12 item movie-item\"><a href=\"#\" title=\"\"><img class=\"img-fluid\" src=\"assets/movie-slider/2.jpg\" alt=\"\" title=\"\" /></a></div>\n\t\t\t<div class=\"col-lg-12 item movie-item\"><a href=\"#\" title=\"\"><img class=\"img-fluid\" src=\"assets/movie-slider/3.jpg\" alt=\"\" title=\"\" /></a></div>\n\t\t\t<div class=\"col-lg-12 item movie-item\"><a href=\"#\" title=\"\"><img class=\"img-fluid\" src=\"assets/movie-slider/4.jpg\" alt=\"\" title=\"\" /></a></div>\t\n\t\t\t<div class=\"col-lg-12 item movie-item\"><a href=\"#\" title=\"\"><img class=\"img-fluid\" src=\"assets/movie-slider/5.jpg\" alt=\"\" title=\"\" /></a></div>\n\t\t\t<div class=\"col-lg-12 item movie-item\"><a href=\"#\" title=\"\"><img class=\"img-fluid\" src=\"assets/movie-slider/5.jpg\" alt=\"\" title=\"\" /></a></div>\t\t\t\n\t\t</div>\n\t</div>\n</div>\n<!-- Movie Slider - End -->"

/***/ }),

/***/ "./src/app/movie-slider/movie-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-slider/movie-slider.component.ts ***!
  \********************************************************/
/*! exports provided: MovieSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSliderComponent", function() { return MovieSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MovieSliderComponent = /** @class */ (function () {
    function MovieSliderComponent() {
    }
    MovieSliderComponent.prototype.ngOnInit = function () {
    };
    MovieSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-slider',
            template: __webpack_require__(/*! ./movie-slider.component.html */ "./src/app/movie-slider/movie-slider.component.html"),
            styles: [__webpack_require__(/*! ./movie-slider.component.css */ "./src/app/movie-slider/movie-slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieSliderComponent);
    return MovieSliderComponent;
}());



/***/ }),

/***/ "./src/app/popular-people-section/popular-people-section.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/popular-people-section/popular-people-section.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXItcGVvcGxlLXNlY3Rpb24vcG9wdWxhci1wZW9wbGUtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/popular-people-section/popular-people-section.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/popular-people-section/popular-people-section.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Popular People - Section - Start -->\n<div class=\"container pg-top-section w-cards-p-people\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\n\t\t\t<h3><i class=\"fas fa-users\"></i><span>Popular People</span></h3>\n\t\t</div>\t\t\t\n\t</div>\n\t<div class=\"row\">\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/chris-hemsworth.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"#\">Chris Hemsworth</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">The Avengers, Avengers: Age of Ult...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/henry-cavill.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Henry Cavill</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Batman v Superman: Dawn of Just...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/jason-momoa.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Jason Momoa</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Batman v Superman: Dawn of Just...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/jason-statham.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Jason Statham</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Fast &amp; Furious 6, Furious 7, Spy, The...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/johnny-depp.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Johnny Depp</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Pirates of the Caribbean: The Curse...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/robert-de-niro.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Robert De Niro</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Silver Linings Playbook, Limitless...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/tom-hardy.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Tom Hardy</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Inception, Mad Max: Fury Road, The...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-12 col-sm-12\">\n\t\t\t<div class=\"card w-card lmn-card\">\n\t\t\t\t<a href=\"\"><img src=\"img/people/wesley-snipes.jpg\" alt=\"\" class=\"img-fluid\" /></a>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\"><a href=\"\">Wesley Snipes</a></h5>\n\t\t\t\t\t<span class=\"p-movie-title\">Blade, The Expendables 3, Blade II...</span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\t\t\t\t\t\t\n\n\t</div>\n</div>\n<!-- Popular People - Section - End -->"

/***/ }),

/***/ "./src/app/popular-people-section/popular-people-section.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/popular-people-section/popular-people-section.component.ts ***!
  \****************************************************************************/
/*! exports provided: PopularPeopleSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularPeopleSectionComponent", function() { return PopularPeopleSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopularPeopleSectionComponent = /** @class */ (function () {
    function PopularPeopleSectionComponent() {
    }
    PopularPeopleSectionComponent.prototype.ngOnInit = function () {
    };
    PopularPeopleSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popular-people-section',
            template: __webpack_require__(/*! ./popular-people-section.component.html */ "./src/app/popular-people-section/popular-people-section.component.html"),
            styles: [__webpack_require__(/*! ./popular-people-section.component.css */ "./src/app/popular-people-section/popular-people-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopularPeopleSectionComponent);
    return PopularPeopleSectionComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! G:\Work-Files\PRI\Project-Work\SHARED\angular-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map