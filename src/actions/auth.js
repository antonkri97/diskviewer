import { SAVE_USER_TOKEN } from '../constants';

export const saveUserData = (accessToken, refreshToken) => ({
  type: SAVE_USER_TOKEN,
  accessToken,
  refreshToken
});
