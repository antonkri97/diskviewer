import { SAVE_USER_TOKEN } from '../constants';

const initialState = {
  accessToken: null,
  refreshToken: null
};

export default (state = initialState, action) => {
  if (action.type === SAVE_USER_TOKEN) {
    return {
      accessToken: action.accessToken,
      refreshToken: action.refreshToken
    };
  }

  return state;
}
