const defItems = [
  {quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}
]

export function getInventoryItems(items = defItems){
  return{
    type: "GET_INVENTORY_LIST_ITEMS",
    payload : items
  }
}


export function addInventoryListItem(quantity, description) {
  var newItem = {quantity: quantity, description: description}
  return {
    type: "ADD_INVENTORY_LIST_ITEM",
    payload: newItem
  }
}
