export const TEXT = {
  MIDDLEWARES: {
    ERROR: {
      UNKNOWN_PATH: "Sorry can't find that!",
      SERVER_ERROR: 'Oh No. Something happen!',
    },
    JWT: {
      INVALID_TOKEN: 'Unable to verify the token',
      INVALID_COOKIE: 'Unable to find the token in cookie',
    },
  },
  MODELS: {
    USER: {
      EMAIL_IS_REQUIRED: 'Email is required',
      EMAIL_IS_INVALID: 'Email is invalid',
    },
  },
  ERROR: {
    UNKNOWN_PATH: "Sorry can't find that!",
    SERVER_ERROR: 'Oh no. Something happen!',
    DEFAULT_ERROR_TYPE: 'ERROR',
    NO_COOKIES: "Request doesn't contain any cookie",
    AUTH: {
      FACEBOOK_LOGIN_ERROR: 'Unable to Login Facebook',
      GOOGLE_LOGIN_ERROR: 'Unable to Login Google',
      AUTHENTICATION_ERROR: 'Unable to authenticate the login info',
    },
    ROUTE: {
      USER: {
        UNABLE_FIND_USER_INFO: 'Unable to find user info',
      }
    }
  },
};

export default TEXT;
