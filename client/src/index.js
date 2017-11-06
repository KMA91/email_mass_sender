// REDUX && RENDERERING ROOT COMP
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Provider will hook up redux to react with store.
// from react-redux library that deals with how to read changes from redux store
// anytime state is changed, provider will notify children components
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
// reduxThunk gives us direct access to "dispatch function" to manually dispatch an action from an action creater

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
