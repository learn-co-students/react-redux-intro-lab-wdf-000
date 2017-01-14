import {combineReducers} from 'redux';
import inventoryItemsReducer from './inventoryItemsReducer';

const rootReducer = combineReducers({
  // short hand property names
  inventoryItemsReducer
})

export default rootReducer;
