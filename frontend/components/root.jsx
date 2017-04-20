import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Welcome from './welcome/welcome';
import ProfileMain from './profile/profile-main';
import ProfileEdit from './profile/profile-edit';

const _redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/');
  }
}

const Root = ({ store }) => (
  <Provider store={ store } >
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component = { Welcome } />
        <Route path='welcome' component={ Welcome } />
        <Route path='users/:userId' component={ ProfileMain } />
        <Route path='users/:userId/edit' component={ ProfileEdit } />
      </Route>
    </Router>
  </Provider>
)


export default Root;
