import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from './store'; // store must be imported after Reactotron, or else there will be problems

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
