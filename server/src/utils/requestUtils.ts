// FUNCTION THAT CAN BE USE EVERYWHERE
import * as _ from 'lodash';
import { Request } from 'express';
import { CONFIG, TEXT } from '../config';
import { ICookieModel } from '../models/Cookie/ICookie';

export const getCookieInfo = (req: Request): ICookieModel => {
    const cookieInfo: ICookieModel | undefined =  _.get(req, CONFIG.MW_REQ.JWT.USER_INFO, undefined);
    if (cookieInfo === undefined) {
        throw new Error(TEXT.ERROR.NO_COOKIES);
    }
    return cookieInfo;
}

export const getDIContainer = (req: Request): any => {
    return req.app.get('container');
}