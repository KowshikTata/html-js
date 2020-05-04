export class Department
{
 private _departmentID:number;
 private _departmentName:string;


    constructor(departmentID: number, departmentName: string) {
        this._departmentID = departmentID;
        this._departmentName = departmentName;
    }

    get departmentID(): number {
        return this._departmentID;
    }

    set departmentID(value: number) {
        this._departmentID = value;
    }

    get departmentName(): string {
        return this._departmentName;
    }

    set departmentName(value: string) {
        this._departmentName = value;
    }
}
