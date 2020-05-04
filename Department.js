"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(departmentID, departmentName) {
        this._departmentID = departmentID;
        this._departmentName = departmentName;
    }
    Object.defineProperty(Department.prototype, "departmentID", {
        get: function () {
            return this._departmentID;
        },
        set: function (value) {
            this._departmentID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "departmentName", {
        get: function () {
            return this._departmentName;
        },
        set: function (value) {
            this._departmentName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Department;
}());
exports.Department = Department;
