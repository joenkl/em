export const CONSTANT = {
  MIDDLEWARES: {
    API_LIMITER: {
      WINDOW_MS: 1 * 60 * 1000, // 1 MINUTES
      DELAY_AFTER: 100, // ALLOW 100 REQUESTS PER 1 MINUTES, THEN...
      MAX_DELAY_MS: {
        DELAYAFTER: 1,
        DELAYMS: 10000,
        MAXDELAYMS: 200000,
      },
    },
  },
};

export default CONSTANT;
