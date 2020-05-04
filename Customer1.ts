class Customer1
{
    private _firstName:string;
    private _lastName:string;

    constructor(private theFirst:string,private theSecond:string) {
        this._firstName=theFirst;
        this._lastName=theSecond;
    }


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer=new Customer1("Tata","Kowshik");
//by constructor
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);