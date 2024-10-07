import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/index';
import './index.css';
import App from './App.js';
import { StyledEngineProvider } from '@mui/material/styles';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>
);
