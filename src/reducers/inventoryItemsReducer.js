const defItems = [
  {quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}
]

export default function inventoryItemsReducer(state = defItems, action){
  var clone = state.slice()
  switch (action.type) {
    case "GET_INVENTORY_LIST_ITEMS":
        return action.payload
    case "ADD_INVENTORY_LIST_ITEM":
        return [...clone, action.payload]
    default:
      return state
  }
}
