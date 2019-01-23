import thunk from 'redux-thunk';

import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

// Reducers
import appReducers from './reducers';

/* eslint-disable no-underscore-dangle */
// See: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const combinedReducers = combineReducers({
  ...appReducers
});

const rootReducer = (state, action) => combinedReducers(state, action);

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk)
  )
);

export default store;
