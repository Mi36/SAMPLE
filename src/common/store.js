import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import auth from '../ducks/auth';
import product from '../ducks/product';

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
  product: persistReducer(getPersistConfig('product', []), product),
});

const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  applyMiddleware(thunkMiddleware),
);

const persistor = persistStore(store);

export {store, persistor};
