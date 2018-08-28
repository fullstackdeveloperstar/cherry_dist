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

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-adminheader></app-adminheader>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminheader/adminheader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"adminheader\">\r\n  <div class=\"adminheader-item\" [ngClass]=\"{'active': activeURL=='/dashboard/admin/managestaff'}\" (click)=\"goto('/dashboard/admin/managestaff')\">Manage Staff</div>\r\n  <div class=\"adminheader-item\" [ngClass]=\"{'active': activeURL=='/dashboard/admin/managetags'}\" (click)=\"goto('/dashboard/admin/managetags')\">Manage Tags Options</div>\r\n  <div class=\"adminheader-item\" [ngClass]=\"{'active': activeURL=='/dashboard/admin/managetemplates'}\" (click)=\"goto('/dashboard/admin/managetemplates')\">Manage Templates of Reply</div>\r\n  <div class=\"adminheader-item\" [ngClass]=\"{'active': activeURL=='/dashboard/admin/managestatus'}\" (click)=\"goto('/dashboard/admin/managestatus')\">Manage Status Options</div>\r\n  <div class=\"adminheader-item\" [ngClass]=\"{'active': activeURL=='/dashboard/admin/manageactions'}\" (click)=\"goto('/dashboard/admin/manageactions')\">Manage Action Options</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/adminheader/adminheader.component.scss":
/***/ (function(module, exports) {

module.exports = ".adminheader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 30px; }\n  .adminheader .adminheader-item {\n    margin: 0 10px;\n    font-size: 20px;\n    cursor: pointer;\n    padding: 5px 10px;\n    border-radius: 5px; }\n  .adminheader .adminheader-item:hover {\n      background: #888; }\n  .adminheader .active {\n    background: #888; }\n"

/***/ }),

