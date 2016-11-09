export function getInventoryListItems() {
  const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]
  return {type: 'GET_INVENTORY_LIST_ITEMS', payload: items}
}

export function addInventoryListItem(quantity, description) {
  const newItem = {quantity: quantity, description: description}
  return {type: 'ADD_INVENTORY_LIST_ITEM', payload: newItem}
}