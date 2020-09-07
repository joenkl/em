import { IUser, IUserModel } from "./IUser";
import UserModel from "./user";
import { CUserModel } from "./CUserModel";
const mongoose = require('mongoose');
const Validator = require('validator');

export class CUserMongo implements IUser {
    findUserByEmail = async (email: string): Promise<IUserModel | undefined> => {
        if (email === undefined || !Validator.isEmail(email)) {
            return undefined;
        }

        const user = await UserModel.findOne({
            email,
        });
        return this.mapUserMongoToIUserModel(user);
    };

    findUserByGoogleID = async (googleID: string): Promise<IUserModel | undefined> => {
        if (googleID === undefined || googleID.trim().length === 0) {
            return undefined;
        }

        const user = await UserModel.findOne({
            'auth.googleID': googleID,
        });

        return this.mapUserMongoToIUserModel(user);    
    }

    
    findUserByFacebookID = async (facebookID: string): Promise<IUserModel | undefined> => {
        if (facebookID === undefined || facebookID.trim().length === 0) {
            return undefined;
        }

        const user = await UserModel.findOne({
            'auth.facebookID' : facebookID,
        });

        return this.mapUserMongoToIUserModel(user);
    }

    findUserByID = async (id: string): Promise<IUserModel> => {
        if (id === undefined || id.trim().length === 0) {
            throw new Error("Invalid ID");
        }

        const userInfo = await UserModel.findOne({
            _id: id,
        });

        return this.mapUserMongoToIUserModel(userInfo);
    }

    saveUser = async (iUser: IUserModel): Promise<IUserModel> => {
        
        if (iUser.id === undefined || iUser.id.trim().length === 0) {
            iUser.id = new mongoose.Types.ObjectId(); 
            iUser.createdDate = new Date(Date.now());
        }
        
        const user = this.mapIUserModelToUserModel(iUser);
        await user.save();
        return iUser;
    }

    private mapUserMongoToIUserModel = (user): IUserModel => {
        const iUser: IUserModel = new CUserModel();
        iUser.id = user._id;
        iUser.email = user.email;
        iUser.firstName = user.name.first;
        iUser.lastName = user.name.last;
        iUser.image = user.image;
        iUser.createdDate = user.created_date;
        iUser.friends = user.friends;
        iUser.googleID = user.auth.googleID;
        iUser.facebookID = user.auth.facebookID;

        return iUser;
    }

    private mapIUserModelToUserModel = (iUser: IUserModel): any => {
        const user = new UserModel();
        user._id = iUser.id;
        user.email = iUser.email;
        user.name.first = iUser.firstName;
        user.name.last = iUser.lastName;
        user.image = iUser.image;
        user.created_date = iUser.createdDate;
        user.friends = iUser.friends;
        user.auth.googleID = iUser.googleID;
        user.auth.facebookID = iUser.facebookID;

        return iUser;
    }
}

