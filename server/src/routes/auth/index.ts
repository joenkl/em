import express from 'express';
import passport from 'passport';
import {
  googleLogin, authError, logout, facebookLogin,
} from './auth';

const router = express.Router();

router.get('/error', authError);
router.get('/logout', logout);

// Google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
    prompt: 'select_account',
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/error',
    session: false,
  }),
  googleLogin,
);

// Facebook
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/auth/error',
    session: false,
  }),
  facebookLogin,
);

export default router;
