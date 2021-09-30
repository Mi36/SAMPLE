import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './src/common/router';
import {persistor, store} from './src/common/store';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
