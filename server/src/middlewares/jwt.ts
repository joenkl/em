const jwt = require('jsonwebtoken');
const _ = require('lodash');
import { CONFIG, TEXT } from '../config';
import { ICookieModel } from '../models/Cookie/ICookie';

export const createJWTToken = (payload: ICookieModel) => jwt.sign(payload, CONFIG.JWT.SECRET_KEY, {
  expiresIn: CONFIG.JWT.EXPIRES_IN,
  algorithm: CONFIG.JWT.ALGORITHM,
});

export const verifyJWTToken = (req, res, next) => {
  try {
    const accessToken = req.cookies[CONFIG.MW_REQ.COOKIE.ACCESS_TOKEN_NAME];
    const user = jwt.verify(accessToken, CONFIG.JWT.SECRET_KEY, {
      algorithm: CONFIG.JWT.ALGORITHM,
    });
    req[CONFIG.MW_REQ.JWT.USER_INFO] = user;
    next();
  } catch (err) {
    res.status(401).json({
      message: TEXT.MIDDLEWARES.JWT.INVALID_TOKEN,
    });
  }
};
