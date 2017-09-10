import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(browserHistory), logger));

const history = syncHistoryWithStore(browserHistory, store)

const component = (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
registerServiceWorker();
