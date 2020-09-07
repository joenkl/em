import { IThirdPartyAuth } from "./IThirdPartyAuth";
import { IUser, IUserModel } from "../../models/IUser";
import { CUserModel } from "../../models/CUserModel";
import _ from 'lodash';

export class GoogleAuth implements IThirdPartyAuth {
    private IUser: IUser; 

    constructor(iUser: IUser) {
        this.IUser = iUser;
    }

    login = async (profile): Promise<IUserModel> => {
        const authID: string = _.get(profile, 'id', '');
        let user: IUserModel | undefined = await this.IUser.findUserByGoogleID(authID);
        if (!user) {
            user = await this.IUser.findUserByEmail(_.get(profile, 'emails[0].value', ''));

            if (!user) {
                let newUser: IUserModel = new CUserModel();
                newUser.firstName =  _.get(profile, 'name.givenName', '');
                newUser.lastName = _.get(profile, 'name.familyName', '');
                newUser.email = _.get(profile, 'emails[0].value', '');
                newUser.image = _.get(profile, 'photos[0].value', '');
                newUser.googleID = authID;  

                user = await this.IUser.saveUser(newUser);
            } 
            else {
                user.googleID = authID;
                user = await this.IUser.saveUser(user);
            }
        }

        return user;
    }
}