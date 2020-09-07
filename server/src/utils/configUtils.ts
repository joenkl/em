import { CONFIG } from '../config';

export const isDev = (): boolean => CONFIG.SERVER.ENV === 'DEVELOPMENT';