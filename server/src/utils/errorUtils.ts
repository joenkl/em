import * as _ from 'lodash';
import { TEXT } from '../config';
import ClientError from '../controller/Error/ClientError';

export const ThrowClientError = (message: string, err?: Error, name?: string) => {
  const error = new ClientError(message, err);
  error.name = name || TEXT.ERROR.DEFAULT_ERROR_TYPE;
  throw error;
};

export const ThrowClientMessage = (message: string, name?: string) => {
  const error = new ClientError(message);
  error.name = name || TEXT.ERROR.DEFAULT_ERROR_TYPE;
  throw error;
};

export const ErrorObject = (message, name) => {
  const error = new Error();
  error.message = message;
  error.name = name;
  return error;
};
