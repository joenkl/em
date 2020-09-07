import express from 'express';
import { userInfo, add } from './user';

const router = express.Router();

router.get('/userInfo', userInfo);
router.get('/add', add);

export default router;