/***/ "./src/app/admin/adminheader/adminheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminheaderComponent = /** @class */ (function () {
    function AdminheaderComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.activeURL = '/dashboard/admin/managestaff';
        router.events.subscribe(function (val) {
            console.log(location.path());
            _this.activeURL = location.path();
        });
    }
    AdminheaderComponent.prototype.ngOnInit = function () {
    };
    AdminheaderComponent.prototype.goto = function (url) {
        this.router.navigate([url]);
    };
    AdminheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminheader',
            template: __webpack_require__("./src/app/admin/adminheader/adminheader.component.html"),
            styles: [__webpack_require__("./src/app/admin/adminheader/adminheader.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], AdminheaderComponent);
    return AdminheaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/manageactions/manageactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"manageaction\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <button class=\"btn btn-success\" (click)=\"addnewActionClick()\">Add New Action</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row actionlist-table\">\r\n    <div class=\"col-md-6\">\r\n      <table class=\"table table-hover table-dark\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Action</th>\r\n            <th scope=\"col\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let action of actionList; let i = index\">\r\n            <th scope=\"row\">{{i + 1}}</th>\r\n\r\n            <td>{{action.name}}</td>\r\n            <td>\r\n              <button class=\"btn btn-success\" (click)=\"editActionClick(action.id)\">Edit</button>\r\n              <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row addnewtag\" *ngIf=\"viewStatus == 1\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Action</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Action\" [(ngModel)]=\"newAction.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickAddNewAction()\">Add New Action</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row edittag\" *ngIf=\"viewStatus == 2\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Action</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Action\" [(ngModel)]=\"editAction.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickSaveAction()\">Save Action</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/manageactions/manageactions.component.scss":
/***/ (function(module, exports) {

module.exports = ".manageaction {\n  margin: 0px 50px; }\n  .manageaction .actionlist-table {\n    margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/admin/manageactions/manageactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_action_service__ = __webpack_require__("./src/app/shared/services/action.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageactionsComponent = /** @class */ (function () {
    function ManageactionsComponent(actionService) {
        this.actionService = actionService;
        this.actionList = [];
        this.viewStatus = 0; // 0 : list, 1: add new, 2: edit
        var me = this;
        actionService.getActionList().subscribe(function (data) {
            data['data'].map(function (action) {
                me.actionList.push(action);
            });
        });
    }
    ManageactionsComponent.prototype.ngOnInit = function () {
    };
    ManageactionsComponent.prototype.addnewActionClick = function () {
        this.viewStatus = 1;
        this.newAction = {
            name: ''
        };
    };
    ManageactionsComponent.prototype.editActionClick = function (actionId) {
        this.viewStatus = 2;
        var me = this;
        this.actionList.map(function (action) {
            if (action.id === actionId) {
                me.editAction = action;
            }
        });
    };
    ManageactionsComponent.prototype.clickAddNewAction = function () {
        var me = this;
        this.actionService.addNewAction(this.newAction).subscribe(function (data) {
            me.actionList = [];
            me.viewStatus = 0;
            me.actionService.getActionList().subscribe(function (data1) {
                data1['data'].map(function (action) {
                    me.actionList.push(action);
                });
            });
        });
    };
    ManageactionsComponent.prototype.clickSaveAction = function () {
        var me = this;
        this.actionService.editAction(this.editAction).subscribe(function (data) {
            me.actionList = [];
            me.viewStatus = 0;
            me.actionService.getActionList().subscribe(function (data1) {
                data1['data'].map(function (action) {
                    me.actionList.push(action);
                });
            });
        });
    };
    ManageactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manageactions',
            template: __webpack_require__("./src/app/admin/manageactions/manageactions.component.html"),
            styles: [__webpack_require__("./src/app/admin/manageactions/manageactions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_action_service__["a" /* ActionService */]])
    ], ManageactionsComponent);
    return ManageactionsComponent;
}());



/***/ }),

/***/ "./src/app/admin/managestaff/managestaff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"managestaff\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div *ngIf=\"viewStatus == 0\" class=\"btn btn-success\" (click)=\"addnewStaff()\">Add New Staff</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row staff-list\" *ngIf=\"viewStatus == 0\">\r\n    <div class=\"col-md-12\">\r\n      <table class=\"table table-hover table-dark\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Avartar</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Email</th>\r\n            <th scope=\"col\">Phone</th>\r\n            <th scope=\"cole\">Role</th>\r\n            <th scope=\"col\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let staff of staffList; let i = index\">\r\n            <th scope=\"row\">{{i + 1}}</th>\r\n            <th>\r\n              <img [src]=\"staff.avartar\" class=\"avartar\">\r\n            </th>\r\n            <td>{{staff.name}}</td>\r\n            <td>{{staff.email}}</td>\r\n            <td>{{staff.phone}}</td>\r\n            <td *ngIf=\"staff.role == 1\">Admin</td>\r\n            <td *ngIf=\"staff.role == 2\">Staff</td>\r\n            <td>\r\n              <button class=\"btn btn-success\" (click)=\"editStaffClick(staff.id)\">Edit</button>\r\n              <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr> \r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"addnewstaff container\" *ngIf=\"viewStatus == 1\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n        <img [src]=\"newStaff.avartar\" class=\"newavartar\">\r\n        <div class=\"btn btn-success upload-avartar-btn\" (click)=\"clickChangeAvartar()\">Upload Avartar</div>\r\n        <input type=\"file\" accept=\".jpg, .png, .jpeg\" id=\"profile-imgage-upload\" style=\"display: none;\" (change)=\"fileChange($event)\"> \r\n      </div>\r\n      <div class=\"col-md-7\">\r\n        <div class=\"form-group\">\r\n          <label class=\"text-danger\" *ngIf=\"isNotPasswordMatched\">Password is not matched!</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"newStaff.name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Email address</label>\r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" [(ngModel)]=\"newStaff.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Phone Number</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Phone Number\" [(ngModel)]=\"newStaff.phone\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"newStaff.password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Confirm Password</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Staff Role</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"newStaff.role\">\r\n            <option value=\"1\">Admin</option>\r\n            <option value=\"2\">Staff</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea class=\"form-control\" placeholder=\"Description\" [(ngModel)]=\"newStaff.description\"></textarea>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success\" (click)=\"clickAddNewStaff()\">Add New Staff</button>\r\n        <button class=\"btn btn-danger\" (click)=\"cancelStaffAdd()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<div class=\"editstaff container\" *ngIf=\"viewStatus == 2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <img [src]=\"editStaff.avartar\" class=\"editavartar\">\r\n      <div class=\"btn btn-success change-avartar-btn\" (click)=\"clickChangeAvartar()\">Change Avartar</div>\r\n      <input type=\"file\" accept=\".jpg, .png, .jpeg\" id=\"profile-imgage-upload\" style=\"display: none;\" (change)=\"fileChange($event)\">\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"editStaff.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Email address</label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" [(ngModel)]=\"editStaff.email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Phone Number</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Phone Number\" [(ngModel)]=\"editStaff.phone\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"editStaff.password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Staff Role</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"editStaff.role\">\r\n          <option value=\"1\">Admin</option>\r\n          <option value=\"2\">Staff</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\" placeholder=\"Description\" [(ngModel)]=\"editStaff.description\"></textarea>\r\n      </div>\r\n\r\n      <button class=\"btn btn-success\" (click)=\"clickEditStaff()\">Edit Staff</button>\r\n      <button class=\"btn btn-danger\" (click)=\"cancelStaffEdit()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/managestaff/managestaff.component.scss":
/***/ (function(module, exports) {

module.exports = ".managestaff {\n  margin: 20px 40px; }\n  .managestaff .staff-list {\n    margin-top: 20px; }\n  .managestaff .staff-list .avartar {\n      width: 50px;\n      height: 50px; }\n  .managestaff .addnewstaff .newavartar {\n    width: 100%;\n    border: solid 2px #888;\n    border-radius: 5px;\n    -webkit-box-shadow: 5px 5px 30px -3px #555;\n            box-shadow: 5px 5px 30px -3px #555; }\n  .managestaff .addnewstaff .upload-avartar-btn {\n    width: 100%;\n    margin-top: 20px; }\n  .managestaff .editstaff .editavartar {\n    width: 100%;\n    border: solid 2px #888;\n    border-radius: 5px;\n    -webkit-box-shadow: 5px 5px 30px -3px #555;\n            box-shadow: 5px 5px 30px -3px #555; }\n  .managestaff .editstaff .change-avartar-btn {\n    width: 100%;\n    margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/admin/managestaff/managestaff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagestaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_staff_service__ = __webpack_require__("./src/app/shared/services/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_profile_service__ = __webpack_require__("./src/app/shared/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagestaffComponent = /** @class */ (function () {
    function ManagestaffComponent(staffService, profileService) {
        var _this = this;
        this.staffService = staffService;
        this.profileService = profileService;
        this.staffList = [];
        this.viewStatus = 0; // 0: list, 1: add, 2: edit
        this.confirmPassword = '';
        this.isNotPasswordMatched = false;
        staffService.getStaffList().subscribe(function (data) {
            data['data'].map(function (staff) {
                _this.staffList.push(staff);
            });
        });
        // console.log(this.staffList);
    }
    ManagestaffComponent.prototype.ngOnInit = function () {
    };
    ManagestaffComponent.prototype.addnewStaff = function () {
        this.viewStatus = 1;
        this.newStaff = {
            name: '',
            email: '',
            phone: '',
            avartar: '../assets/default-user.png',
            description: '',
            role: 2,
            password: ''
        };
    };
    ManagestaffComponent.prototype.cancelStaffAdd = function () {
        this.viewStatus = 0;
    };
    ManagestaffComponent.prototype.editStaffClick = function (staffId) {
        this.viewStatus = 2;
        var me = this;
        this.staffList.map(function (staff) {
            if (staff.id === staffId) {
                me.editStaff = staff;
            }
        });
    };
    ManagestaffComponent.prototype.cancelStaffEdit = function () {
        this.viewStatus = 0;
    };
    ManagestaffComponent.prototype.clickAddNewStaff = function () {
        var _this = this;
        if (this.newStaff.password !== this.confirmPassword) {
            this.isNotPasswordMatched = true;
            return;
        }
        this.isNotPasswordMatched = false;
        this.staffService.addNewStaff(this.newStaff).subscribe(function (data) {
            _this.viewStatus = 0;
            _this.staffList = [];
            _this.staffService.getStaffList().subscribe(function (data1) {
                data1['data'].map(function (staff) {
                    _this.staffList.push(staff);
                });
            });
        });
    };
    ManagestaffComponent.prototype.clickEditStaff = function () {
        var me = this;
        this.staffService.editStaff(this.editStaff).subscribe(function (data) {
            console.log(data);
            me.viewStatus = 0;
        });
    };
    ManagestaffComponent.prototype.clickChangeAvartar = function () {
        document.getElementById('profile-imgage-upload').click();
    };
    ManagestaffComponent.prototype.fileChange = function (event) {
        var _this = this;
        var me = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('photo', file, file.name);
            this.profileService.uploadProfileImage(formData).subscribe(function (data) {
                if (me.viewStatus === 1) {
                    _this.newStaff.avartar = __WEBPACK_IMPORTED_MODULE_3__shared_modules_config_model__["a" /* config */].baseURL + data.url;
                }
                if (me.viewStatus === 2) {
                    _this.editStaff.avartar = __WEBPACK_IMPORTED_MODULE_3__shared_modules_config_model__["a" /* config */].baseURL + data.url;
                }
            });
        }
    };
    ManagestaffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managestaff',
            template: __webpack_require__("./src/app/admin/managestaff/managestaff.component.html"),
            styles: [__webpack_require__("./src/app/admin/managestaff/managestaff.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_profile_service__["a" /* ProfileService */]])
    ], ManagestaffComponent);
    return ManagestaffComponent;
}());



/***/ }),

