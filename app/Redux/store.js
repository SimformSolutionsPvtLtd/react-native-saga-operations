import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './rootReducer';
import rootSaga from '../Sagas';

const persistConfig = {
  key: '@sagaOperations',
  storage: AsyncStorage,
  whitelist: ['test', 'auth'],
};

const SagaMiddleware = createSagaMiddleware({
  sagaMonitor: console.tron.createSagaMonitor(),
});

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  compose(
    applyMiddleware(SagaMiddleware),
    console.tron.createEnhancer(),
  ),
);
SagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default store;
