import React from 'react';
// import Auth from '../components/Auth/index';

// const clientId = 'da072d0fdb6e4b3990e43ab14c956d5b'
// const clientSecret = '1ea6417ec71e40acbfe030af0f6f3a71'

// const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}`;

// if (document.location.href.includes('code=')) {
//   const code = document.location.href.substr(28);

//   fetch('https://oauth.yandex.ru/token', {
//     method: 'POST',
//     body: `grant_type=authorization_code&code=${code}&client_id=${clientId}&client_secret=${clientSecret}`,
//   }).then((res) => console.log(res.ok)).catch(err => console.log(err));
// }

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

export default App;
