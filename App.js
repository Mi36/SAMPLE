import React from 'react';
import Router from './src/common/router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const App = () => {
  return <Router />;
};

export default App;
