import { SAVE_USER_TOKEN, CLEAR_USER_TOKEN } from '../constants';

const initialState = {
  accessToken: null,
  refreshToken: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      }
    case CLEAR_USER_TOKEN:
      return initialState;
    default:
      return state
  }
}
