import dotnet from 'dotenv';
import fs from 'fs';
import path from 'path';

dotnet.config();

export const CONFIG = {
  SERVER: {
    PORT: process.env.SERVER_PORT || 5000,
    ENV: process.env.SERVER_ENV || 'DEVELOPMENT',
    SSL_OPTIONS: {
      key: fs.readFileSync(`${path.resolve()}/config/cert/server.key`),
      cert: fs.readFileSync(`${path.resolve()}/config/cert/server.cert`),
    },
  },
  DATABASE: {
    MONGO_ATLAS: {
      HOST: process.env.MONGO_ATLAS_HOST || 'localhost',
      DB_NAME: process.env.MONGO_ATLAS_DB_NAME || 'db',
      USER: process.env.MONGO_ATLAS_USER || 'user',
      PASS: process.env.MONGO_ATLAS_PASS || 'pass',
    },
  },
  COOKIE: {
    COOKIE_SETTING: {
      httpOnly: true,
      sameSite: true,
      // signed: true,
      // secure: true
    },
  },
  JWT: {
    SECRET_KEY: process.env.JWT_SECRET_KEY || 'EEsDjH33K&2d',
    EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
    ALGORITHM: process.env.JWT_ALGORITHM || 'HS256',
  },
  PASSPORT: {
    GOOGLE: {
      CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    },
    FACEBOOK: {
      CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
      CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
      CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL,
    },
  },
  MW_REQ: {
    OAUTH: {
      GOOGLE_USER_PROFILE: 'google_user_profile',
      FACEBOOK_USER_PROFILE: 'facebook_user_profile',
    },
    COOKIE: {
      ACCESS_TOKEN_NAME: 'access_token',
    },
    JWT: {
      USER_INFO: 'user_info',
    },
  },
};

export default CONFIG;
