import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer, creaturesReducer, planetsReducer } from 'store/reducers';

export const rootReducer = combineReducers({
  appState: appReducer,
  creaturesState: creaturesReducer,
  planetsState: planetsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
