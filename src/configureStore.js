import { createStore, compose, applyMiddleware } from 'redux';
import app from './reducers';
import createSagaMiddleware from 'redux-saga'
import dataSaga from './reducers/saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    app,
    {}, //initialState,
    // composeEnhancers(applyMiddleware(reduxPromise))
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(dataSaga)

  return store
}
