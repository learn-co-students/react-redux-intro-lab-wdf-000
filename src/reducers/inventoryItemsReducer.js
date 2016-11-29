export default function inventoryItemsReducer(state = [], action) {
  switch(action.type) {
    case 'GET_INVENTORY_LIST_ITEMS':
      return action.payload;
    case 'ADD_INVENTORY_LIST_ITEM':
      let items = [...state, action.payload];
      return items;
    default:
    return state;
  }
}
