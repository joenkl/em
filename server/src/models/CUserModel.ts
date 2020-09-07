import { IUserModel } from "./IUser";

export class CUserModel implements IUserModel {
    
    private _id: string = "";
    get id() {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

    private _email: string = "";
    get email() {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }

    private _firstName: string = "";
    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }

    private _lastName: string = "";
    get lastName() {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }

    private _fullName: string = "";
    get fullName() {
        return this._fullName;
    }
    set fullName(value: string) {
        this._fullName = value;
    }

    private _image: string = "";
    get image() {
        return this._image;
    }
    set image(value: string) {
        this._image = value;
    }

    private _createdDate: Date = new Date();
    get createdDate() {
        return this._createdDate;
    }
    set createdDate(value: Date) {
        this._createdDate = value;
    }

    private _friends: IUserModel[] = [];
    get friends() {
        return this._friends;
    }
    set friends(value:  IUserModel[]) {
        this._friends = value;
    }

    private _googleID: string = ""
    get googleID() {
        return this._googleID;
    }
    set googleID(value: string) {
        this._googleID = value;
    }

    private _facebookID: string = ""
    get facebookID() {
        return this._facebookID;
    }
    set facebookID(value: string) {
        this._facebookID = value;
    }
}