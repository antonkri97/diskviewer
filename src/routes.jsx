import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import App                   from './containers/App';
import Auth                  from './containers/AuthPage';
import Disk                  from './containers/DiskPage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Auth} />
    <Route path='/disk(/**)' component={Disk} />
  </Route>
);
