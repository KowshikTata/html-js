import {Employee} from "./Employee"
import {Department} from "./Department";
let myDept=new Department(11,"Development");
let emp=new Employee(1,"Tata","Kowshik","tata@gmail.com",myDept);
console.log(emp.firstName);
console.log(emp.lastName);
console.log(emp.email);
console.log(emp.employeeID);
console.log(emp.department.departmentID);
console.log(emp.department.departmentName);