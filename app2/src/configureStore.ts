import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
