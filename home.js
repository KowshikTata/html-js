"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Department_1 = require("./Department");
var myDept = new Department_1.Department(11, "Development");
var emp = new Employee_1.Employee(1, "Tata", "Kowshik", "tata@gmail.com", myDept);
console.log(emp.firstName);
console.log(emp.lastName);
console.log(emp.email);
console.log(emp.employeeID);
console.log(emp.department.departmentID);
console.log(emp.department.departmentName);