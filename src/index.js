import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// needed dependancies
import { applyMiddleware, createStore } from 'redux';// applyMiddleware from redux
import thunk from 'redux-thunk';// thunk from redux-thunk
import logger from 'redux-logger';// logger from redux-logger
import combineReducers from './reducers';// rootReducer from ./reducers

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
