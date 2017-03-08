import {combineReducers} from 'redux';
import inventoryItemsReducer from './inventoryItemsReducer'

const rootReducer = combineReducers({
  inventoryItems
})
 
export default rootReducer;