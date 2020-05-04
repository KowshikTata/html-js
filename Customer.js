"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this.firstName = theFirst;
        this.lastName = theSecond;
    }
    return Customer;
}());
exports.Customer = Customer;
var myCustomer = new Customer("Tata", "Kowshik");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
