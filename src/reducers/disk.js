import {
  DIRECTORY_REQUEST_START,
  DIRECTORY_REQUEST_SUCCESSFULL,
  DIRECTORY_REQUEST_FAIL
} from '../constants';

const initialState = {
  resources: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DIRECTORY_REQUEST_START:
      return Object.assign({}, state, { isLoading: true });
    case DIRECTORY_REQUEST_SUCCESSFULL:
      return Object.assign({}, state, { isLoading: false, resources: action.resources })
    case DIRECTORY_REQUEST_FAIL:
      return Object.assign({}, state, { isLoading: false, error: action.error });
    default:
      return state;
  }
}
