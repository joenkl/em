export interface IUserModel {
    id: string;
    email: string;

    firstName: string;
    lastName: string;
    fullName: string;
    
    image: string;
    createdDate: Date;
    friends: IUserModel[];

    googleID: string;
    facebookID: string;
}

export interface IUser {
    findUserByID: (id: string) => Promise<IUserModel>;
    findUserByEmail: (email: string) => Promise<IUserModel | undefined>;
    findUserByGoogleID: (googleID: string) => Promise<IUserModel | undefined>;
    findUserByFacebookID: (facebookID: string) => Promise<IUserModel | undefined>;
    saveUser: (user: IUserModel) => Promise<IUserModel>; 
}