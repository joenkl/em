import axios from 'axios';
import { GET_USER_BY_COOKIE_TOKEN } from '../config/routes';

export const getUserByCookieToken = () => axios.get(GET_USER_BY_COOKIE_TOKEN);
