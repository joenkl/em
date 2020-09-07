// This file contains all the configuration for routes

// In browser routes:
export const HOME = '/'
export const TEST_PAGE = '/'


// TODO: use common path config for /em/api
// API routes:
export const TEST_API = 'em/api/test';

// User:
export const GET_USER_BY_COOKIE_TOKEN = '/em/api/user/getUserByCookieToken';


// Login links:
export const GOOGLE_LOGIN = 'em/api/auth/google';
export const FACEBOOK_LOGIN = 'em/api/auth/facebook';
export const LOGOUT = 'em/api/auth/logout';