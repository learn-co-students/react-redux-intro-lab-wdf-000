
export function getInventoryListItems(){
 return {type: 'GET_INVENTORY_LIST_ITEMS', payload: [
    {quantity: '3lbs', description: "flour"},
    {quantity: "2 dozen", description: "eggs"},
    {quantity: '2lbs', description: "sugar"}
    ]
    }
}

export function addInventoryListItem(item1, item2){
  const newItem = {quantity: item1, description: item2}
  return {type: 'ADD_INVENTORY_LIST_ITEM',
    payload: newItem
  }
}
