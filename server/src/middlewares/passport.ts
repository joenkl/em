const Google = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const passport = require('passport');
import { CONFIG } from '../config';
const GoogleStrategy = Google.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: CONFIG.PASSPORT.GOOGLE.CLIENT_ID,
      clientSecret: CONFIG.PASSPORT.GOOGLE.CLIENT_SECRET,
      callbackURL: CONFIG.PASSPORT.GOOGLE.CALLBACK_URL,
      proxy: true,
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      req[CONFIG.MW_REQ.OAUTH.GOOGLE_USER_PROFILE] = profile;
      done(null, profile);
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: CONFIG.PASSPORT.FACEBOOK.CLIENT_ID,
      clientSecret: CONFIG.PASSPORT.FACEBOOK.CLIENT_SECRET,
      callbackURL: CONFIG.PASSPORT.FACEBOOK.CALLBACK_URL,
      profileFields: [
        'id',
        'displayName',
        'photos',
        'emails',
        'first_name',
        'last_name',
      ],
      // https://developers.facebook.com/docs/graph-api/reference/v2.5/user
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      req[CONFIG.MW_REQ.OAUTH.FACEBOOK_USER_PROFILE] = profile;
      done(null, profile);
    },
  ),
);
