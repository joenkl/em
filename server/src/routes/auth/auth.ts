import _ from 'lodash';
import { createJWTToken } from '../../middlewares/jwt';
import { CONFIG, TEXT } from '../../config';
import { IThirdPartyAuthFactory, ThirdPartyAuthType } from '../../controller/ThirdPartyAuth/ThirdPartyAuthFactory';
import { IThirdPartyAuth } from '../../controller/ThirdPartyAuth/IThirdPartyAuth';
import { IUserModel } from '../../models/IUser';
import { ThrowClientError, ThrowClientMessage } from '../../utils/errorUtils';
import { getDIContainer } from '../../utils/requestUtils';

const ACCOUNT_TYPE = {
  GOOGLE: 'Google',
  FACEBOOK: 'Facebook',
};

// #region Helper Function
const loginSuccess = (res, user) => {
  const token = createJWTToken({
    id: user.id,
  });
  res.cookie(
    CONFIG.MW_REQ.COOKIE.ACCESS_TOKEN_NAME,
    token,
    CONFIG.COOKIE.COOKIE_SETTING,
  );
  res.redirect('/');
};

const getProfile = (accountType, req, res) => {
  let profile = undefined;

  switch (accountType) {
    case ACCOUNT_TYPE.GOOGLE:
      profile = _.get(req, CONFIG.MW_REQ.OAUTH.GOOGLE_USER_PROFILE, undefined);
      break;
    case ACCOUNT_TYPE.FACEBOOK:
      profile = _.get(
        req,
        CONFIG.MW_REQ.OAUTH.FACEBOOK_USER_PROFILE,
        undefined,
      );
      break;
    default:
      throw new Error(`${accountType} is not supported`);
  }

  if (profile === undefined) {
    throw new Error('Unable able to get a profile');
  }

  return profile;
};
// #region end


// TODO: This is for testing purpose
export const logout = (req, res) => {
  res.clearCookie(CONFIG.MW_REQ.COOKIE.ACCESS_TOKEN_NAME);
  res.status(200);
  res.redirect('/');
};

export const googleLogin = async (req, res) => {
  const profile = getProfile(ACCOUNT_TYPE.GOOGLE, req, res);
  try {
    const container = getDIContainer(req);
    const ThirdPartyAuthFactory: IThirdPartyAuthFactory = container.ThirdPartyAuthFactory;
    const ThirdPartyAuth: IThirdPartyAuth = ThirdPartyAuthFactory.create(ThirdPartyAuthType.GOOGLE);
    
    const user: IUserModel = await ThirdPartyAuth.login(profile);

    loginSuccess(res, user);
  } catch (err) {
    ThrowClientError(TEXT.ERROR.AUTH.GOOGLE_LOGIN_ERROR, err);
  }
};

export const facebookLogin = async (req, res) => {
  const profile = getProfile(ACCOUNT_TYPE.FACEBOOK, req, res);
  try {
    const container = getDIContainer(req);
    const ThirdPartyAuthFactory: IThirdPartyAuthFactory = container.ThirdPartyAuthFactory;
    const ThirdPartyAuth: IThirdPartyAuth = ThirdPartyAuthFactory.create(ThirdPartyAuthType.FACEBOOK);
    
    const user: IUserModel = await ThirdPartyAuth.login(profile);

    loginSuccess(res, user);
  } catch (err) {
    ThrowClientError(TEXT.ERROR.AUTH.GOOGLE_LOGIN_ERROR, err);
  }
};

export const authError = (req, res) => {
  ThrowClientMessage(TEXT.ERROR.AUTH.AUTHENTICATION_ERROR);
};
