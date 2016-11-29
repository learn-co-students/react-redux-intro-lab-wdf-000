import {combineReducers} from 'redux';
import inventoryItems from './inventoryItemsReducer';

const rootReducer = combineReducers({
  inventoryItems
})

export default rootReducer;