/***/ "./src/app/admin/managestatus/managestatus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"managestatus \">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <button class=\"btn btn-success\" (click)=\"addnewStatusClick()\">Add New Status</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row statuslist-table\">\r\n    <div class=\"col-md-6\">\r\n      <table class=\"table table-hover table-dark\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Status</th>\r\n            <th scope=\"col\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let status of statusList; let i = index\">\r\n            <th scope=\"row\">{{i + 1}}</th>\r\n\r\n            <td>{{status.name}}</td>\r\n            <td>\r\n              <button class=\"btn btn-success\" (click)=\"editStatusClick(status.id)\">Edit</button>\r\n              <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row addnewstatus\" *ngIf=\"viewStatus == 1\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Status</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Status\" [(ngModel)]=\"newStatus.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickAddNewStatus()\">Add New Status</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row editstatus\" *ngIf=\"viewStatus == 2\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Status</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Status\" [(ngModel)]=\"editStatus.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickSaveStatus()\">Save Status</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/managestatus/managestatus.component.scss":
/***/ (function(module, exports) {

module.exports = ".managestatus {\n  margin: 0px 50px; }\n  .managestatus .statuslist-table {\n    margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/admin/managestatus/managestatus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagestatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_status_service__ = __webpack_require__("./src/app/shared/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagestatusComponent = /** @class */ (function () {
    function ManagestatusComponent(statusService) {
        this.statusService = statusService;
        this.statusList = [];
        this.viewStatus = 0; // 0 : list, 1: add new, 2: edit
        var me = this;
        statusService.getStatusList().subscribe(function (data) {
            data['data'].map(function (status) {
                me.statusList.push(status);
            });
        });
    }
    ManagestatusComponent.prototype.ngOnInit = function () {
    };
    ManagestatusComponent.prototype.addnewStatusClick = function () {
        this.viewStatus = 1;
        this.newStatus = {
            name: ''
        };
    };
    ManagestatusComponent.prototype.editStatusClick = function (statusId) {
        this.viewStatus = 2;
        var me = this;
        this.statusList.map(function (status) {
            if (status.id === statusId) {
                me.editStatus = status;
            }
        });
    };
    ManagestatusComponent.prototype.clickAddNewStatus = function () {
        var me = this;
        this.statusService.addNewStatus(this.newStatus).subscribe(function (data) {
            me.viewStatus = 0;
            me.statusList = [];
            me.statusService.getStatusList().subscribe(function (data1) {
                data1['data'].map(function (status) {
                    me.statusList.push(status);
                });
            });
        });
    };
    ManagestatusComponent.prototype.clickSaveStatus = function () {
        var me = this;
        this.statusService.editStatus(this.editStatus).subscribe(function (data) {
            me.viewStatus = 0;
            me.statusList = [];
            me.statusService.getStatusList().subscribe(function (data1) {
                data1['data'].map(function (status) {
                    me.statusList.push(status);
                });
            });
        });
    };
    ManagestatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managestatus',
            template: __webpack_require__("./src/app/admin/managestatus/managestatus.component.html"),
            styles: [__webpack_require__("./src/app/admin/managestatus/managestatus.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_status_service__["a" /* StatusService */]])
    ], ManagestatusComponent);
    return ManagestatusComponent;
}());



/***/ }),

/***/ "./src/app/admin/managetags/managetags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"managetags \">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <button class=\"btn btn-success\" (click)=\"addnewTagClick()\">Add New Tag</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row taglist-table\">\r\n    <div class=\"col-md-6\">\r\n      <table class=\"table table-hover table-dark\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let tag of tagList; let i = index\">\r\n            <th scope=\"row\">{{i + 1}}</th>\r\n           \r\n            <td>{{tag.name}}</td>\r\n            <td>\r\n              <button class=\"btn btn-success\" (click)=\"editTagClick(tag.id)\">Edit</button>\r\n              <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row addnewtag\" *ngIf=\"viewStatus == 1\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"newTag.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickAddNewTag()\">Add New Tag</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row edittag\" *ngIf=\"viewStatus == 2\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"editTag.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickSaveTag()\">Save Tag</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/managetags/managetags.component.scss":
/***/ (function(module, exports) {

module.exports = ".managetags {\n  margin: 0px 50px; }\n  .managetags .taglist-table {\n    margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/admin/managetags/managetags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagetagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_tag_service__ = __webpack_require__("./src/app/shared/services/tag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagetagsComponent = /** @class */ (function () {
    function ManagetagsComponent(tagService) {
        this.tagService = tagService;
        this.tagList = [];
        this.viewStatus = 0; // 0 : list, 1: add new, 2: edit
        var me = this;
        tagService.getTagList().subscribe(function (data) {
            data['data'].map(function (tag) {
                me.tagList.push(tag);
            });
        });
    }
    ManagetagsComponent.prototype.ngOnInit = function () {
    };
    ManagetagsComponent.prototype.addnewTagClick = function () {
        this.viewStatus = 1;
        this.newTag = {
            name: ''
        };
    };
    ManagetagsComponent.prototype.editTagClick = function (tagId) {
        this.viewStatus = 2;
        var me = this;
        this.tagList.map(function (tag) {
            if (tag.id === tagId) {
                me.editTag = tag;
            }
        });
    };
    ManagetagsComponent.prototype.clickAddNewTag = function () {
        var me = this;
        this.tagService.addNewTag(this.newTag).subscribe(function (data) {
            me.viewStatus = 0;
            me.tagList = [];
            me.tagService.getTagList().subscribe(function (data1) {
                data1['data'].map(function (tag) {
                    me.tagList.push(tag);
                });
            });
        });
    };
    ManagetagsComponent.prototype.clickSaveTag = function () {
        var me = this;
        this.tagService.editTag(this.editTag).subscribe(function (data) {
            me.viewStatus = 0;
            me.tagList = [];
            me.tagService.getTagList().subscribe(function (data1) {
                data1['data'].map(function (tag) {
                    me.tagList.push(tag);
                });
            });
        });
    };
    ManagetagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managetags',
            template: __webpack_require__("./src/app/admin/managetags/managetags.component.html"),
            styles: [__webpack_require__("./src/app/admin/managetags/managetags.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_tag_service__["a" /* TagService */]])
    ], ManagetagsComponent);
    return ManagetagsComponent;
}());



/***/ }),

