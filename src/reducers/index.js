import {combineReducers} from 'redux';
import inventoryListItems from './inventoryItemsReducer';

const rootReducer = combineReducers({
  // short hand property names
  inventoryListItems
})

export default rootReducer;