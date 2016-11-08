export default function inventoryListItemReducer(state = [], action) {
  switch(action.type) {
    case 'GET_INVENTORY_LIST_ITEMS':
     return action.payload
    default: 
      return state;
  }
}