import express from 'express';
import { verifyJWTToken } from '../middlewares/jwt';
import auth from './auth';
import user from './user';
import ClientError from '../controller/Error/ClientError';

const router = express.Router();

router.use('/auth', auth);
router.use('/user', verifyJWTToken, user);

// TODO: remove the following router when we no longer need the test sample API
router.get('/test', (req, res) => {
  res.send({
    success: true,
  });
});

router.get('/error', (req, res) => {
  const error01: Error = new Error("Inner Inner Error");
  const error0: Error = new ClientError("Inner Error", error01);
  const error1: ClientError = new ClientError("Error", error0);
  const error: ClientError = new ClientError("Outer Error", error1);
  throw error;
});

export default router;
