import { createStore, compose, applyMiddleware } from 'redux';
import app from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    app,
    {}, //initialState,
    // composeEnhancers(applyMiddleware(reduxPromise))
    composeEnhancers(applyMiddleware(promiseMiddleware))
  );

  return store
}
