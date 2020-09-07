import axios from 'axios';
import { TEST_API } from '../config/routes';

export const fetchTestApi = () => {
  return axios.get(TEST_API);
};
