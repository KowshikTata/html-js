import {Department} from "./Department";

export class Employee {
    private _employeeID:number;
    private _firstName:string;
    private _lastName:string;
    private _email:string;
    private _department:Department;


    get employeeID(): number {
        return this._employeeID;
    }

    set employeeID(value: number) {
        this._employeeID = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get department(): Department {
        return this._department;
    }

    set department(value: Department) {
        this._department = value;
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


    constructor(employeeID: number, firstName: string, lastName: string, email: string, department: Department) {
        this._employeeID = employeeID;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._department = department;
    }
}


