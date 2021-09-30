import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import auth from '../ducks/auth';
import common from '../ducks/common';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const getPersistConfig = (key, blacklist) => {
  return {
    key: key,
    storage: AsyncStorage,
    blacklist: blacklist,
  };
};

const rootReducer = combineReducers({
  auth: persistReducer(getPersistConfig('auth', []), auth),
  common: persistReducer(getPersistConfig('common', []), common),
});

const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  applyMiddleware(thunkMiddleware),
);

const persistor = persistStore(store);

export {store, persistor};
