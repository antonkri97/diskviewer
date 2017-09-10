import Auth        from '../components/Auth';
import { connect } from 'react-redux';
import auth        from '../actions/auth';

const clientId = 'da072d0fdb6e4b3990e43ab14c956d5b';

const mapDispatchToProps = dispatch => ({
  onAuth: () => dispatch(auth()),
  onRedirect: () => document.location = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}`
})

export default connect(null, mapDispatchToProps)(Auth);
