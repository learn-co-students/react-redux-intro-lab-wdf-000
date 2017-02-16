import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './stores/configureStore'
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('container')
);


