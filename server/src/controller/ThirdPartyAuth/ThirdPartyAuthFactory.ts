import { IThirdPartyAuth } from "./IThirdPartyAuth";
import { FacebookAuth } from "./FacebookAuth";
import { GoogleAuth } from "./GoogleAuth";
import { IUser } from "../../models/IUser";

export interface IThirdPartyAuthFactory {
    create: (type: ThirdPartyAuthType) => IThirdPartyAuth; 
}

export enum ThirdPartyAuthType {
    GOOGLE = 'GOOGLE',
    FACEBOOK = 'FACEBOOK',
}

export class CThirdPartyAuthFactory implements IThirdPartyAuthFactory {

    private IUser: IUser; 

    constructor(iUser: IUser) {
        this.IUser = iUser;
    }
    
    create = (type: ThirdPartyAuthType): IThirdPartyAuth => {
        switch (type) {
            case ThirdPartyAuthType.FACEBOOK:
                return new FacebookAuth(this.IUser);
            case ThirdPartyAuthType.GOOGLE:
                return new GoogleAuth(this.IUser);
            default:
              throw new Error(`${type} is not supported`);
          }
    }
}
