import { IUserModel } from "../../models/IUser";

export interface IThirdPartyAuth {
    login: (profile) => Promise<IUserModel>;
}
