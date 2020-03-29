import { createStore, compose, applyMiddleware } from 'redux';
import app, {rootEpic} from './reducers';
import { createEpicMiddleware } from 'redux-observable';


export default function configureStore() {

  const epicMiddleware = createEpicMiddleware()

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    app,
    {}, //initialState,
    // composeEnhancers(applyMiddleware(reduxPromise))
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store
}
