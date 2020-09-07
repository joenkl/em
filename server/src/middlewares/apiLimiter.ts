const slowDown = require('express-slow-down'); // https://www.npmjs.com/package/express-slow-down
import { CONSTANT } from '../config';

export const apiLimiter = slowDown({
  windowMs: CONSTANT.MIDDLEWARES.API_LIMITER.WINDOW_MS,
  delayAfter: CONSTANT.MIDDLEWARES.API_LIMITER.DELAY_AFTER,
  maxDelayMs: CONSTANT.MIDDLEWARES.API_LIMITER.MAX_DELAY_MS,
});

export default apiLimiter;
