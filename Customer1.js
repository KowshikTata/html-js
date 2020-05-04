var Customer1 = /** @class */ (function () {
    function Customer1(theFirst, theSecond) {
        this.theFirst = theFirst;
        this.theSecond = theSecond;
        this._firstName = theFirst;
        this._lastName = theSecond;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer1;
}());
var myCustomer = new Customer1("Tata", "Kowshik");
//by constructor
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
