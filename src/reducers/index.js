import {combineReducers} from 'redux';
import inventoryListItems from './inventoryItemsReducer';

const rootReducer = combineReducers({
  inventoryListItems
})

export default rootReducer;
