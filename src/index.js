import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './stores/configureStore';
import { getInventoryListItems } from './actions/inventoryItemsActions'
import { Provider } from 'react-redux';

const store = configureStore();
store.dispatch(getInventoryListItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
