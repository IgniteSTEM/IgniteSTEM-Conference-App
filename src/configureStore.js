import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const DEBUG = false;

const HIDDEN_ACTIONS = [];

const configureStore = () =>  {
  const middlewares = [thunk];

  if (DEBUG) {
    const logger = createLogger({
      predicate: (getState, action) => HIDDEN_ACTIONS.indexOf(action.type) === -1
    });

    middlewares.push(logger);
  }

  return createStore(
    reducer,
    applyMiddleware.apply(null, middlewares)
  );
};

export default configureStore;