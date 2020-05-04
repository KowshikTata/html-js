export class Customer
{
    firstName:string;
    lastName:string;

    constructor(theFirst:string,theSecond:string) {
        this.firstName=theFirst;
        this.lastName=theSecond;
    }


}

let myCustomer=new Customer("Tata","Kowshik");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);