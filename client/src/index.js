import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {BrowserRouter, Link} from 'react-router-dom'
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';




export const store = createStore(rootReducer, composeWithDevTools())



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);


