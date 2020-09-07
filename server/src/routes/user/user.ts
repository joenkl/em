const _ = require('lodash');
const mongoose = require('mongoose');
import { Request, Response, NextFunction } from 'express';
import { getCookieInfo, getDIContainer } from '../../utils/requestUtils';
import { ICookieModel } from '../../models/Cookie/ICookie';
import { IUserModel, IUser } from '../../models/IUser'
import UserModel from '../../models/user';
import { TEXT } from '../../config';
import ClientError from '../../controller/Error/ClientError';

const getUserRepo = (req: Request): IUser => {
  const container = getDIContainer(req);
  return container.User;
}  

// TODO: This is for testing purpose
export const add = async (req: Request , res: Response ) => {
  const user = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    name: {
      first: 'Tri',
      last: 'Dao',
    },
    email: 'tri.developer@gmail.com',
  });

  try {
    await user.save();
    res.send('Successfully add the user');
  } catch (err) {
    res.send(err);
  }
};

export const userInfo = async (req: Request, res: Response, next: NextFunction) => {
  
  try  {
    const cookieInfo: ICookieModel = getCookieInfo(req);
    const userInfo: IUserModel = await getUserRepo(req).findUserByID(cookieInfo.id);
    res.json({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName
    });
  }
  catch(ex) {
    next(new ClientError(TEXT.ERROR.ROUTE.USER.UNABLE_FIND_USER_INFO, ex));
  }
};
