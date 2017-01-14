import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {getInventoryListItems, addInventoryListItem} from './actions/inventoryItemsActions'
import App from './App';

const store = configureStore();
store.dispatch(getInventoryListItems())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
