import {
  Request, Response, NextFunction, ErrorRequestHandler,
} from 'express';
import { TEXT } from '../config';
import ClientError from '../controller/Error/ClientError';
import { ErrorObject } from '../utils/errorUtils';
import { isDev } from '../utils/configUtils';

export const unknownPath = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404).send(TEXT.MIDDLEWARES.ERROR.UNKNOWN_PATH);
  next();
};

export const errorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // // CSRF protection
  // if (err.code === 'EBADCSRFTOKEN') {
  //     res.status(403)
  //     res.send('form tampered with')
  // }
    if (isDev) {
      console.error(err);
    }
    
    if (err instanceof ClientError) {
      res.status(400);
      res.send(ErrorObject(err.message, err.name));
    } else {
      res.status(err.status || 500);
      res.send(ErrorObject(TEXT.ERROR.SERVER_ERROR, TEXT.ERROR.DEFAULT_ERROR_TYPE));
    }
    
  next();
};
