function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" style=\"min-height: 50px !important; height: 50px !important;\">\n  <mat-toolbar-row>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\" (click)=\"drawer.toggle()\" *ngIf=\"hideSideDrawer\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"toolbar-heading\">\n      <a [routerLink]=\"'/home'\" [routerLinkActive]=\"['active']\" >Glenburn MIS</a>\n    </h1>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav #drawer [mode]=\"hideSideDrawer ? 'over' : 'side'\" [opened] = \"hideSideDrawer ? false : true \">\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"'/home'\" [routerLinkActive]=\"['active']\"> Daily Report </a>\n      <a mat-list-item [routerLink]=\"'/cultdaily'\" [routerLinkActive]=\"['active']\"> Cultivation </a>\n      <a mat-list-item [routerLink]=\"'/cultgroup'\" [routerLinkActive]=\"['active']\"> Cultivation Group </a>\n      <a mat-list-item [routerLink]=\"'/pluckdaily'\" [routerLinkActive]=\"['active']\"> Plucking </a>\n      <a mat-list-item [routerLink]=\"'/pluckgroup'\" [routerLinkActive]=\"['active']\"> Plucking Group </a>\n      <a mat-list-item [routerLink]=\"'/mnddeploy'\" [routerLinkActive]=\"['active']\"> Mnd Deployment </a>\n      <a mat-list-item [routerLink]=\"'/fuelreport'\" [routerLinkActive]=\"['active']\"> Fuel Report </a>\n      <a mat-list-item [routerLink]=\"'/teastock'\" [routerLinkActive]=\"['active']\"> Tea Stock </a>\n      <a mat-list-item [routerLink]=\"'/factory'\" [routerLinkActive]=\"['active']\"> Factory </a>\n      <a mat-list-item [routerLink]=\"'/teamade'\" [routerLinkActive]=\"['active']\"> Tea Made </a>\n      <a mat-list-item [routerLink]=\"'/fineleaf'\" [routerLinkActive]=\"['active']\"> Green Leaf </a>\n      <a mat-list-item [routerLink]=\"'/gradeper'\" [routerLinkActive]=\"['active']\"> Grade Per </a>\n      <a mat-list-item [routerLink]=\"'/invoicelist'\" [routerLinkActive]=\"['active']\"> Invoice List </a>\n      <a mat-list-item [routerLink]=\"'/upload-csv'\" [routerLinkActive]=\"['active']\"> Upload File </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div style=\"height: 33rem;\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cultivation-grp/cultivation-grp.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cultivation-grp/cultivation-grp.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCultivationGrpCultivationGrpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container heading-wrap\">\n  <div class=\"heading\">\n    <h3>Cultivation Group Reports</h3>\n  </div>\n  <div class=\"control-wrap\">\n    <div class=\"datepicker-control\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n          (dateChange)=\"dateChange('enddate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n  </div>\n</div>\n  \n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"dataSource\">\n    \n    <ng-container matColumnDef=\"Job_Name\">\n      <th mat-header-cell *matHeaderCellDef> Job Name</th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.Job_Name }} </td>\n      <td mat-footer-cell *matFooterCellDef>Toatl</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"AreaCovered\">\n      <th mat-header-cell *matHeaderCellDef> Area covered </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','AreaCovered') | number}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Mandays\">\n      <th mat-header-cell *matHeaderCellDef> Mandays </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Mandays') | number}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"MndArea\">\n      <th mat-header-cell *matHeaderCellDef> Mnd/Area </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.MndArea}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','MndArea') | number}}</td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n  \n      <!-- header -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <!-- data -->\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <!-- footer -->\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n  \n  \n  <!-- Compare section -->\n<div class=\"example-container heading-wrap\">\n  <h3>Comparision table</h3>\n  <div class=\"control-wrap\">\n    <div class=\"datepicker-control\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n          (dateChange)=\"dateChange('startdateCmp', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n        <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n          (dateChange)=\"dateChange('enddateCmp', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n        <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Compare</button>\n  </div>\n</div>\n  \n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"dataSourceCmp\">\n\n      <ng-container matColumnDef=\"Job_Name\">\n        <th mat-header-cell *matHeaderCellDef>Job Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.Job_Name }} </td>\n      <td mat-footer-cell *matFooterCellDef>Total</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"AreaCovered\">\n        <th mat-header-cell *matHeaderCellDef> Area covered </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','AreaCovered') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Mandays\">\n        <th mat-header-cell *matHeaderCellDef> Mandays </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Mandays') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"MndArea\">\n        <th mat-header-cell *matHeaderCellDef> Mnd/Area </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.MndArea}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','MndArea') | number}}</td>\n      </ng-container>\n\n      <!-- header -->\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <!-- data -->\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>    \n      <!-- footer -->\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cultivation/cultivation.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cultivation/cultivation.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCultivationCultivationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\">\n  <mat-grid-tile colspan=\"1\">\n    <h3>Cultivation reports</h3>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-form-field style=\"width: 100px !important;\">\n      <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n        (dateChange)=\"dateChange('startdate', $event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field style=\"width: 100px !important;\">\n      <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n        (dateChange)=\"dateChange('enddate', $event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"Date\">\n      <th mat-header-cell *matHeaderCellDef> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Date}} </td>\n      <td mat-footer-cell *matFooterCellDef>Total</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"AreaCovered\">\n      <th mat-header-cell *matHeaderCellDef> Area covered </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','AreaCovered') | number}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Division\">\n      <th mat-header-cell *matHeaderCellDef> Division </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Job_Name\">\n      <th mat-header-cell *matHeaderCellDef> Job Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Job_Name}} </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Mandays\">\n      <th mat-header-cell *matHeaderCellDef> Mandays </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n      <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Mandays') | number}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Mnd/Area\">\n      <th mat-header-cell *matHeaderCellDef> Mnd/Area </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Mnd_Area}} </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Section_Name\">\n      <th mat-header-cell *matHeaderCellDef> Section Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Squad_Name\">\n      <th mat-header-cell *matHeaderCellDef> Squad Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Squad_Name}} </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n    <!-- header -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <!-- data -->\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <!-- footer -->\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n\n<!-- Compare section -->\n<div>\n  <mat-grid-list cols=\"3\" rowHeight=\"80px\">\n    <mat-grid-tile colspan=\"1\">\n      <h3>Comparision table</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n          (dateChange)=\"dateChange('startdateCmp', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n        <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n          (dateChange)=\"dateChange('enddateCmp', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n        <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Go</button>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSourceCmp\">\n      <ng-container matColumnDef=\"Date\">\n        <th mat-header-cell *matHeaderCellDef> Date </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Date}} </td>\n        <td mat-footer-cell *matFooterCellDef>Total</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"AreaCovered\">\n        <th mat-header-cell *matHeaderCellDef> Area covered </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','AreaCovered') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Division\">\n        <th mat-header-cell *matHeaderCellDef> Division </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Job_Name\">\n        <th mat-header-cell *matHeaderCellDef> Job Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Job_Name}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Mandays\">\n        <th mat-header-cell *matHeaderCellDef> Mandays </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Mandays') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Mnd/Area\">\n        <th mat-header-cell *matHeaderCellDef> Mnd/Area </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Mnd_Area}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Section_Name\">\n        <th mat-header-cell *matHeaderCellDef> Section Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Squad_Name\">\n        <th mat-header-cell *matHeaderCellDef> Squad Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Squad_Name}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- header -->\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <!-- data -->\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      <!-- footer -->\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/daily-report/daily-report.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/daily-report/daily-report.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDailyReportDailyReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\" class=\"example-container col-5\">\n    <mat-grid-tile [colspan]=\"stackGrid ? 3 : 1\">\n      <h3>Daily Reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"stackGrid ? 3 : 2\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\" style=\"width: 100px !important;\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n</mat-grid-list>\n\n\n<h3 class=\"table-heading\">Tea Made</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"teaMadeData\">\n\n        <ng-container matColumnDef=\"TMToday\">\n            <th mat-header-cell *matHeaderCellDef> TM Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','TMToday') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"TMTodate\">\n            <th mat-header-cell *matHeaderCellDef> TM Todate </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMTodate}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','TMTodate') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"TMTodateLY\">\n            <th mat-header-cell *matHeaderCellDef> TM Todate LY </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMTodateLY}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','TMTodateLY') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"RecoveryToday\">\n            <th mat-header-cell *matHeaderCellDef> Recovery Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.RecoveryToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','RecoveryToday') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"RecoveryTodate\">\n            <th mat-header-cell *matHeaderCellDef> Recovery To date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.RecoveryTodate}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','RecoveryTodate') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"teaMadeColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: teaMadeColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"teaMadeColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Green Leaf Data</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"greenleafData\">\n\n        <ng-container matColumnDef=\"Division\">\n            <th mat-header-cell *matHeaderCellDef> Division </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n\n        </ng-container>\n\n        <ng-container matColumnDef=\"GLToday\">\n            <th mat-header-cell *matHeaderCellDef> GL Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GLToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('greenleafData','GLToday') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"GLTodayLY\">\n            <th mat-header-cell *matHeaderCellDef> GL Today LY </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GLTodayLY}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('greenleafData','GLTodayLY') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"FineLeaf\">\n            <th mat-header-cell *matHeaderCellDef> Fine Leaf </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.FineLeaf}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('greenleafData','FineLeaf') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"greenLeafColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: greenLeafColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"greenLeafColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Grade Per Data</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"gradePerData\">\n\n        <ng-container matColumnDef=\"Grade\">\n            <th mat-header-cell *matHeaderCellDef> Grade </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Grade}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Qnty\">\n            <th mat-header-cell *matHeaderCellDef> Quantity </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Qnty}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('gradePerData','Qnty') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Percent\">\n            <th mat-header-cell *matHeaderCellDef> Percent </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Percent | number: '1.2-2' }} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"GradePerColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: GradePerColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"GradePerColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Mandays Data</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"MandaysData\">\n\n        <ng-container matColumnDef=\"Job_Name\">\n            <th mat-header-cell *matHeaderCellDef> Job Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Job_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Mandays\">\n            <th mat-header-cell *matHeaderCellDef> Mandays </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('MandaysData','Mandays') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"MandaysColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: MandaysColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"MandaysColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Plucking Data</h3>\n<div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"PluckingData\" class=\"col-10\">\n\n        <ng-container matColumnDef=\"Division\">\n            <th mat-header-cell *matHeaderCellDef> Division </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Date\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Date}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Section_Name\">\n            <th mat-header-cell *matHeaderCellDef> Section Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Squad_Name\">\n            <th mat-header-cell *matHeaderCellDef> Squad Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Squad_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Mandays\">\n            <th mat-header-cell *matHeaderCellDef> Mandays </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','Mandays') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Greenleaf\">\n            <th mat-header-cell *matHeaderCellDef> Greenleaf </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Greenleaf}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','Greenleaf') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"AreaCovered\">\n            <th mat-header-cell *matHeaderCellDef> AreaCovered </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','AreaCovered') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"GlMnd\">\n            <th mat-header-cell *matHeaderCellDef> Gl Mnd </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GlMnd}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','GlMnd') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"GlHa\">\n            <th mat-header-cell *matHeaderCellDef> Gl Ha </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GlHa}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','GlHa') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"MndHa\">\n            <th mat-header-cell *matHeaderCellDef> Mnd Ha </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MndHa}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','MndHa') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Prune\">\n            <th mat-header-cell *matHeaderCellDef> Prune </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Prune}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Jat\">\n            <th mat-header-cell *matHeaderCellDef> Jat </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Jat}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"SecArea\">\n            <th mat-header-cell *matHeaderCellDef> Section Area </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.SecArea}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('PluckingData','SecArea') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"PluckingColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: PluckingColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"PluckingColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n\n<h3 class=\"table-heading\">Cultivation Data</h3>\n<div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"CultivationData\" class=\"col-10\">\n\n        <ng-container matColumnDef=\"Division\">\n            <th mat-header-cell *matHeaderCellDef> Division </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n          </ng-container>\n\n        <ng-container matColumnDef=\"Date\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Date}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"AreaCovered\">\n            <th mat-header-cell *matHeaderCellDef> Area covered </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('CultivationData','AreaCovered') | number}}</td>\n          </ng-container>\n    \n      \n          <ng-container matColumnDef=\"Job_Name\">\n            <th mat-header-cell *matHeaderCellDef> Job Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Job_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"Mandays\">\n            <th mat-header-cell *matHeaderCellDef> Mandays </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('CultivationData','Mandays') | number}}</td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"Mnd/Area\">\n            <th mat-header-cell *matHeaderCellDef> Mnd/Area </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MndArea}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('CultivationData','MndArea') | number}}</td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"Section_Name\">\n            <th mat-header-cell *matHeaderCellDef> Section Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"Squad_Name\">\n            <th mat-header-cell *matHeaderCellDef> Squad Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Squad_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n          </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"CultivationColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: CultivationColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"CultivationColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Fuel Report Data</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"FuelReportData\">\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"Machine\">\n            <th mat-header-cell *matHeaderCellDef>Machine</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Machine}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n        \n            <!-- Fuel used Column -->\n        <ng-container matColumnDef=\"FuelUsed\">\n            <th mat-header-cell *matHeaderCellDef> Fuel Used </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.FuelUsed}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('FuelReportData','FuelUsed') | number}}</td>\n        </ng-container>\n\n            <!-- TM Column -->\n        <ng-container matColumnDef=\"TM\">\n            <th mat-header-cell *matHeaderCellDef> Tea Made </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TM}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('FuelReportData','TM') | number}}</td>\n        </ng-container>\n\n            <!-- TM Fuel Column -->\n        <ng-container matColumnDef=\"TMFuel\">\n            <th mat-header-cell *matHeaderCellDef> TM Fuel </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMFuel}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('FuelReportData','TMFuel') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"FuelReportColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: FuelReportColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"FuelReportColumns; sticky: true\"></tr>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/factory/factory.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factory/factory.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFactoryFactoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\" class=\"example-container col-5\">\n    <mat-grid-tile colspan=\"1\">\n      <h3>Factory reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"date\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n</mat-grid-list>\n\n\n<h3 class=\"table-heading\">Tea Made</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"teaMadeData\">\n\n        <ng-container matColumnDef=\"TMToday\">\n            <th mat-header-cell *matHeaderCellDef> TM Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','TMToday') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"TMTodate\">\n            <th mat-header-cell *matHeaderCellDef> TM Todate </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMTodate}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','TMTodate') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"TMTodateLY\">\n            <th mat-header-cell *matHeaderCellDef> TM Todate LY </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.TMTodateLY}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','TMTodateLY') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"RecoveryToday\">\n            <th mat-header-cell *matHeaderCellDef> Recovery Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.RecoveryToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','RecoveryToday') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"RecoveryTodate\">\n            <th mat-header-cell *matHeaderCellDef> Recovery To date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.RecoveryTodate}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('teaMadeData','RecoveryTodate') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"teaMadeColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: teaMadeColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"teaMadeColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Green Leaf Data</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"greenleafData\">\n\n        <ng-container matColumnDef=\"Division\">\n            <th mat-header-cell *matHeaderCellDef> Division </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"GLToday\">\n            <th mat-header-cell *matHeaderCellDef> GL Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GLToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('greenleafData','GLToday') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"GLTodayLY\">\n            <th mat-header-cell *matHeaderCellDef> GL Today LY </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GLTodayLY}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('greenleafData','GLTodayLY') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"FineLeaf\">\n            <th mat-header-cell *matHeaderCellDef> Fine Leaf </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.FineLeaf}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('greenleafData','FineLeaf') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"greenLeafColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: greenLeafColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"greenLeafColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n<h3 class=\"table-heading\">Garde Per Data</h3>\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"gradePerData\">\n\n        <ng-container matColumnDef=\"Grade\">\n            <th mat-header-cell *matHeaderCellDef> Grade </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Grade}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Qnty\">\n            <th mat-header-cell *matHeaderCellDef> Quantity </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Qnty}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('gradePerData','Qnty') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Percent\">\n            <th mat-header-cell *matHeaderCellDef> Percent </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Percent | number: '1.2-2' }} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"GradePerColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: GradePerColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"GradePerColumns; sticky: true\"></tr>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fine-leaf/fine-leaf.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fine-leaf/fine-leaf.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFineLeafFineLeafComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\" class=\"example-container col-5\">\n    <mat-grid-tile colspan=\"1\">\n      <h3>Green Leaf reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n          (dateChange)=\"dateChange('enddate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n</mat-grid-list>\n  \n<div class=\"example-container mat-elevation-z8 col-5\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"Division\">\n          <th mat-header-cell *matHeaderCellDef> Division </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n          <td mat-footer-cell *matFooterCellDef>Total</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"GLToday\">\n          <th mat-header-cell *matHeaderCellDef> GL Today </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.GLToday}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{ getTotal('dataSource','GLToday') | number }}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"GLTodayLY\">\n          <th mat-header-cell *matHeaderCellDef> GL Today LY </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.GLTodayLY}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{ getTotal('dataSource','GLTodayLY') | number }}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"FineLeaf\">\n          <th mat-header-cell *matHeaderCellDef> Fine Leaf </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.FineLeaf}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{ getTotal('dataSource','FineLeaf') | number }}</td>\n      </ng-container>\n\n    <!-- header -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <!-- data -->\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <!-- footer -->\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n  \n<!-- Compare section -->\n<mat-grid-list cols=\"3\" rowHeight=\"80px\" class=\"example-container col-5\">\n  <mat-grid-tile colspan=\"1\">\n    <h3>Comparision table</h3>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-form-field style=\"width: 100px !important;\">\n      <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n        (dateChange)=\"dateChange('startdateCmp', $event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n      <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field style=\"width: 100px !important;\">\n      <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n        (dateChange)=\"dateChange('enddateCmp', $event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n      <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Compare</button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"dataSourceCmp\">\n\n        <ng-container matColumnDef=\"Division\">\n            <th mat-header-cell *matHeaderCellDef> Division </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"GLToday\">\n            <th mat-header-cell *matHeaderCellDef> GL Today </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GLToday}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{ getTotal('dataSourceCmp','GLToday') | number }}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"GLTodayLY\">\n            <th mat-header-cell *matHeaderCellDef> GL Today LY </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GLTodayLY}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{ getTotal('dataSourceCmp','GLTodayLY') | number }}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"FineLeaf\">\n            <th mat-header-cell *matHeaderCellDef> Fine Leaf </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.FineLeaf}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{ getTotal('dataSourceCmp','FineLeaf') | number }}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fuel-report/fuel-report.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fuel-report/fuel-report.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFuelReportFuelReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"2\" rowHeight=\"60px\">\n    <mat-grid-tile colspan=\"2\">\n      <h1>Fuel Report</h1>\n    </mat-grid-tile>\n</mat-grid-list>\n  \n<div class=\"container\">\n  <div class=\"example-container\">\n    <h3>Report</h3>\n    <div class=\"control-wrap\">\n      <div class=\"date-picker\">\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n            (dateChange)=\"dateChange('startdate', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n            (dateChange)=\"dateChange('enddate', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </div>\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    \n        <!-- Machine Column -->\n        <ng-container matColumnDef=\"Machine\">\n        <th mat-header-cell *matHeaderCellDef> Machine </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Machine}} </td>\n        <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n    \n        <!-- Fuel used Column -->\n        <ng-container matColumnDef=\"FuelUsed\">\n        <th mat-header-cell *matHeaderCellDef> Fuel Used </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.FuelUsed}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','FuelUsed') | number}}</td>\n        </ng-container>\n\n        <!-- TM Column -->\n        <ng-container matColumnDef=\"TM\">\n          <th mat-header-cell *matHeaderCellDef> TM </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.TM}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','TM') | number}}</td>\n        </ng-container>\n\n        <!-- TM Fuel Column -->\n        <ng-container matColumnDef=\"TMFuel\" class=\"mat-elevation-z8\">\n          <th mat-header-cell *matHeaderCellDef> TM Fuel </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.TMFuel}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','TMFuel') | number}}</td>\n        </ng-container>\n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n  </div>\n\n  <div class=\"example-container\">\n    <h3>Compare</h3>\n    <div class=\"control-wrap\">\n      <div class=\"date-picker\">\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n            (dateChange)=\"dateChange('startdateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n            (dateChange)=\"dateChange('enddateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n          <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Compare</button>\n    </div>\n\n    <table mat-table [dataSource]=\"dataSourceCmp\" class=\"mat-elevation-z8\">\n    \n        <!-- Position Column -->\n        <ng-container matColumnDef=\"Machine\">\n        <th mat-header-cell *matHeaderCellDef>Machine</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Machine}} </td>\n        <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n    \n        <!-- Fuel used Column -->\n        <ng-container matColumnDef=\"FuelUsed\">\n          <th mat-header-cell *matHeaderCellDef> Fuel Used </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.FuelUsed}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','FuelUsed') | number}}</td>\n        </ng-container>\n\n        <!-- TM Column -->\n        <ng-container matColumnDef=\"TM\">\n          <th mat-header-cell *matHeaderCellDef> TM </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.TM}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','TM') | number}}</td>\n        </ng-container>\n\n        <!-- TM Fuel Column -->\n        <ng-container matColumnDef=\"TMFuel\">\n          <th mat-header-cell *matHeaderCellDef> TM Fuel </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.TMFuel}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','TMFuel') | number}}</td>\n        </ng-container>\n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n  </div>\n</div>\n  \n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/grade-per/grade-per.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grade-per/grade-per.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGradePerGradePerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>grade-per works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice-list/invoice-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice-list/invoice-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInvoiceListInvoiceListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\" class=\"example-container col-5\">\n    <mat-grid-tile colspan=\"1\">\n      <h3>Invoice reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n          (dateChange)=\"dateChange('enddate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n</mat-grid-list>\n  \n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"InvNo\">\n        <th mat-header-cell *matHeaderCellDef> InvNo </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.InvNo}} </td>\n        <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Grade\">\n        <th mat-header-cell *matHeaderCellDef> Grade </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Grade}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"NetWt\">\n        <th mat-header-cell *matHeaderCellDef> Net Wt </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.NetWt}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','NetWt') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Papersacks\">\n        <th mat-header-cell *matHeaderCellDef> Paper Sacks </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Papersacks}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Papersacks') | number}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Packdate\">\n        <th mat-header-cell *matHeaderCellDef> Packdate </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Packdate}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mnd-deployment/mnd-deployment.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mnd-deployment/mnd-deployment.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMndDeploymentMndDeploymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"2\" rowHeight=\"50px\">\n  <mat-grid-tile colspan=\"2\">\n    <h1>Mnd Deployment</h1>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <h3>Report Table</h3>\n  </mat-grid-tile >\n  <mat-grid-tile>\n    <h3>Compare Table</h3>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-grid-list cols=\"2\" rowHeight=\"500px\">\n  <mat-grid-tile>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"control-wrap\">\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n            (dateChange)=\"dateChange('startdate', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n            (dateChange)=\"dateChange('enddate', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n        <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n      </div>\n\n      <table mat-table [dataSource]=\"dataSource\">\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"Job_Name\" >\n          <th mat-header-cell *matHeaderCellDef> Job Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Job_Name}} </td>\n          <td mat-footer-cell *matFooterCellDef>Total</td>\n          </ng-container>\n      \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Mandays\">\n          <th mat-header-cell *matHeaderCellDef> Mandays </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Mandays') | number}}</td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n\n      </table>\n    </div>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"control-wrap\">\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n            (dateChange)=\"dateChange('startdateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n    \n        <mat-form-field style=\"width: 100px !important;\"> \n          <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n            (dateChange)=\"dateChange('enddateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n          <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n        <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Compare</button>\n      </div>\n\n\n      <table mat-table [dataSource]=\"dataSourceCmp\">\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"Job_Name\">\n          <th mat-header-cell *matHeaderCellDef>Job Name</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Job_Name}} </td>\n          <td mat-footer-cell *matFooterCellDef>Total</td>\n          </ng-container>\n      \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Mandays\">\n          <th mat-header-cell *matHeaderCellDef> Mandays </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Mandays') | number}}</td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n      </table>\n    </div>\n  </mat-grid-tile>\n</mat-grid-list>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/plucking-grp/plucking-grp.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plucking-grp/plucking-grp.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPluckingGrpPluckingGrpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"2\" rowHeight=\"90px\">\n    <mat-grid-tile colspan=\"2\">\n      <h3>Plucking Group Reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Select a group</mat-label>\n            <mat-select [(value)]=\"selected\">\n              <mat-option>None</mat-option>\n              <mat-option value=\"Section\">Section</mat-option>\n              <mat-option value=\"Division\">Division</mat-option>\n              <mat-option value=\"Squad\">Squad</mat-option>\n            </mat-select>\n          </mat-form-field>\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n          (dateChange)=\"dateChange('enddate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n  </mat-grid-list>\n  \n  <div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n    \n    <ng-container [matColumnDef]=\"group === 'Section' ? 'Section_Name' : group === 'Division' ? 'Division' : 'Squad' \">\n      <th mat-header-cell *matHeaderCellDef> {{ group === 'Section' ? 'Section Name' : group === 'Division' ? 'Division' : 'Squad' }}</th>\n      <td mat-cell *matCellDef=\"let element\"> {{ group === 'Section' ? element.Section_Name : group === 'Division' ? element.Division : element.Squad }} </td>\n      <td mat-footer-cell *matFooterCellDef>Total</td>\n    </ng-container>\n\n  \n      <ng-container matColumnDef=\"Mandays\">\n        <th mat-header-cell *matHeaderCellDef> Mandays </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Mandays') | number}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Greenleaf\">\n        <th mat-header-cell *matHeaderCellDef> Greenleaf </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Greenleaf}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Greenleaf') | number}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"AreaCovered\">\n        <th mat-header-cell *matHeaderCellDef> Area Covered </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','AreaCovered') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"GLMnd\">\n        <th mat-header-cell *matHeaderCellDef> GL Mnd </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.GLMnd}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','GLMnd') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"GLArea\">\n        <th mat-header-cell *matHeaderCellDef> GL Area </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.GLArea}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','GLArea') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"MndArea\">\n        <th mat-header-cell *matHeaderCellDef> Mnd Area </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.MndArea}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','MndArea') | number}}</td>\n      </ng-container>\n  \n      <!-- header -->\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <!-- data -->\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      <!-- footer -->\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n  </div>\n  \n  \n  <!-- Compare section -->\n  <div>\n    <mat-grid-list cols=\"2\" rowHeight=\"80px\">\n      <mat-grid-tile colspan=\"2\">\n        <h3>Comparision table</h3>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\">\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Select a group</mat-label>\n          <mat-select [(value)]=\"selectedCmp\">\n            <mat-option>None</mat-option>\n            <mat-option value=\"Section\">Section</mat-option>\n            <mat-option value=\"Division\">Division</mat-option>\n            <mat-option value=\"Squad\">Squad</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n            (dateChange)=\"dateChange('startdateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n  \n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n            (dateChange)=\"dateChange('enddateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n          <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n  \n        <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Compare</button>\n      </mat-grid-tile>\n    </mat-grid-list>\n  \n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSourceCmp\">\n\n        <ng-container [matColumnDef]=\"groupCmp === 'Section' ? 'Section_Name' : groupCmp === 'Division' ? 'Division' : 'Squad' \">\n          <th mat-header-cell *matHeaderCellDef> {{ groupCmp === 'Section' ? 'Section Name' : groupCmp === 'Division' ? 'Division' : 'Squad' }}</th>\n          <td mat-cell *matCellDef=\"let element\"> {{ groupCmp === 'Section' ? element.Section_Name : groupCmp === 'Division' ? element.Division : element.Squad }} </td>\n          <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"Mandays\">\n          <th mat-header-cell *matHeaderCellDef> Mandays </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Mandays') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Greenleaf\">\n          <th mat-header-cell *matHeaderCellDef> Greenleaf </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Greenleaf}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Greenleaf') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"AreaCovered\">\n          <th mat-header-cell *matHeaderCellDef> Area Covered </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','AreaCovered') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"GLMnd\">\n          <th mat-header-cell *matHeaderCellDef> GL Mnd </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.GLMnd}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','GLMnd') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"GLArea\">\n          <th mat-header-cell *matHeaderCellDef> GL Area </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.GLArea}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','GLArea') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"MndArea\">\n          <th mat-header-cell *matHeaderCellDef> Mnd Area </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.MndArea}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','MndArea') | number}}</td>\n        </ng-container>\n  \n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsCmp; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumnsCmp;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumnsCmp; sticky: true\"></tr>\n      </table>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/plucking/plucking.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plucking/plucking.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPluckingPluckingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\">\n    <mat-grid-tile colspan=\"1\">\n      <h3>Plucking reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End Date\" [value]=\"enddate\" disabled\n          (dateChange)=\"dateChange('enddate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n  </mat-grid-list>\n  \n  <div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"Date\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Date}} </td>\n            <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Section_Name\">\n            <th mat-header-cell *matHeaderCellDef> Section Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Squad_Name\">\n            <th mat-header-cell *matHeaderCellDef> Squad Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Squad_Name}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Mandays\">\n            <th mat-header-cell *matHeaderCellDef> Mandays </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Mandays') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"Greenleaf\">\n            <th mat-header-cell *matHeaderCellDef> Greenleaf </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Greenleaf}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Greenleaf') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"AreaCovered\">\n            <th mat-header-cell *matHeaderCellDef> AreaCovered </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','AreaCovered') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"GlMnd\">\n            <th mat-header-cell *matHeaderCellDef> Gl Mnd </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GlMnd}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','GlMnd') | number}}</td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"GlHa\">\n            <th mat-header-cell *matHeaderCellDef> Gl Ha </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.GlHa}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','GlHa') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"MndHa\">\n            <th mat-header-cell *matHeaderCellDef> Mnd Ha </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MndHa}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','MndHa') | number}}</td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Division\">\n            <th mat-header-cell *matHeaderCellDef> Division </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Prune\">\n            <th mat-header-cell *matHeaderCellDef> Prune </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Prune}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Jat\">\n            <th mat-header-cell *matHeaderCellDef> Jat </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Jat}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"SecArea\">\n            <th mat-header-cell *matHeaderCellDef> Section Area </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.SecArea}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','SecArea') | number}}</td>\n        </ng-container>\n  \n      <!-- header -->\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n      <!-- data -->\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      <!-- footer -->\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n  </div>\n  \n  <!-- Compare section -->\n  <div>\n    <mat-grid-list cols=\"3\" rowHeight=\"80px\">\n      <mat-grid-tile colspan=\"1\">\n        <h3>Comparision table</h3>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\">\n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startdateCmp\" disabled\n            (dateChange)=\"dateChange('startdateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n          <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n  \n        <mat-form-field style=\"width: 100px !important;\">\n          <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"enddateCmp\" disabled\n            (dateChange)=\"dateChange('enddateCmp', $event)\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n          <mat-datepicker #picker4 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n  \n        <button mat-raised-button color=\"accent\" (click)=\"clickedGoCompare()\">Compare</button>\n      </mat-grid-tile>\n    </mat-grid-list>\n  \n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSourceCmp\">\n\n        <ng-container matColumnDef=\"Date\">\n          <th mat-header-cell *matHeaderCellDef> Date </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Date}} </td>\n          <td mat-footer-cell *matFooterCellDef>Total</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Section_Name\">\n          <th mat-header-cell *matHeaderCellDef> Section Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Squad_Name\">\n          <th mat-header-cell *matHeaderCellDef> Squad Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Squad_Name}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Mandays\">\n          <th mat-header-cell *matHeaderCellDef> Mandays </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Mandays}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Mandays') | number}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Greenleaf\">\n          <th mat-header-cell *matHeaderCellDef> Greenleaf </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Greenleaf}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','Greenleaf') | number}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"AreaCovered\">\n          <th mat-header-cell *matHeaderCellDef> AreaCovered </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.AreaCovered}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','AreaCovered') | number}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"GlMnd\">\n          <th mat-header-cell *matHeaderCellDef> Gl Mnd </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.GlMnd}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','GlMnd') | number}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"GlHa\">\n          <th mat-header-cell *matHeaderCellDef> Gl Ha </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.GlHa}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','GlHa') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"MndHa\">\n          <th mat-header-cell *matHeaderCellDef> Mnd Ha </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.MndHa}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','MndHa') | number}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Division\">\n          <th mat-header-cell *matHeaderCellDef> Division </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Division}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Prune\">\n          <th mat-header-cell *matHeaderCellDef> Prune </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Prune}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Jat\">\n          <th mat-header-cell *matHeaderCellDef> Jat </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Jat}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"SecArea\">\n          <th mat-header-cell *matHeaderCellDef> Section Area </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.SecArea}} </td>\n          <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSourceCmp','SecArea') | number}}</td>\n      </ng-container>\n  \n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n      </table>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"lds-roller\">\n    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tea-made/tea-made.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tea-made/tea-made.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeaMadeTeaMadeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>tea-made works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tea-stock/tea-stock.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tea-stock/tea-stock.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeaStockTeaStockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"3\" rowHeight=\"90px\" class=\"example-container col-5\">\n    <mat-grid-tile colspan=\"1\">\n      <h3>Tea Stock reports</h3>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\">\n      <mat-form-field style=\"width: 100px !important;\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Start Date\" [value]=\"startdate\" disabled\n          (dateChange)=\"dateChange('startdate', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n  \n      <button mat-raised-button color=\"accent\" (click)=\"clickedGo()\">Go</button>\n    </mat-grid-tile>\n</mat-grid-list>\n  \n<div class=\"example-container mat-elevation-z8 col-5\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"Grade\">\n        <th mat-header-cell *matHeaderCellDef> Grade </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Grade}} </td>\n        <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Kg\">\n        <th mat-header-cell *matHeaderCellDef> Kg </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Kg}} </td>\n        <td mat-footer-cell *matFooterCellDef>{{getTotal('dataSource','Kg') | number}}</td>\n        </ng-container>\n\n        <!-- header -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <!-- data -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- footer -->\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadFileUploadFileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <mat-grid-list class=\"mat-elevation-z8\" cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Select an option</mat-label>\n                <mat-select [(value)]=\"database\">\n                    <mat-option value=\"Jobtab\">JobTab</mat-option>\n                    <mat-option value=\"TMEntry\">TMEntry</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div matRipple>\n                <button mat-raised-button color=\"accent\">\n                    <input class=\"file-input\" type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n                </button>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"!isUploading\">\n            <button mat-stroked-button color=\"accent\" (click)=\"uploadFileToServer()\" [disabled]=\"!database\">Upload</button>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"isUploading\">\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </mat-grid-tile>\n    </mat-grid-list>\n        <button mat-flat-button color=\"accent\" (click)=\"emailReportHandler()\" *ngIf=\"!isMailSending\">Email Report</button>\n    <div class=\"email-controller\" *ngIf=\"isMailSending\">\n        <app-spinner></app-spinner>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cultivation_cultivation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cultivation/cultivation.component */
    "./src/app/cultivation/cultivation.component.ts");
    /* harmony import */


    var _cultivation_grp_cultivation_grp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cultivation-grp/cultivation-grp.component */
    "./src/app/cultivation-grp/cultivation-grp.component.ts");
    /* harmony import */


    var _plucking_plucking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./plucking/plucking.component */
    "./src/app/plucking/plucking.component.ts");
    /* harmony import */


    var _plucking_grp_plucking_grp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./plucking-grp/plucking-grp.component */
    "./src/app/plucking-grp/plucking-grp.component.ts");
    /* harmony import */


    var _mnd_deployment_mnd_deployment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mnd-deployment/mnd-deployment.component */
    "./src/app/mnd-deployment/mnd-deployment.component.ts");
    /* harmony import */


    var _fuel_report_fuel_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fuel-report/fuel-report.component */
    "./src/app/fuel-report/fuel-report.component.ts");
    /* harmony import */


    var _tea_stock_tea_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tea-stock/tea-stock.component */
    "./src/app/tea-stock/tea-stock.component.ts");
    /* harmony import */


    var _tea_made_tea_made_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tea-made/tea-made.component */
    "./src/app/tea-made/tea-made.component.ts");
    /* harmony import */


    var _fine_leaf_fine_leaf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./fine-leaf/fine-leaf.component */
    "./src/app/fine-leaf/fine-leaf.component.ts");
    /* harmony import */


    var _grade_per_grade_per_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./grade-per/grade-per.component */
    "./src/app/grade-per/grade-per.component.ts");
    /* harmony import */


    var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./invoice-list/invoice-list.component */
    "./src/app/invoice-list/invoice-list.component.ts");
    /* harmony import */


    var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./upload-file/upload-file.component */
    "./src/app/upload-file/upload-file.component.ts");
    /* harmony import */


    var _factory_factory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./factory/factory.component */
    "./src/app/factory/factory.component.ts");
    /* harmony import */


    var _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./daily-report/daily-report.component */
    "./src/app/daily-report/daily-report.component.ts"); // componets


    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_16__["DailyReportComponent"]
    }, {
      path: 'cultdaily',
      component: _cultivation_cultivation_component__WEBPACK_IMPORTED_MODULE_3__["CultivationComponent"]
    }, {
      path: 'cultgroup',
      component: _cultivation_grp_cultivation_grp_component__WEBPACK_IMPORTED_MODULE_4__["CultivationGrpComponent"]
    }, {
      path: 'pluckdaily',
      component: _plucking_plucking_component__WEBPACK_IMPORTED_MODULE_5__["PluckingComponent"]
    }, {
      path: 'pluckgroup',
      component: _plucking_grp_plucking_grp_component__WEBPACK_IMPORTED_MODULE_6__["PluckingGrpComponent"]
    }, {
      path: 'mnddeploy',
      component: _mnd_deployment_mnd_deployment_component__WEBPACK_IMPORTED_MODULE_7__["MndDeploymentComponent"]
    }, {
      path: 'fuelreport',
      component: _fuel_report_fuel_report_component__WEBPACK_IMPORTED_MODULE_8__["FuelReportComponent"]
    }, {
      path: 'teastock',
      component: _tea_stock_tea_stock_component__WEBPACK_IMPORTED_MODULE_9__["TeaStockComponent"]
    }, {
      path: 'teamade',
      component: _tea_made_tea_made_component__WEBPACK_IMPORTED_MODULE_10__["TeaMadeComponent"]
    }, {
      path: 'fineleaf',
      component: _fine_leaf_fine_leaf_component__WEBPACK_IMPORTED_MODULE_11__["FineLeafComponent"]
    }, {
      path: 'gradeper',
      component: _grade_per_grade_per_component__WEBPACK_IMPORTED_MODULE_12__["GradePerComponent"]
    }, {
      path: 'invoicelist',
      component: _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_13__["InvoiceListComponent"]
    }, {
      path: 'upload-csv',
      component: _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_14__["UploadFileComponent"]
    }, {
      path: 'factory',
      component: _factory_factory_component__WEBPACK_IMPORTED_MODULE_15__["FactoryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-drawer-container {\n    height: 92vh;\n}\n\n.toolbar-heading a {\n    text-decoration: none;\n    color: white;\n}\n\n.mat-nav-list {\n    background-color: #70a452;\n}\n\n.mat-toolbar-row {\n    text-align: center;\n}\n\n.mat-list-base {\n    padding: 0 !important;\n}\n\n.mat-list-item {\n    color: white;\n    font-weight: bolder;\n}\n\n.mat-list-item:hover {\n    background-color: white;\n    color: #70a452;\n}\n\n.mat-list-item.active {\n    background-color: white;\n    color: #4caf50;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDkydmg7XG59XG5cbi50b29sYmFyLWhlYWRpbmcgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1uYXYtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwYTQ1Mjtcbn1cblxuLm1hdC10b29sYmFyLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWxpc3QtYmFzZSB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzcwYTQ1Mjtcbn1cblxuLm1hdC1saXN0LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzRjYWY1MDtcbn0gIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(breakPointObserver) {
        _classCallCheck(this, AppComponent);

        this.breakPointObserver = breakPointObserver;
        this.title = 'glen-mis-ui-angular';
        this.hideSideDrawer = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.mediaSubscription = this.breakPointObserver.observe(['(max-width: 850px)']).subscribe(function (result) {
            if (result.matches === true) {
              _this.hideSideDrawer = true;
            } else {
              _this.hideSideDrawer = false;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mediaSubscription.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _cultivation_cultivation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cultivation/cultivation.component */
    "./src/app/cultivation/cultivation.component.ts");
    /* harmony import */


    var _cultivation_grp_cultivation_grp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cultivation-grp/cultivation-grp.component */
    "./src/app/cultivation-grp/cultivation-grp.component.ts");
    /* harmony import */


    var _plucking_plucking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./plucking/plucking.component */
    "./src/app/plucking/plucking.component.ts");
    /* harmony import */


    var _plucking_grp_plucking_grp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./plucking-grp/plucking-grp.component */
    "./src/app/plucking-grp/plucking-grp.component.ts");
    /* harmony import */


    var _mnd_deployment_mnd_deployment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mnd-deployment/mnd-deployment.component */
    "./src/app/mnd-deployment/mnd-deployment.component.ts");
    /* harmony import */


    var _fuel_report_fuel_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./fuel-report/fuel-report.component */
    "./src/app/fuel-report/fuel-report.component.ts");
    /* harmony import */


    var _tea_stock_tea_stock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tea-stock/tea-stock.component */
    "./src/app/tea-stock/tea-stock.component.ts");
    /* harmony import */


    var _tea_made_tea_made_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tea-made/tea-made.component */
    "./src/app/tea-made/tea-made.component.ts");
    /* harmony import */


    var _fine_leaf_fine_leaf_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./fine-leaf/fine-leaf.component */
    "./src/app/fine-leaf/fine-leaf.component.ts");
    /* harmony import */


    var _grade_per_grade_per_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./grade-per/grade-per.component */
    "./src/app/grade-per/grade-per.component.ts");
    /* harmony import */


    var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./invoice-list/invoice-list.component */
    "./src/app/invoice-list/invoice-list.component.ts");
    /* harmony import */


    var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./upload-file/upload-file.component */
    "./src/app/upload-file/upload-file.component.ts");
    /* harmony import */


    var _factory_factory_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./factory/factory.component */
    "./src/app/factory/factory.component.ts");
    /* harmony import */


    var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/spinner/spinner.component */
    "./src/app/shared/spinner/spinner.component.ts");
    /* harmony import */


    var _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./daily-report/daily-report.component */
    "./src/app/daily-report/daily-report.component.ts"); // components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _cultivation_cultivation_component__WEBPACK_IMPORTED_MODULE_9__["CultivationComponent"], _cultivation_grp_cultivation_grp_component__WEBPACK_IMPORTED_MODULE_10__["CultivationGrpComponent"], _plucking_plucking_component__WEBPACK_IMPORTED_MODULE_11__["PluckingComponent"], _plucking_grp_plucking_grp_component__WEBPACK_IMPORTED_MODULE_12__["PluckingGrpComponent"], _mnd_deployment_mnd_deployment_component__WEBPACK_IMPORTED_MODULE_13__["MndDeploymentComponent"], _fuel_report_fuel_report_component__WEBPACK_IMPORTED_MODULE_14__["FuelReportComponent"], _tea_stock_tea_stock_component__WEBPACK_IMPORTED_MODULE_15__["TeaStockComponent"], _tea_made_tea_made_component__WEBPACK_IMPORTED_MODULE_16__["TeaMadeComponent"], _fine_leaf_fine_leaf_component__WEBPACK_IMPORTED_MODULE_17__["FineLeafComponent"], _grade_per_grade_per_component__WEBPACK_IMPORTED_MODULE_18__["GradePerComponent"], _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceListComponent"], _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_20__["UploadFileComponent"], _factory_factory_component__WEBPACK_IMPORTED_MODULE_21__["FactoryComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"], _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_23__["DailyReportComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cultivation-grp/cultivation-grp.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/cultivation-grp/cultivation-grp.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCultivationGrpCultivationGrpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.heading-wrap {\n  width: 65%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.control-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.datepicker-control {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.col-5{\n  width: 65%;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n\n@media(max-width: 700px) {\n  .col-5 {\n    width: 100%;\n  }\n\n  .control-wrap {\n    flex-direction: column;\n  }\n\n  .datepicker-control {\n    flex-direction: column;\n  }\n\n  .heading-wrap {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VsdGl2YXRpb24tZ3JwL2N1bHRpdmF0aW9uLWdycC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jdWx0aXZhdGlvbi1ncnAvY3VsdGl2YXRpb24tZ3JwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmhlYWRpbmctd3JhcCB7XG4gIHdpZHRoOiA2NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRyb2wtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0ZXBpY2tlci1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2wtNXtcbiAgd2lkdGg6IDY1JTtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29sLTUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRyb2wtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5kYXRlcGlja2VyLWNvbnRyb2wge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaGVhZGluZy13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/cultivation-grp/cultivation-grp.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/cultivation-grp/cultivation-grp.component.ts ***!
    \**************************************************************/

  /*! exports provided: CultivationGrpComponent */

  /***/
  function srcAppCultivationGrpCultivationGrpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CultivationGrpComponent", function () {
      return CultivationGrpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var CultivationGrpComponent = /*#__PURE__*/function () {
      function CultivationGrpComponent(http, breakPointObserver) {
        _classCallCheck(this, CultivationGrpComponent);

        this.http = http;
        this.breakPointObserver = breakPointObserver;
        this.stackGrid = false;
      }

      _createClass(CultivationGrpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          this.displayedColumns = ['Job_Name', 'Mandays', 'AreaCovered', 'MndArea'];
          var url = 'http://127.0.0.1:5000/cultgroup?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this2.dataSource = data;
          });
          this.mediaWidthHandler();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mediaSubscription.unsubscribe();
        }
      }, {
        key: "mediaWidthHandler",
        value: function mediaWidthHandler() {
          var _this3 = this;

          this.mediaSubscription = this.breakPointObserver.observe(['(max-width: 700px)']).subscribe(function (result) {
            if (result.matches === true) {
              _this3.stackGrid = true;
            } else {
              _this3.stackGrid = false;
            }
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this4 = this;

          var url = 'http://127.0.0.1:5000/cultgroup?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this4.dataSource = data;
          });
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this5 = this;

          var url = 'http://127.0.0.1:5000/cultgroup?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp);
          this.http.get(url).subscribe(function (data) {
            _this5.dataSourceCmp = data;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return CultivationGrpComponent;
    }();

    CultivationGrpComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    CultivationGrpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cultivation-grp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cultivation-grp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cultivation-grp/cultivation-grp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cultivation-grp.component.css */
      "./src/app/cultivation-grp/cultivation-grp.component.css"))["default"]]
    })], CultivationGrpComponent);
    /***/
  },

  /***/
  "./src/app/cultivation/cultivation.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/cultivation/cultivation.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCultivationCultivationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VsdGl2YXRpb24vY3VsdGl2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2N1bHRpdmF0aW9uL2N1bHRpdmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbC01e1xuICB3aWR0aDogNjUlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/cultivation/cultivation.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/cultivation/cultivation.component.ts ***!
    \******************************************************/

  /*! exports provided: CultivationComponent */

  /***/
  function srcAppCultivationCultivationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CultivationComponent", function () {
      return CultivationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CultivationComponent = /*#__PURE__*/function () {
      //dev purpose
      //_startdate = '2020-07-01';
      //_enddate = '2020-07-14';
      function CultivationComponent(http) {
        _classCallCheck(this, CultivationComponent);

        this.http = http;
      }

      _createClass(CultivationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          this.displayedColumns = ['Date', 'Division', 'AreaCovered', 'Job_Name', 'Mandays', 'Mnd/Area', 'Section_Name', 'Squad_Name'];
          var url = 'http://127.0.0.1:5000/cultdaily?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate); //dev purpose
          //const url = 'http://127.0.0.1:5000/cultdaily?start=' + this._startdate + '&end=' + this._enddate;

          this.http.get(url).subscribe(function (data) {
            _this6.dataSource = data;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this7 = this;

          var url = 'http://127.0.0.1:5000/cultdaily?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate); //dev purpose
          //const url = 'http://127.0.0.1:5000/cultdaily?start=' + this._startdate + '&end=' + this._enddate;

          this.http.get(url).subscribe(function (data) {
            _this7.dataSource = data;
          });
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this8 = this;

          var url = 'http://127.0.0.1:5000/cultdaily?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp); //dev purpose
          //const url = 'http://127.0.0.1:5000/cultdaily?start=' + this._startdate + '&end=' + this._enddate;

          this.http.get(url).subscribe(function (data) {
            _this8.dataSourceCmp = data;
          });
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }]);

      return CultivationComponent;
    }();

    CultivationComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CultivationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cultivation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cultivation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cultivation/cultivation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cultivation.component.css */
      "./src/app/cultivation/cultivation.component.css"))["default"]]
    })], CultivationComponent);
    /***/
  },

  /***/
  "./src/app/daily-report/daily-report.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/daily-report/daily-report.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDailyReportDailyReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\n.col-10 {\n  min-width: 850px;\n}\n\n.table-heading {\n  text-align: center !important;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n  overflow: scroll;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\n.mat-form-field {\n  width: 130px !important;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n  background-color: #c0c0c0;\n}\n\n@media(max-width: 700px) {\n  .col-5 {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbHktcmVwb3J0L2RhaWx5LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYWlseS1yZXBvcnQvZGFpbHktcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbC01e1xuICB3aWR0aDogNjUlO1xufVxuXG4uY29sLTEwIHtcbiAgbWluLXdpZHRoOiA4NTBweDtcbn1cblxuLnRhYmxlLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LWZvb3Rlci1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC10YWJsZS1zdGlja3kge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb2wtNSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/daily-report/daily-report.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/daily-report/daily-report.component.ts ***!
    \********************************************************/

  /*! exports provided: DailyReportComponent */

  /***/
  function srcAppDailyReportDailyReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyReportComponent", function () {
      return DailyReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var DailyReportComponent = /*#__PURE__*/function () {
      function DailyReportComponent(http, breakPointObserver) {
        _classCallCheck(this, DailyReportComponent);

        this.http = http;
        this.breakPointObserver = breakPointObserver;
        this.stackGrid = false;
      }

      _createClass(DailyReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.startdate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.teaMadeColumns = ['TMToday', 'TMTodate', 'TMTodateLY', 'RecoveryToday', 'RecoveryTodate'];
          this.greenLeafColumns = ['Division', 'GLToday', 'GLTodayLY', 'FineLeaf'];
          this.GradePerColumns = ['Grade', 'Qnty', 'Percent'];
          this.MandaysColumns = ['Job_Name', 'Mandays'];
          this.PluckingColumns = ['Date', 'Division', 'Section_Name', 'Squad_Name', 'Mandays', 'Greenleaf', 'AreaCovered', 'GlMnd', 'GlHa', 'MndHa', 'Prune', 'Jat', 'SecArea'];
          this.CultivationColumns = ['Date', 'Division', 'AreaCovered', 'Job_Name', 'Mandays', 'Mnd/Area', 'Section_Name', 'Squad_Name'];
          this.FuelReportColumns = ['Machine', 'FuelUsed', 'TM', 'TMFuel'];
          var url = 'http://127.0.0.1:5000/dailyreport?start=' + this.convert(this.startdate);
          this.http.get(url).subscribe(function (data) {
            _this9.teaMadeData = data.TeaMade;
            _this9.greenleafData = data.Greenleaf;
            _this9.gradePerData = data.GradePer;
            _this9.MandaysData = data.Mandays;
            _this9.PluckingData = data.Plucking;
            _this9.CultivationData = data.Cultivation;
            _this9.FuelReportData = data.FuelReport;
          });
          this.mediaWidthHandler();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mediaSubscription.unsubscribe();
        }
      }, {
        key: "mediaWidthHandler",
        value: function mediaWidthHandler() {
          var _this10 = this;

          this.mediaSubscription = this.breakPointObserver.observe(['(max-width: 700px)']).subscribe(function (result) {
            if (result.matches === true) {
              _this10.stackGrid = true;
            } else {
              _this10.stackGrid = false;
            }
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this11 = this;

          var url = 'http://127.0.0.1:5000/dailyreport?start=' + this.convert(this.startdate);
          this.http.get(url).subscribe(function (data) {
            _this11.teaMadeData = data.TeaMade;
            _this11.greenleafData = data.Greenleaf;
            _this11.gradePerData = data.GradePer;
            _this11.MandaysData = data.Mandays;
            _this11.PluckingData = data.Plucking;
            _this11.CultivationData = data.Cultivation;
            _this11.FuelReportData = data.FuelReport;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          this.startdate = event.value;
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }]);

      return DailyReportComponent;
    }();

    DailyReportComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    DailyReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-daily-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./daily-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/daily-report/daily-report.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./daily-report.component.css */
      "./src/app/daily-report/daily-report.component.css"))["default"]]
    })], DailyReportComponent);
    /***/
  },

  /***/
  "./src/app/factory/factory.component.css":
  /*!***********************************************!*\
    !*** ./src/app/factory/factory.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFactoryFactoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\n.table-heading {\n  text-align: center !important;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n  background-color: #c0c0c0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjdG9yeS9mYWN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mYWN0b3J5L2ZhY3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLCBidXR0b24ge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29sLTV7XG4gIHdpZHRoOiA2NSU7XG59XG5cblxuLnRhYmxlLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/factory/factory.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/factory/factory.component.ts ***!
    \**********************************************/

  /*! exports provided: FactoryComponent */

  /***/
  function srcAppFactoryFactoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FactoryComponent", function () {
      return FactoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FactoryComponent = /*#__PURE__*/function () {
      function FactoryComponent(http) {
        _classCallCheck(this, FactoryComponent);

        this.http = http;
      }

      _createClass(FactoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.date = new Date();
          this.date.setDate(this.date.getDate() - 1);
          this.teaMadeColumns = ['TMToday', 'TMTodate', 'TMTodateLY', 'RecoveryToday', 'RecoveryTodate'];
          this.greenLeafColumns = ['Division', 'GLToday', 'GLTodayLY', 'FineLeaf'];
          this.GradePerColumns = ['Grade', 'Qnty', 'Percent'];
          var url = 'http://127.0.0.1:5000/factory?start=' + this.convert(this.date);
          this.http.get(url).subscribe(function (data) {
            _this12.teaMadeData = data.TeaMade;
            _this12.greenleafData = data.Greenleaf;
            _this12.gradePerData = data.GradePer;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this13 = this;

          var url = 'http://127.0.0.1:5000/factory?start=' + this.convert(this.date);
          this.http.get(url).subscribe(function (data) {
            _this13.teaMadeData = data.TeaMade;
            _this13.greenleafData = data.Greenleaf;
            _this13.gradePerData = data.GradePer;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          this.date = event.value;
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return FactoryComponent;
    }();

    FactoryComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FactoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-factory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./factory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/factory/factory.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./factory.component.css */
      "./src/app/factory/factory.component.css"))["default"]]
    })], FactoryComponent);
    /***/
  },

  /***/
  "./src/app/fine-leaf/fine-leaf.component.css":
  /*!***************************************************!*\
    !*** ./src/app/fine-leaf/fine-leaf.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFineLeafFineLeafComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZS1sZWFmL2ZpbmUtbGVhZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZmluZS1sZWFmL2ZpbmUtbGVhZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtNXtcbiAgd2lkdGg6IDY1JTtcbn1cblxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG59XG5cbnRyLm1hdC1mb290ZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/fine-leaf/fine-leaf.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fine-leaf/fine-leaf.component.ts ***!
    \**************************************************/

  /*! exports provided: FineLeafComponent */

  /***/
  function srcAppFineLeafFineLeafComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FineLeafComponent", function () {
      return FineLeafComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FineLeafComponent = /*#__PURE__*/function () {
      function FineLeafComponent(http) {
        _classCallCheck(this, FineLeafComponent);

        this.http = http;
      }

      _createClass(FineLeafComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          this.displayedColumns = ['Division', 'GLToday', 'GLTodayLY', 'FineLeaf'];
          var url = 'http://127.0.0.1:5000/GL?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this14.dataSource = data;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this15 = this;

          var url = 'http://127.0.0.1:5000/GL?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this15.dataSource = data;
          });
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this16 = this;

          var url = 'http://127.0.0.1:5000/GL?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp);
          this.http.get(url).subscribe(function (data) {
            _this16.dataSourceCmp = data;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return FineLeafComponent;
    }();

    FineLeafComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FineLeafComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fine-leaf',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fine-leaf.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fine-leaf/fine-leaf.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fine-leaf.component.css */
      "./src/app/fine-leaf/fine-leaf.component.css"))["default"]]
    })], FineLeafComponent);
    /***/
  },

  /***/
  "./src/app/fuel-report/fuel-report.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/fuel-report/fuel-report.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFuelReportFuelReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 5px;\n}\n\nh1 {\n  margin-bottom: 5px;\n}\n\nh3 {\n  margin-bottom: 10px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.example-container {\n  margin: 15px 15px;\n  box-sizing: border-box;\n  overflow: auto;\n  min-width: 271px;\n  width: 40%;\n  max-height: 80vh;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center; \n}\n\n.mat-table {\n  width: 90%;\n}\n\n.control-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n\n@media(max-width: 650px) {\n  .container {\n    flex-direction: column;\n  }\n\n  .control-wrap {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVlbC1yZXBvcnQvZnVlbC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mdWVsLXJlcG9ydC9mdWVsLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4td2lkdGg6IDI3MXB4O1xuICB3aWR0aDogNDAlO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxufVxuXG4ubWF0LXRhYmxlIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmNvbnRyb2wtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG59XG5cbnRyLm1hdC1mb290ZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY29udHJvbC13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/fuel-report/fuel-report.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/fuel-report/fuel-report.component.ts ***!
    \******************************************************/

  /*! exports provided: FuelReportComponent */

  /***/
  function srcAppFuelReportFuelReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuelReportComponent", function () {
      return FuelReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var FuelReportComponent = /*#__PURE__*/function () {
      function FuelReportComponent(http, breakPointObserver) {
        _classCallCheck(this, FuelReportComponent);

        this.http = http;
        this.breakPointObserver = breakPointObserver;
        this.displayedColumns = ['Machine', 'FuelUsed', 'TM', 'TMFuel'];
        this.mediumDevice = false;
      }

      _createClass(FuelReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          var url = 'http://127.0.0.1:5000/fuelreport?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this17.dataSource = data;
          });
          this.mediaChangeHandler();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mediaSubscription.unsubscribe();
        }
      }, {
        key: "mediaChangeHandler",
        value: function mediaChangeHandler() {
          var _this18 = this;

          this.mediaSubscription = this.breakPointObserver.observe(['(max-width: 768px)']).subscribe(function (result) {
            if (result.matches === true) {
              _this18.mediumDevice = true;
            } else {
              _this18.mediumDevice = false;
            }
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this19 = this;

          var url = 'http://127.0.0.1:5000/fuelreport?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this19.dataSource = data;
          });
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this20 = this;

          var url = 'http://127.0.0.1:5000/fuelreport?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp);
          this.http.get(url).subscribe(function (data) {
            _this20.dataSourceCmp = data;
          });
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return FuelReportComponent;
    }();

    FuelReportComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    FuelReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fuel-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fuel-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fuel-report/fuel-report.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fuel-report.component.css */
      "./src/app/fuel-report/fuel-report.component.css"))["default"]]
    })], FuelReportComponent);
    /***/
  },

  /***/
  "./src/app/grade-per/grade-per.component.css":
  /*!***************************************************!*\
    !*** ./src/app/grade-per/grade-per.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGradePerGradePerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlLXBlci9ncmFkZS1wZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/grade-per/grade-per.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/grade-per/grade-per.component.ts ***!
    \**************************************************/

  /*! exports provided: GradePerComponent */

  /***/
  function srcAppGradePerGradePerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GradePerComponent", function () {
      return GradePerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GradePerComponent = /*#__PURE__*/function () {
      function GradePerComponent() {
        _classCallCheck(this, GradePerComponent);
      }

      _createClass(GradePerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GradePerComponent;
    }();

    GradePerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grade-per',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grade-per.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/grade-per/grade-per.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grade-per.component.css */
      "./src/app/grade-per/grade-per.component.css"))["default"]]
    })], GradePerComponent);
    /***/
  },

  /***/
  "./src/app/invoice-list/invoice-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/invoice-list/invoice-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInvoiceListInvoiceListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS1saXN0L2ludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS1saXN0L2ludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtNXtcbiAgd2lkdGg6IDY1JTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/invoice-list/invoice-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/invoice-list/invoice-list.component.ts ***!
    \********************************************************/

  /*! exports provided: InvoiceListComponent */

  /***/
  function srcAppInvoiceListInvoiceListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function () {
      return InvoiceListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var InvoiceListComponent = /*#__PURE__*/function () {
      function InvoiceListComponent(http) {
        _classCallCheck(this, InvoiceListComponent);

        this.http = http;
      }

      _createClass(InvoiceListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.displayedColumns = ['InvNo', 'Grade', 'NetWt', 'Papersacks', 'Packdate'];
          var url = 'http://127.0.0.1:5000/invoicelist?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this21.dataSource = data;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this22 = this;

          var url = 'http://127.0.0.1:5000/invoicelist?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this22.dataSource = data;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return InvoiceListComponent;
    }();

    InvoiceListComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invoice-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invoice-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice-list/invoice-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invoice-list.component.css */
      "./src/app/invoice-list/invoice-list.component.css"))["default"]]
    })], InvoiceListComponent);
    /***/
  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/mnd-deployment/mnd-deployment.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/mnd-deployment/mnd-deployment.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMndDeploymentMndDeploymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\nh1 {\n  margin-bottom: 10px;\n}\n\nh3 {\n  margin-bottom: 0;\n}\n\n.example-container {\n  padding: 5px 10px;\n  box-sizing: border-box;\n  max-height: 75vh;\n  width: 75%;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.control-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mat-table {\n  width: 90%;\n  max-height: 350px;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n  background-color: #c0c0c0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW5kLWRlcGxveW1lbnQvbW5kLWRlcGxveW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21uZC1kZXBsb3ltZW50L21uZC1kZXBsb3ltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaDMge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmNvbnRyb2wtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG5cbnRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cblxudHIubWF0LWZvb3Rlci1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC10YWJsZS1zdGlja3kge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mnd-deployment/mnd-deployment.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/mnd-deployment/mnd-deployment.component.ts ***!
    \************************************************************/

  /*! exports provided: MndDeploymentComponent */

  /***/
  function srcAppMndDeploymentMndDeploymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MndDeploymentComponent", function () {
      return MndDeploymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MndDeploymentComponent = /*#__PURE__*/function () {
      function MndDeploymentComponent(http) {
        _classCallCheck(this, MndDeploymentComponent);

        this.http = http;
        this.displayedColumns = ['Job_Name', 'Mandays'];
      }

      _createClass(MndDeploymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          var url = 'http://127.0.0.1:5000/mnddeploy?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this23.dataSource = data;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this24 = this;

          var url = 'http://127.0.0.1:5000/mnddeploy?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this24.dataSource = data;
          });
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this25 = this;

          var url = 'http://127.0.0.1:5000/mnddeploy?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp);
          this.http.get(url).subscribe(function (data) {
            _this25.dataSourceCmp = data;
          });
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return MndDeploymentComponent;
    }();

    MndDeploymentComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MndDeploymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mnd-deployment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mnd-deployment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mnd-deployment/mnd-deployment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mnd-deployment.component.css */
      "./src/app/mnd-deployment/mnd-deployment.component.css"))["default"]]
    })], MndDeploymentComponent);
    /***/
  },

  /***/
  "./src/app/plucking-grp/plucking-grp.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/plucking-grp/plucking-grp.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPluckingGrpPluckingGrpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1Y2tpbmctZ3JwL3BsdWNraW5nLWdycC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcGx1Y2tpbmctZ3JwL3BsdWNraW5nLWdycC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtNXtcbiAgd2lkdGg6IDY1JTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/plucking-grp/plucking-grp.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/plucking-grp/plucking-grp.component.ts ***!
    \********************************************************/

  /*! exports provided: PluckingGrpComponent */

  /***/
  function srcAppPluckingGrpPluckingGrpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluckingGrpComponent", function () {
      return PluckingGrpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PluckingGrpComponent = /*#__PURE__*/function () {
      function PluckingGrpComponent(http) {
        _classCallCheck(this, PluckingGrpComponent);

        this.http = http;
      }

      _createClass(PluckingGrpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          this.showCompare = false;
          this.displayedColumns = ['Division', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];
          this.displayedColumnsCmp = ['Division', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];
          this.selected = 'Division';
          this.selectedCmp = 'Division';
          this.group = 'Division';
          this.groupCmp = 'Division';
          var url = 'http://127.0.0.1:5000/pluckgroup?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate) + '&grpby=' + this.selected;
          this.http.get(url).subscribe(function (data) {
            _this26.dataSource = data;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this27 = this;

          var url = 'http://127.0.0.1:5000/pluckgroup?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate) + '&grpby=' + this.selected;
          this.http.get(url).subscribe(function (data) {
            _this27.group = _this27.selected;

            if (_this27.selected === 'Section') {
              _this27.displayedColumns = ['Section_Name', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];

              _this27.parseSectionData('report', data);
            } else if (_this27.selected === 'Division') {
              _this27.displayedColumns = ['Division', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];

              _this27.parseDivisionData('report', data);
            } else {
              _this27.displayedColumns = ['Squad', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];

              _this27.parseSquadData('report', data);
            }
          });
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this28 = this;

          var url = 'http://127.0.0.1:5000/pluckgroup?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp) + '&grpby=' + this.selectedCmp;
          this.http.get(url).subscribe(function (data) {
            _this28.groupCmp = _this28.selectedCmp;

            if (_this28.selectedCmp === 'Section') {
              _this28.displayedColumnsCmp = ['Section_Name', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];

              _this28.parseSectionData('compare', data);
            } else if (_this28.selectedCmp === 'Division') {
              _this28.displayedColumnsCmp = ['Division', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];

              _this28.parseDivisionData('compare', data);
            } else {
              _this28.displayedColumnsCmp = ['Squad', 'Mandays', 'Greenleaf', 'AreaCovered', 'GLMnd', 'GLArea', 'MndArea'];

              _this28.parseSquadData('compare', data);
            }
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }, {
        key: "parseDivisionData",
        value: function parseDivisionData(type, data) {
          switch (type) {
            case 'report':
              this.dataSource = data;
              break;

            case 'compare':
              this.dataSourceCmp = data;
              break;
          }
        }
      }, {
        key: "parseSectionData",
        value: function parseSectionData(type, data) {
          switch (type) {
            case 'report':
              this.dataSource = data;
              break;

            case 'compare':
              this.dataSourceCmp = data;
              break;
          }
        }
      }, {
        key: "parseSquadData",
        value: function parseSquadData(type, data) {
          switch (type) {
            case 'report':
              this.dataSource = data;
              break;

            case 'compare':
              this.dataSourceCmp = data;
              break;
          }
        }
      }]);

      return PluckingGrpComponent;
    }();

    PluckingGrpComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PluckingGrpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-plucking-grp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./plucking-grp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/plucking-grp/plucking-grp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./plucking-grp.component.css */
      "./src/app/plucking-grp/plucking-grp.component.css"))["default"]]
    })], PluckingGrpComponent);
    /***/
  },

  /***/
  "./src/app/plucking/plucking.component.css":
  /*!*************************************************!*\
    !*** ./src/app/plucking/plucking.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPluckingPluckingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1Y2tpbmcvcGx1Y2tpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BsdWNraW5nL3BsdWNraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbC01e1xuICB3aWR0aDogNjUlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG59XG5cbnRyLm1hdC1mb290ZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/plucking/plucking.component.ts":
  /*!************************************************!*\
    !*** ./src/app/plucking/plucking.component.ts ***!
    \************************************************/

  /*! exports provided: PluckingComponent */

  /***/
  function srcAppPluckingPluckingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluckingComponent", function () {
      return PluckingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PluckingComponent = /*#__PURE__*/function () {
      function PluckingComponent(http) {
        _classCallCheck(this, PluckingComponent);

        this.http = http;
      }

      _createClass(PluckingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.startdate = new Date();
          this.enddate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.startdateCmp = this.startdate;
          this.enddateCmp = this.enddate;
          this.showCompare = false;
          this.displayedColumns = ['Date', 'Division', 'Section_Name', 'Squad_Name', 'Mandays', 'Greenleaf', 'AreaCovered', 'GlMnd', 'GlHa', 'MndHa', 'Prune', 'Jat', 'SecArea'];
          var url = 'http://127.0.0.1:5000/pluckdaily?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this29.dataSource = data;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this30 = this;

          var url = 'http://127.0.0.1:5000/pluckdaily?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
          this.http.get(url).subscribe(function (data) {
            _this30.dataSource = data;
          });
        }
      }, {
        key: "clickedCompare",
        value: function clickedCompare() {
          this.showCompare = true;
        }
      }, {
        key: "clickedGoCompare",
        value: function clickedGoCompare() {
          var _this31 = this;

          var url = 'http://127.0.0.1:5000/pluckdaily?start=' + this.convert(this.startdateCmp) + '&end=' + this.convert(this.enddateCmp);
          this.http.get(url).subscribe(function (data) {
            _this31.dataSourceCmp = data;
          });
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          switch (type) {
            case 'startdate':
              this.startdate = event.value;
              break;

            case 'enddate':
              this.enddate = event.value;
              break;

            case 'startdateCmp':
              this.startdateCmp = event.value;
              break;

            case 'enddateCmp':
              this.enddateCmp = event.value;
              break;
          }
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }]);

      return PluckingComponent;
    }();

    PluckingComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PluckingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-plucking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./plucking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/plucking/plucking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./plucking.component.css */
      "./src/app/plucking/plucking.component.css"))["default"]]
    })], PluckingComponent);
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinner.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/spinner/spinner.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lds-roller {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-roller div {\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 40px 40px;\n  }\n  .lds-roller div:after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: green;\n    margin: -4px 0 0 -4px;\n  }\n  .lds-roller div:nth-child(1) {\n    -webkit-animation-delay: -0.036s;\n            animation-delay: -0.036s;\n  }\n  .lds-roller div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  .lds-roller div:nth-child(2) {\n    -webkit-animation-delay: -0.072s;\n            animation-delay: -0.072s;\n  }\n  .lds-roller div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  .lds-roller div:nth-child(3) {\n    -webkit-animation-delay: -0.108s;\n            animation-delay: -0.108s;\n  }\n  .lds-roller div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  .lds-roller div:nth-child(4) {\n    -webkit-animation-delay: -0.144s;\n            animation-delay: -0.144s;\n  }\n  .lds-roller div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  .lds-roller div:nth-child(5) {\n    -webkit-animation-delay: -0.18s;\n            animation-delay: -0.18s;\n  }\n  .lds-roller div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  .lds-roller div:nth-child(6) {\n    -webkit-animation-delay: -0.216s;\n            animation-delay: -0.216s;\n  }\n  .lds-roller div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  .lds-roller div:nth-child(7) {\n    -webkit-animation-delay: -0.252s;\n            animation-delay: -0.252s;\n  }\n  .lds-roller div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  .lds-roller div:nth-child(8) {\n    -webkit-animation-delay: -0.288s;\n            animation-delay: -0.288s;\n  }\n  .lds-roller div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n  @-webkit-keyframes lds-roller {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes lds-roller {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0lBQ2hFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXJvbGxlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2IHtcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgIHRvcDogNjNweDtcbiAgICBsZWZ0OiA2M3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogNTZweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgdG9wOiA3MXB4O1xuICAgIGxlZnQ6IDQ4cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIHRvcDogNzJweDtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIHRvcDogNzFweDtcbiAgICBsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogMjRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgdG9wOiA2M3B4O1xuICAgIGxlZnQ6IDE3cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinner.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/spinner/spinner.component.ts ***!
    \*****************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.css */
      "./src/app/shared/spinner/spinner.component.css"))["default"]]
    })], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/tea-made/tea-made.component.css":
  /*!*************************************************!*\
    !*** ./src/app/tea-made/tea-made.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeaMadeTeaMadeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYS1tYWRlL3RlYS1tYWRlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tea-made/tea-made.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tea-made/tea-made.component.ts ***!
    \************************************************/

  /*! exports provided: TeaMadeComponent */

  /***/
  function srcAppTeaMadeTeaMadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeaMadeComponent", function () {
      return TeaMadeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TeaMadeComponent = /*#__PURE__*/function () {
      function TeaMadeComponent() {
        _classCallCheck(this, TeaMadeComponent);
      }

      _createClass(TeaMadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeaMadeComponent;
    }();

    TeaMadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tea-made',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tea-made.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tea-made/tea-made.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tea-made.component.css */
      "./src/app/tea-made/tea-made.component.css"))["default"]]
    })], TeaMadeComponent);
    /***/
  },

  /***/
  "./src/app/tea-stock/tea-stock.component.css":
  /*!***************************************************!*\
    !*** ./src/app/tea-stock/tea-stock.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeaStockTeaStockComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, button {\n    margin: 10px;\n}\n\n.example-container {\n  max-height: 350px;\n  overflow: auto;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.col-5{\n  width: 65%;\n}\n\ntable {\n  width: 100%;\n  text-align: initial;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #c0c0c0;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  background-color: #c0c0c0;\n  border-top: 1px solid #e0e0e0;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhLXN0b2NrL3RlYS1zdG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvdGVhLXN0b2NrL3RlYS1zdG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtNXtcbiAgd2lkdGg6IDY1JTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/tea-stock/tea-stock.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/tea-stock/tea-stock.component.ts ***!
    \**************************************************/

  /*! exports provided: TeaStockComponent */

  /***/
  function srcAppTeaStockTeaStockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeaStockComponent", function () {
      return TeaStockComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TeaStockComponent = /*#__PURE__*/function () {
      function TeaStockComponent(http) {
        _classCallCheck(this, TeaStockComponent);

        this.http = http;
      }

      _createClass(TeaStockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.startdate = new Date();
          this.startdate.setDate(this.startdate.getDate() - 1);
          this.displayedColumns = ['Grade', 'Kg'];
          var url = 'http://127.0.0.1:5000/teastock?start=' + this.convert(this.startdate);
          this.http.get(url).subscribe(function (data) {
            _this32.dataSource = data;
          });
        }
      }, {
        key: "clickedGo",
        value: function clickedGo() {
          var _this33 = this;

          var url = 'http://127.0.0.1:5000/teastock?start=' + this.convert(this.startdate);
          this.http.get(url).subscribe(function (data) {
            _this33.dataSource = data;
          });
        }
      }, {
        key: "dateChange",
        value: function dateChange(type, event) {
          this.startdate = event.value;
        }
      }, {
        key: "convert",
        value: function convert(str) {
          var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
          return [date.getFullYear(), mnth, day].join("-").toString();
        }
      }, {
        key: "getTotal",
        value: function getTotal(_dataSrc, _field) {
          if (this[_dataSrc]) {
            return this[_dataSrc].map(function (t) {
              return t[_field];
            }).reduce(function (acc, value) {
              return acc + value;
            }, 0);
          } else {
            return null;
          }
        }
      }]);

      return TeaStockComponent;
    }();

    TeaStockComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TeaStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tea-stock',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tea-stock.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tea-stock/tea-stock.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tea-stock.component.css */
      "./src/app/tea-stock/tea-stock.component.css"))["default"]]
    })], TeaStockComponent);
    /***/
  },

  /***/
  "./src/app/upload-file/upload-file.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/upload-file/upload-file.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadFileUploadFileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n    cursor: pointer;\n    margin: 10px;\n}\n\n.container {\n    margin: 20px 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.mat-grid-list {\n    width: 60%;\n    height: 50%;\n}\n\n.file-input {\n    cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n    cursor: pointer;\n    border: none;\n    background-color: inherit;\n    padding: 10px;\n    outline: none;\n}\n\n.email-controller {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 50px;\n}\n\n.mat-flat-button {\n    margin-top: 50px;\n    padding: 0px 20px;\n    border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweCAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWdyaWQtbGlzdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLmZpbGUtaW5wdXQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5lbWFpbC1jb250cm9sbGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/upload-file/upload-file.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/upload-file/upload-file.component.ts ***!
    \******************************************************/

  /*! exports provided: UploadFileComponent */

  /***/
  function srcAppUploadFileUploadFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () {
      return UploadFileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var UploadFileComponent = /*#__PURE__*/function () {
      function UploadFileComponent(http, snackBar) {
        _classCallCheck(this, UploadFileComponent);

        this.http = http;
        this.snackBar = snackBar;
        this.fileToUpload = null;
        this.isUploading = false;
        this.isMailSending = false;
      }

      _createClass(UploadFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.fileToUpload = files.item(0);
        }
      }, {
        key: "uploadFileToServer",
        value: function uploadFileToServer() {
          var _this34 = this;

          this.isUploading = true;
          var url = 'http://127.0.0.1:5000/upload?table=' + this.database;
          var formData = new FormData();
          formData.append('file', this.fileToUpload, this.fileToUpload.name);
          this.http.post(url, formData).subscribe(function (result) {
            _this34.isUploading = false;

            _this34.openSnackBar(result.message, 'Success');
          }, function (error) {
            _this34.isUploading = false;

            _this34.openSnackBar('Something went wrong', 'Error');

            console.log(error);
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 3000
          });
        }
      }, {
        key: "emailReportHandler",
        value: function emailReportHandler() {
          var _this35 = this;

          this.isMailSending = true;
          var url = 'http://127.0.0.1:5000/email-report';
          this.http.post(url, {}).subscribe(function (result) {
            _this35.isMailSending = false;

            _this35.openSnackBar('Email report generation initiated', 'success');
          }, function (error) {
            _this35.isMailSending = false;

            _this35.openSnackBar('Something went wrong', 'Error');
          });
        }
      }]);

      return UploadFileComponent;
    }();

    UploadFileComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-file',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-file.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-file.component.css */
      "./src/app/upload-file/upload-file.component.css"))["default"]]
    })], UploadFileComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      url: 'http://127.0.0.1:5000/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sidhantprakash/Documents/GitHub/GlenburnMIS/Angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map