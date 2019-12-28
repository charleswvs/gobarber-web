import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store/index'; // store must be imported after Reactotron, or else there will be problems

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      {/* PersistGate onl loads components it wraps, when  it gets data from local storage */}
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={4000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
