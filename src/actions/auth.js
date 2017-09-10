import { SAVE_USER_TOKEN, CLEAR_USER_TOKEN } from '../constants';

export const saveUserData = (accessToken, refreshToken) => ({
  type: SAVE_USER_TOKEN,
  accessToken,
  refreshToken
});

export const clearUserData = () => ({
  type: CLEAR_USER_TOKEN
});
