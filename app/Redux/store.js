import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from '../Sagas';

const SagaMiddleware = createSagaMiddleware({
  sagaMonitor: console.tron.createSagaMonitor(),
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(SagaMiddleware),
    console.tron.createEnhancer(),
  ),
);
SagaMiddleware.run(rootSaga);

export default store;
