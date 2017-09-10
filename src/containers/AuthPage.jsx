import Auth from '../components/Auth';
import { connect } from 'react-redux';
import { saveUserData } from '../actions/auth'
import { push } from 'react-router-redux'

const clientId = 'da072d0fdb6e4b3990e43ab14c956d5b';
const clientSecret = '1ea6417ec71e40acbfe030af0f6f3a71'

const onRedirect = () => {
  // if (!document.location.href.includes('code=')) {
  document.location = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}`
  // }
}

const onAuth = dispatch => async () => {
  if (!document.location.href.includes('code=')) return;

  const code = /code=([^&]+)/.exec(document.location.href)[1];

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

const mapDispatchToProps = dispatch => ({
  onAuth: onAuth(dispatch),
  onRedirect: () => onRedirect()
})

export default connect(null, mapDispatchToProps)(Auth);
