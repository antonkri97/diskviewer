import {
  DIRECTORY_REQUEST_START,
  DIRECTORY_REQUEST_SUCCESSFULL,
  DIRECTORY_REQUEST_FAIL
} from '../constants';

import { push } from 'react-router-redux';

const directoryRequestStart = () => ({
  type: DIRECTORY_REQUEST_START,
});

const directoryRequestSuccessfull = (resources) => ({
  type: DIRECTORY_REQUEST_SUCCESSFULL,
  resources
});

const directoryRequestFail = (error) => ({
  type: DIRECTORY_REQUEST_FAIL,
  error
});

export const getResources = (path) => async (dispatch, getState) => {
  const { accessToken } = getState().auth;

  console.log(`current path ______ ${path}`);

  if (!accessToken) {
    dispatch(push('/'));
    return;
  }

  dispatch(directoryRequestStart());

  const headers = new Headers()

  headers.set('Authorization', `OAuth ${accessToken}`)

  const req = await fetch(`https://cloud-api.yandex.net/v1/disk/resources?path=${path}`, {
    headers
  })

  if (req.ok) {
    dispatch(directoryRequestSuccessfull(await req.json()))
    dispatch(push(`/disk${path.substr(5)}`))
  } else {
    dispatch(directoryRequestFail(req.statusText))
  }

}