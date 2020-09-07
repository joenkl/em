import './middlewares/passport';
import './middlewares/database';

import express from 'express';
import https from 'https';
// import crsf from 'csurf';
import { CONFIG } from './config';
import routes from './routes';
import { unknownPath, apiLimiter, errorHandler } from './middlewares';
import container from './middlewares/ioc';

const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const expressSanitized = require('express-sanitized');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

// eslint-disable-next-line import/export
const commonPath = '/em/api';
const app = express();
app.set('container', container);

app.use(cors());
app.use(helmet()); //
app.use(morgan('dev')); // log request information only for development
app.use(apiLimiter);
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
// Remove any keys in objects that begin with a $ sign or contain a .,
// from req.body, req.query or req.params
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(expressSanitized()); // Remove all escape character from req.body and req.query
app.use(cookieParser());
// app.use(csrf({ cookie: true })); https://www.npmjs.com/package/csurf

app.use(commonPath, routes);

app.use(unknownPath);
app.use(errorHandler);

https
  .createServer(CONFIG.SERVER.SSL_OPTIONS, app)
// eslint-disable-next-line no-console
  .listen(CONFIG.SERVER.PORT, () => console.log(`Server is running on port ${CONFIG.SERVER.PORT}`));