/***/ "./src/app/admin/managetemplates/managetemplates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"managetemplate\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <button class=\"btn btn-success\" (click)=\"addnewTemplateClick()\">Add New Template</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row templatelist-table\">\r\n    <div class=\"col-md-6\">\r\n      <table class=\"table table-hover table-dark\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Template</th>\r\n            <th scope=\"col\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let template of templateList; let i = index\">\r\n            <th scope=\"row\">{{i + 1}}</th>\r\n\r\n            <td>{{template.name}}</td>\r\n            <td>\r\n              <button class=\"btn btn-success\" (click)=\"editTemplateClick(template.id)\">Edit</button>\r\n              <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row addnewtemplate\" *ngIf=\"viewStatus == 1\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Template</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Template\" [(ngModel)]=\"newTemplate.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickAddNewTemplate()\">Add New Template</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row edittemplate\" *ngIf=\"viewStatus == 2\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Template\" [(ngModel)]=\"editTemplate.name\">\r\n          </div>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"clickSaveTemplate()\">Save Template</button>\r\n          <button class=\"btn btn-danger\" (click)=\"viewStatus = 0\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/managetemplates/managetemplates.component.scss":
/***/ (function(module, exports) {

module.exports = ".managetemplate {\n  margin: 0px 50px; }\n  .managetemplate .templatelist-table {\n    margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/admin/managetemplates/managetemplates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagetemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_template_service__ = __webpack_require__("./src/app/shared/services/template.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagetemplatesComponent = /** @class */ (function () {
    function ManagetemplatesComponent(templateService) {
        this.templateService = templateService;
        this.templateList = [];
        this.viewStatus = 0; // 0 : list, 1: add new, 2: edit
        var me = this;
        templateService.getTemplateList().subscribe(function (data) {
            data['data'].map(function (template) {
                me.templateList.push(template);
            });
        });
    }
    ManagetemplatesComponent.prototype.ngOnInit = function () {
    };
    ManagetemplatesComponent.prototype.addnewTemplateClick = function () {
        this.viewStatus = 1;
        this.newTemplate = {
            name: ''
        };
    };
    ManagetemplatesComponent.prototype.editTemplateClick = function (templateId) {
        this.viewStatus = 2;
        var me = this;
        this.templateList.map(function (template) {
            if (template.id === templateId) {
                me.editTemplate = template;
            }
        });
    };
    ManagetemplatesComponent.prototype.clickAddNewTemplate = function () {
        var me = this;
        this.templateService.addNewTemplate(this.newTemplate).subscribe(function (data) {
            me.viewStatus = 0;
            me.templateList = [];
            me.templateService.getTemplateList().subscribe(function (data1) {
                data1['data'].map(function (template) {
                    me.templateList.push(template);
                });
            });
        });
    };
    ManagetemplatesComponent.prototype.clickSaveTemplate = function () {
        var me = this;
        this.templateService.editTemplate(this.editTemplate).subscribe(function (data) {
            me.viewStatus = 0;
            me.templateList = [];
            me.templateService.getTemplateList().subscribe(function (data1) {
                data1['data'].map(function (template) {
                    me.templateList.push(template);
                });
            });
        });
    };
    ManagetemplatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managetemplates',
            template: __webpack_require__("./src/app/admin/managetemplates/managetemplates.component.html"),
            styles: [__webpack_require__("./src/app/admin/managetemplates/managetemplates.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_template_service__["a" /* TemplateService */]])
    ], ManagetemplatesComponent);
    return ManagetemplatesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_home_home_component__ = __webpack_require__("./src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_managestaff_managestaff_component__ = __webpack_require__("./src/app/admin/managestaff/managestaff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_managetags_managetags_component__ = __webpack_require__("./src/app/admin/managetags/managetags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_managetemplates_managetemplates_component__ = __webpack_require__("./src/app/admin/managetemplates/managetemplates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_managestatus_managestatus_component__ = __webpack_require__("./src/app/admin/managestatus/managestatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_manageactions_manageactions_component__ = __webpack_require__("./src/app/admin/manageactions/manageactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        path: 'login'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_services_authguard_service__["a" /* AuthguardService */]],
        children: [{
                component: __WEBPACK_IMPORTED_MODULE_4__dashboard_home_home_component__["a" /* HomeComponent */],
                path: 'home'
            }, {
                component: __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */],
                path: 'contacts'
            }, {
                component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
                path: 'profile'
            }, {
                component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */],
                path: 'admin',
                children: [{
                        component: __WEBPACK_IMPORTED_MODULE_8__admin_managestaff_managestaff_component__["a" /* ManagestaffComponent */],
                        path: 'managestaff'
                    }, {
                        component: __WEBPACK_IMPORTED_MODULE_9__admin_managetags_managetags_component__["a" /* ManagetagsComponent */],
                        path: 'managetags'
                    }, {
                        component: __WEBPACK_IMPORTED_MODULE_10__admin_managetemplates_managetemplates_component__["a" /* ManagetemplatesComponent */],
                        path: 'managetemplates'
                    }, {
                        component: __WEBPACK_IMPORTED_MODULE_11__admin_managestatus_managestatus_component__["a" /* ManagestatusComponent */],
                        path: 'managestatus'
                    }, {
                        component: __WEBPACK_IMPORTED_MODULE_12__admin_manageactions_manageactions_component__["a" /* ManageactionsComponent */],
                        path: 'manageactions'
                    }]
            }
        ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_home_home_component__ = __webpack_require__("./src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_header_header_component__ = __webpack_require__("./src/app/dashboard/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_profile_service__ = __webpack_require__("./src/app/shared/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_adminheader_adminheader_component__ = __webpack_require__("./src/app/admin/adminheader/adminheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_managestaff_managestaff_component__ = __webpack_require__("./src/app/admin/managestaff/managestaff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_managetags_managetags_component__ = __webpack_require__("./src/app/admin/managetags/managetags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_managetemplates_managetemplates_component__ = __webpack_require__("./src/app/admin/managetemplates/managetemplates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_managestatus_managestatus_component__ = __webpack_require__("./src/app/admin/managestatus/managestatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_manageactions_manageactions_component__ = __webpack_require__("./src/app/admin/manageactions/manageactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_staff_service__ = __webpack_require__("./src/app/shared/services/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_tag_service__ = __webpack_require__("./src/app/shared/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_template_service__ = __webpack_require__("./src/app/shared/services/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_status_service__ = __webpack_require__("./src/app/shared/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_action_service__ = __webpack_require__("./src/app/shared/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_contacts_service__ = __webpack_require__("./src/app/shared/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular_6_datatable__ = __webpack_require__("./node_modules/angular-6-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular_6_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular_6_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_adminheader_adminheader_component__["a" /* AdminheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_managestaff_managestaff_component__["a" /* ManagestaffComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_managetags_managetags_component__["a" /* ManagetagsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__admin_managetemplates_managetemplates_component__["a" /* ManagetemplatesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_managestatus_managestatus_component__["a" /* ManagestatusComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_manageactions_manageactions_component__["a" /* ManageactionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28_angular_6_datatable__["DataTableModule"]
                // NgbModule.forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__shared_services_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_services_staff_service__["a" /* StaffService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_tag_service__["a" /* TagService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_template_service__["a" /* TemplateService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_status_service__["a" /* StatusService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_action_service__["a" /* ActionService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_authguard_service__["a" /* AuthguardService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_services_contacts_service__["a" /* ContactsService */]
                // NgbModal
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts\">\r\n  \r\n  <!-- <table class=\"table table-hover \" [mfData]=\"contactsList\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>\r\n          <mfDefaultSorter by=\"first_name\">First Name</mfDefaultSorter>\r\n        </th>\r\n        <th>\r\n          <mfDefaultSorter by=\"last_name\">Last Name</mfDefaultSorter>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let contact of mf.data; let i = index\">\r\n        <td>{{i}}</td>\r\n        <td>{{contact['first_name']}}</td>\r\n        <td>{{contact['last_name']}}</td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"4\">\r\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n        </td>\r\n      </tr>\r\n    </tfoot>\r\n  </table> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (input)=\"filter()\" [(ngModel)]=\"searchFilter\">\r\n    </div>\r\n    \r\n    <div class=\"col-md-2 btn btn-default\" (click)=\"isAdvancedFiltering = !isAdvancedFiltering ; filter()\">Advanced Filtering</div>\r\n\r\n    <div class=\"col-md-2 dropdown\">\r\n      <button class=\"btn btn-success\" data-toggle=\"dropdown\">Action</button>\r\n      <ul class=\"dropdown-menu\">\r\n        <li (click)=\"deleteSelected()\">Delete</li>\r\n        <li>Send Bulk Messages</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row advanced-filtering\" *ngIf=\"isAdvancedFiltering\">\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"tag\" class=\"form-control\" [(ngModel)]=\"tagFilter\" (input)=\"filter()\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"status\" class=\"form-control\" [(ngModel)]=\"statusFilter\" (input)=\"filter()\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"actions\" class=\"form-control\" [(ngModel)]=\"actionsFilter\" (input)=\"filter()\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"messages\" class=\"form-control\" [(ngModel)]=\"messagesFilter\" (input)=\"filter()\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"date of creation\" class=\"form-control\" (input)=\"filter()\" [(ngModel)]=\"dateofcreationFilter\">\r\n    </div>\r\n\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"staff\" class=\"form-control\" (input)=\"filter()\" [(ngModel)]=\"staffFilter\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"rate\" class=\"form-control\" (input)=\"filter()\" [(ngModel)]=\"ratingFilter\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"time\" class=\"form-control\" (input)=\"filter()\" [(ngModel)]=\"timeFilter\">\r\n    </div>\r\n    <div class=\"col-md-4 filter-item\">\r\n      <input type=\"text\" placeholder=\"note\" class=\"form-control\" (input)=\"filter()\" [(ngModel)]=\"noteFilter\">\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"contacts\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <th></th>\r\n        <th>Profile</th>\r\n        <th>Name</th>\r\n        <th>Tags</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n        <th>Messages</th>\r\n        <th>Date of Creation</th>\r\n        <th>Staff</th>\r\n        <th>Rating</th>\r\n        <th>Time</th>\r\n        <th>Note</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let contact of contactsListShow; let i = index\">\r\n          <td><input type=\"checkbox\" [(ngModel)]=\"contact.check\"></td>\r\n          <td>\r\n            <img [src]=\"contact.profile_image\" alt=\"\" class=\"profile-image\">\r\n          </td>\r\n          <td>{{contact.name}}</td>\r\n          <td>{{contact.tags}}</td>\r\n          <td>{{contact.status}}</td>\r\n          <td>{{contact.actions}}</td>\r\n          <td>{{contact.messages}}</td>\r\n          <td>{{contact.date_of_creation}}</td>\r\n          <td>{{contact.staff}}</td>\r\n          <td>{{contact.rating}}</td>\r\n          <td>{{contact.time}}s</td>\r\n          <td>{{contact.note}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/***/ (function(module, exports) {

module.exports = ".contacts {\n  margin: 0px 50px;\n  padding-top: 20px; }\n  .contacts .profile-image {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: solid 2px; }\n  .contacts .advanced-filtering {\n    margin-top: 20px;\n    background: #888;\n    padding: 10px; }\n  .contacts .advanced-filtering .filter-item {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n  .contacts .dropdown .dropdown-menu li {\n    padding: 5px;\n    cursor: pointer; }\n  .contacts .dropdown .dropdown-menu li:hover {\n      background: #888; }\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_contacts_service__ = __webpack_require__("./src/app/shared/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_tag_service__ = __webpack_require__("./src/app/shared/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_status_service__ = __webpack_require__("./src/app/shared/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_action_service__ = __webpack_require__("./src/app/shared/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_staff_service__ = __webpack_require__("./src/app/shared/services/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactsService, tagService, statusService, actionService, staffService) {
        this.contactsService = contactsService;
        this.tagService = tagService;
        this.statusService = statusService;
        this.actionService = actionService;
        this.staffService = staffService;
        this.contactsList = [];
        this.contactsListShow = [];
        this.isAdvancedFiltering = false;
        this.tagFilter = '';
        this.searchFilter = '';
        this.statusFilter = '';
        this.actionsFilter = '';
        this.messagesFilter = '';
        this.dateofcreationFilter = '';
        this.staffFilter = '';
        this.ratingFilter = '';
        this.noteFilter = '';
        this.timeFilter = '';
        this.loadContacts();
    }
    ContactsComponent.prototype.loadContacts = function () {
        var me = this;
        var userId = localStorage.getItem('userId');
        var role = localStorage.getItem('role');
        me.contactsList = [];
        me.contactsListShow = [];
        this.contactsService.getContacts().subscribe(function (data) {
            if (data['success'] === 1) {
                data['data'].map(function (contact) {
                    if (role.toString() === '2') {
                        if (contact['staff'].toString() === userId) {
                            me.contactsList.push(contact);
                        }
                    }
                    else {
                        me.contactsList.push(contact);
                    }
                });
                me.contactsList.map(function (contact) {
                    me.tagService.getTagName(contact['tags']).subscribe(function (tag) {
                        contact['tags'] = tag['data'][0]['name'];
                    });
                    me.statusService.getStatusName(contact['status']).subscribe(function (status) {
                        contact['status'] = status['data'][0]['name'];
                    });
                    me.actionService.getActionName(contact['actions']).subscribe(function (action) {
                        contact['actions'] = action['data'][0]['name'];
                    });
                    me.staffService.getStaffName(contact['staff']).subscribe(function (staff) {
                        contact['staff'] = staff['data'][0]['name'];
                    });
                    contact['check'] = false;
                });
                me.contactsListShow = me.contactsList;
            }
        });
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.filter = function () {
        var me = this;
        console.log(me.contactsListShow);
        me.contactsListShow = me.contactsList.filter(function (el) {
            if (!me.isAdvancedFiltering) {
                return el.name.includes(me.searchFilter);
            }
            return el.tags.includes(me.tagFilter)
                && el.name.includes(me.searchFilter)
                && el.status.includes(me.statusFilter)
                && el.actions.includes(me.actionsFilter)
                && el.messages.includes(me.messagesFilter)
                && el.date_of_creation.includes(me.dateofcreationFilter)
                && el.staff.includes(me.staffFilter)
                && el.rating.toString().includes(me.ratingFilter)
                && el.time.toString().includes(me.timeFilter)
                && el.note.includes(me.noteFilter);
        });
    };
    ContactsComponent.prototype.deleteSelected = function () {
        var me = this;
        var checkedList = [];
        checkedList = me.contactsListShow.filter(function (el) {
            return el.check;
        });
        console.log(checkedList);
        if (checkedList.length === 0) {
            alert('Please select contact list to delete!');
            return;
        }
        checkedList.map(function (contact) {
            me.contactsService.delete(contact.id).subscribe(function (data) {
                console.log(data);
                me.loadContacts();
            });
        });
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_tag_service__["a" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_status_service__["a" /* StatusService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_action_service__["a" /* ActionService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_staff_service__["a" /* StaffService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"left-items\">\r\n    <div class=\"left-item\" [ngClass]=\"{'active': activeURL=='/dashboard/home'}\" (click)=\"goto('/dashboard/home')\">Dashboard</div>\r\n    <div class=\"left-item\" [ngClass]=\"{'active': activeURL=='/dashboard/contacts'}\" (click)=\"goto('/dashboard/contacts')\">Contacts</div>\r\n    <div *ngIf=\"profile != null &&  profile.role == 1\" class=\"left-item\" [ngClass]=\"{'active': activeURL=='/dashboard/admin/managestaff'}\" (click)=\"goto('/dashboard/admin/managestaff')\">Admin</div>\r\n  </div>\r\n  <div class=\"right-items\">\r\n    <div class=\"user\" (click)=\"goto('/dashboard/profile')\" *ngIf=\"isLoadedProfile\">\r\n      <img [src]=\"profile.avartar\" class=\"avartar\" >\r\n      <div class=\"username\" >{{profile.name}}</div>\r\n    </div>\r\n    <div class=\"logout\" (click)=\"logout()\">Log Out</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 20px 15px;\n  -webkit-box-shadow: 0 3px 9px -3px #636262;\n          box-shadow: 0 3px 9px -3px #636262; }\n  .header .left-items, .header .right-items {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .header .left-items .left-item {\n    padding: 5px 15px;\n    font-size: 20px;\n    font-weight: 600;\n    cursor: pointer; }\n  .header .left-items .left-item:hover {\n      background: #aaa; }\n  .header .left-items .active {\n    background: #aaa; }\n  .header .right-items .logout {\n    padding: 5px 15px;\n    font-size: 20px;\n    font-weight: 600;\n    cursor: pointer; }\n  .header .right-items .logout:hover {\n      background: #aaa; }\n  .header .right-items .user {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .header .right-items .user .username {\n      padding: 5px 15px;\n      font-size: 20px;\n      font-weight: 600;\n      cursor: pointer; }\n  .header .right-items .user .avartar {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      border: solid 1px;\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_profile_service__ = __webpack_require__("./src/app/shared/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, location, profileService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.profileService = profileService;
        this.activeURL = '/dashboard/home';
        this.isLoadedProfile = false;
        router.events.subscribe(function (val) {
            _this.activeURL = location.path();
        });
        profileService.getProfile().subscribe(function (data) {
            var me = _this;
            _this.profileService.getProfile().subscribe(function (data1) {
                me.profile = {
                    name: data1['data'][0].name,
                    email: data1['data'][0].email,
                    phone: data1['data'][0].phone,
                    avartar: data1['data'][0].avartar,
                    description: data1['data'][0].description,
                    role: data1['data'][0].role
                };
                _this.isLoadedProfile = true;
            });
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goto = function (url) {
        this.router.navigate([url]);
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/dashboard/header/header.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_profile_service__["a" /* ProfileService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Comming Soon!</h1>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-2\"></div>\r\n    <div class=\"col-lg-6 col-md-8 login-box\">\r\n      <div class=\"col-lg-12 login-key\">\r\n        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"col-lg-12 login-title\">\r\n        CHERRY ADMIN\r\n      </div>\r\n\r\n      <div class=\"col-lg-12 login-form\">\r\n        <div class=\"col-lg-12 login-form\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n            <label class=\"text-danger\" *ngIf=\"isResError\">User Name or Password is not matched!</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-control-label\">USERNAME</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userInfo.email\" name=\"useremail\">\r\n              <label class=\"text-danger\" *ngIf=\"isEmailErrorValidation\">Password is Required</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-control-label\">PASSWORD</label>\r\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userInfo.password\" name=\"userpassword\">\r\n              <label class=\"text-danger\" *ngIf=\"isPasswordErrorValidation\">Password is Required</label>\r\n            </div>\r\n\r\n            <div class=\"col-lg-12 loginbttm\">\r\n              <div class=\"col-lg-6 login-btm login-text\">\r\n                <!-- Error Message -->\r\n              </div>\r\n              <div class=\"col-lg-6 login-btm login-button\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"login()\">LOGIN</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-2\"></div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #222D32 !important;\n  font-family: 'Roboto', sans-serif; }\n\n.login-box {\n  margin-top: 75px;\n  height: auto;\n  background: #1A2226;\n  text-align: center;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.login-key {\n  height: 100px;\n  font-size: 80px;\n  line-height: 100px;\n  background: -webkit-linear-gradient(#27EF9F, #0DB8DE);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.login-title {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 30px;\n  letter-spacing: 2px;\n  margin-top: 15px;\n  font-weight: bold;\n  color: #ECF0F5; }\n\n.login-form {\n  margin-top: 25px;\n  text-align: left; }\n\ninput[type=text] {\n  background-color: #1A2226;\n  border: none;\n  border-bottom: 2px solid #0DB8DE;\n  border-top: 0px;\n  border-radius: 0px;\n  font-weight: bold;\n  outline: 0;\n  margin-bottom: 20px;\n  padding-left: 0px;\n  color: #ECF0F5; }\n\ninput[type=password] {\n  background-color: #1A2226;\n  border: none;\n  border-bottom: 2px solid #0DB8DE;\n  border-top: 0px;\n  border-radius: 0px;\n  font-weight: bold;\n  outline: 0;\n  padding-left: 0px;\n  margin-bottom: 20px;\n  color: #ECF0F5; }\n\n.form-group {\n  margin-bottom: 40px;\n  outline: 0px; }\n\n.form-control:focus {\n  border-color: inherit;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-bottom: 2px solid #0DB8DE;\n  outline: 0;\n  background-color: #1A2226;\n  color: #ECF0F5; }\n\ninput:focus {\n  outline: none;\n  -webkit-box-shadow: 0 0 0;\n          box-shadow: 0 0 0; }\n\nlabel {\n  margin-bottom: 0px; }\n\n.form-control-label {\n  font-size: 10px;\n  color: #6C6C6C;\n  font-weight: bold;\n  letter-spacing: 1px; }\n\n.btn-outline-primary {\n  border-color: #0DB8DE;\n  color: #0DB8DE;\n  border-radius: 0px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.btn-outline-primary:hover {\n  background-color: #0DB8DE;\n  right: 0px; }\n\n.login-btm {\n  float: left; }\n\n.login-button {\n  padding-right: 0px;\n  text-align: right;\n  margin-bottom: 25px; }\n\n.login-text {\n  text-align: left;\n  padding-left: 0px;\n  color: #A2A4A4; }\n\n.loginbttm {\n  padding: 0px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
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
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.userInfo = {
            email: 'admin@mail.com',
            password: 'soksunae'
        };
        this.isEmailErrorValidation = false;
        this.isPasswordErrorValidation = false;
        this.isResError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.userInfo.email === '') {
            this.isEmailErrorValidation = true;
            return;
        }
        if (this.userInfo.password === '') {
            this.isPasswordErrorValidation = true;
            return;
        }
        this.isEmailErrorValidation = false;
        this.isPasswordErrorValidation = false;
        this.isResError = false;
        this.loginService.login(this.userInfo).subscribe(function (data) {
            console.log(data);
            if (data == null) {
                _this.isResError = true;
                return;
            }
            if (data['error'] === 0) {
                _this.isResError = false;
                _this.loginService.token = data['token'];
                localStorage.setItem('token', data['token']);
                localStorage.setItem('userId', data['user'].id);
                localStorage.setItem('role', data['user'].role);
                _this.router.navigate(['/dashboard/home']);
            }
        }, function (err) {
            console.log(err);
        });
        // this.router.navigate(['/dashboard/home']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n    <img [src]=\"profile.avartar\" class=\"avartar\" *ngIf=\"isLoadedProfile\">\r\n      \r\n      <div class=\"btn btn-success change-avartar-btn\" (click)=\"clickChangeAvartar()\">Change Avartar</div>\r\n      <input type=\"file\" accept=\".jpg, .png, .jpeg\" id=\"profile-imgage-upload\" style=\"display: none;\" (change)=\"fileChange($event)\">\r\n      <div class=\"btn btn-danger change-password-btn\" (click)=\"isChangePassword = true\">Change Password</div>\r\n      <div class=\"btn btn-primary change-profile-btn\" (click)=\"clickEditProfile()\">Edit Profile</div>\r\n    </div>\r\n    <div class=\"col-md-7\" *ngIf=\"isLoadedProfile\">\r\n      <div class=\"profile-info\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h3>Name : </h3>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h3 *ngIf=\"!isEditProfile\">{{profile.name}}</h3>\r\n            <input [(ngModel)]=\"editprofile.name\" *ngIf=\"isEditProfile\" class=\"form-control\" placeholder=\"Name\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h3>Email : </h3>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h3 *ngIf=\"!isEditProfile\">{{profile.email}}</h3>\r\n            <input [(ngModel)]=\"editprofile.email\" *ngIf=\"isEditProfile\" class=\"form-control\" placeholder=\"Email\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h3>Phone : </h3>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h3 *ngIf=\"!isEditProfile\">{{profile.phone}}</h3>\r\n            <input [(ngModel)]=\"editprofile.phone\" *ngIf=\"isEditProfile\" class=\"form-control\" placeholder=\"Phone\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h3>Description : </h3>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div *ngIf=\"!isEditProfile\">{{profile.description}}</div>\r\n            <textarea [(ngModel)]=\"editprofile.description\" *ngIf=\"isEditProfile\" class=\"form-control description-textarea\" placeholder=\"Description\"></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row save-profile-btns\" *ngIf=\"isEditProfile\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"btn btn-success\" (click)=\"clickSaveProfile()\">Save Profile</div>\r\n            <div class=\"btn btn-danger\" (click)=\"isEditProfile = false\">Cancel</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"change-pwd-div\" *ngIf=\"isChangePassword\">\r\n        <div class=\"form-group\">\r\n          <label class=\"text-danger\" *ngIf=\"isNotMatchedPasswords\">Passwords are not Matched!</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Current Password:</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\" [(ngModel)]=\"changePassword.current\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>New Password:</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" [(ngModel)]=\"changePassword.new\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Confirm Password:</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"changePassword.confirm\">\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"clickChangePassword()\">Change Password</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"clickCancelChangePassword()\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile {\n  margin-top: 20px; }\n  .profile .avartar {\n    width: 100%;\n    border: solid 2px #888;\n    border-radius: 5px;\n    -webkit-box-shadow: 5px 5px 30px -3px #555;\n            box-shadow: 5px 5px 30px -3px #555; }\n  .profile .change-avartar-btn {\n    width: 100%;\n    margin-top: 20px; }\n  .profile .change-password-btn {\n    width: 100%;\n    margin-top: 20px; }\n  .profile .change-profile-btn {\n    width: 100%;\n    margin-top: 20px; }\n  .profile .change-pwd-div {\n    margin-top: 30px; }\n  .profile .description-textarea {\n    min-height: 300px; }\n  .profile .save-profile-btns {\n    margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__ = __webpack_require__("./src/app/shared/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.changePassword = {
            current: '',
            confirm: '',
            new: '',
            id: ''
        };
        this.isChangePassword = false;
        this.isEditProfile = false;
        this.isLoadedProfile = false;
        this.isNotMatchedPasswords = false;
        var me = this;
        this.profileService.getProfile().subscribe(function (data) {
            me.profile = {
                name: data['data'][0].name,
                email: data['data'][0].email,
                phone: data['data'][0].phone,
                avartar: data['data'][0].avartar,
                description: data['data'][0].description
            };
            _this.isLoadedProfile = true;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.clickEditProfile = function () {
        this.isEditProfile = true;
        this.editprofile = {
            name: this.profile.name,
            email: this.profile.email,
            phone: this.profile.phone,
            avartar: this.profile.avartar,
            description: this.profile.description
        };
    };
    ProfileComponent.prototype.clickSaveProfile = function () {
        this.profileService.editProfile(this.editprofile).subscribe(function (data) {
            console.log(data);
            if (data['success'] === 1) {
                location.reload();
            }
        });
    };
    ProfileComponent.prototype.clickChangePassword = function () {
        if (this.changePassword.new !== this.changePassword.confirm) {
            this.isNotMatchedPasswords = true;
            return;
        }
        this.changePassword.id = this.profileService.id;
        var me = this;
        this.profileService.changePassword(this.changePassword).subscribe(function (data) {
            if (data['error'] === 1) {
                me.isChangePassword = false;
            }
        });
    };
    ProfileComponent.prototype.clickCancelChangePassword = function () {
        this.isChangePassword = false;
        this.changePassword = {
            current: '',
            confirm: '',
            new: '',
            id: this.profileService.id
        };
    };
    ProfileComponent.prototype.clickChangeAvartar = function () {
        document.getElementById('profile-imgage-upload').click();
    };
    ProfileComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('photo', file, file.name);
            this.profileService.uploadProfileImage(formData).subscribe(function (data) {
                _this.profile.avartar = __WEBPACK_IMPORTED_MODULE_2__shared_modules_config_model__["a" /* config */].baseURL + data.url;
                _this.profileService.editProfile(_this.profile).subscribe(function (data1) {
                    // location.reload();
                });
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_profile_service__["a" /* ProfileService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    baseURL: 'http://localhost:3000/'
    // baseURL: 'http://34.220.128.209:3000/'
};


/***/ }),

/***/ "./src/app/shared/services/action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionService = /** @class */ (function () {
    function ActionService(http) {
        this.http = http;
        this.actionList = [];
        this.table_name = 'action';
        this.token = localStorage.getItem('token');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    ActionService.prototype.getActionList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, { headers: this.header });
    };
    ActionService.prototype.addNewAction = function (newAction) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, newAction, { headers: this.header });
    };
    ActionService.prototype.editAction = function (editAction) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + editAction.id, editAction, { headers: this.header });
    };
    ActionService.prototype.getActionName = function (actionId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + actionId, { headers: this.header });
    };
    ActionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ActionService);
    return ActionService;
}());



/***/ }),

/***/ "./src/app/shared/services/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthguardService.prototype.canActivate = function () {
        if (localStorage.getItem('token') != null) {
            this.loginService.token = localStorage.getItem('token');
            return true;
        }
        return false;
    };
    AuthguardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/shared/services/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
        this.table_name = 'contacts';
        this.token = localStorage.getItem('token');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    ContactsService.prototype.getContacts = function () {
        // return this.http.get(config.baseURL + 'remote/getUsers', { headers: this.header });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, { headers: this.header });
    };
    ContactsService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + id, { headers: this.header });
    };
    ContactsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    LoginService.prototype.login = function (userInfo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'users/login', userInfo);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('userId');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/users/' + this.id, { headers: this.header });
    };
    ProfileService.prototype.editProfile = function (profileInfo) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/users/' + this.id, profileInfo, { headers: this.header });
    };
    ProfileService.prototype.changePassword = function (password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'users/changepassword', password, { headers: this.header });
    };
    ProfileService.prototype.uploadProfileImage = function (formdata) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'upload', formdata);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/shared/services/staff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffService = /** @class */ (function () {
    function StaffService(http) {
        this.http = http;
        this.staffList = [];
        this.table_name = 'users';
        this.token = localStorage.getItem('token');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    StaffService.prototype.getStaffList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, { headers: this.header });
    };
    StaffService.prototype.addNewStaff = function (newStaff) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, newStaff, { headers: this.header });
    };
    StaffService.prototype.editStaff = function (editStaff) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + editStaff.id, editStaff, { headers: this.header });
    };
    StaffService.prototype.getStaffName = function (staffId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + staffId, { headers: this.header });
    };
    StaffService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/shared/services/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusService = /** @class */ (function () {
    function StatusService(http) {
        this.http = http;
        this.statusList = [];
        this.table_name = 'status';
        this.token = localStorage.getItem('token');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    StatusService.prototype.getStatusList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, { headers: this.header });
    };
    StatusService.prototype.addNewStatus = function (newStatus) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, newStatus, { headers: this.header });
    };
    StatusService.prototype.editStatus = function (editStatus) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + editStatus.id, editStatus, { headers: this.header });
    };
    StatusService.prototype.getStatusName = function (statusId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + statusId, { headers: this.header });
    };
    StatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/shared/services/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagService = /** @class */ (function () {
    function TagService(http) {
        this.http = http;
        this.tagList = [];
        this.table_name = 'tags';
        this.token = localStorage.getItem('token');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    TagService.prototype.getTagList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, { headers: this.header });
    };
    TagService.prototype.addNewTag = function (newTag) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, newTag, { headers: this.header });
    };
    TagService.prototype.editTag = function (editTag) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + editTag.id, editTag, { headers: this.header });
    };
    TagService.prototype.getTagName = function (tagId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + tagId, { headers: this.header });
    };
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/app/shared/services/template.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_config_model__ = __webpack_require__("./src/app/shared/modules/config.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateService = /** @class */ (function () {
    function TemplateService(http) {
        this.http = http;
        this.templateList = [];
        this.table_name = 'templates';
        this.token = localStorage.getItem('token');
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token });
    }
    TemplateService.prototype.getTemplateList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, { headers: this.header });
    };
    TemplateService.prototype.addNewTemplate = function (newTemplate) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name, newTemplate, { headers: this.header });
    };
    TemplateService.prototype.editTemplate = function (editTemplate) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__modules_config_model__["a" /* config */].baseURL + 'api/' + this.table_name + '/' + editTemplate.id, editTemplate, { headers: this.header });
    };
    TemplateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TemplateService);
    return TemplateService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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