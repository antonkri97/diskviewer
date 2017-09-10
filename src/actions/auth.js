import { SAVE_USER_TOKEN, CLEAR_USER_TOKEN } from '../constants';
import { push }                              from 'react-router-redux'

const saveUserData = (accessToken, refreshToken) => ({
  type: SAVE_USER_TOKEN,
  accessToken,
  refreshToken
});

export const clearUserData = () => ({
  type: CLEAR_USER_TOKEN
});

export default () => async (dispatch) => {
  if (!document.location.href.includes('code=')) return;

  const code = /code=([^&]+)/.exec(document.location.href)[1];

  const clientId = 'da072d0fdb6e4b3990e43ab14c956d5b';
  const clientSecret = '1ea6417ec71e40acbfe030af0f6f3a71'

  try {
    const req = await fetch('https://oauth.yandex.ru/token', {
      method: 'POST',
      body: `grant_type=authorization_code&code=${code}&client_id=${clientId}&client_secret=${clientSecret}`
    });

    const data = await req.json();

    dispatch(saveUserData(data.access_token, data.refresh_token));
    dispatch(push('/disk'))

  } catch (err) {
    console.log(err)
  }
};
