import inventoryItemsReducer from '../src/reducers/inventoryItemsReducer'

describe('inventory items reducer', () => {
  it('should return the initial state', () => {
    expect(
      inventoryItemsReducer(undefined, {})
    ).toEqual([])
  })

  it('should handle GET_INVENTORY_LIST_ITEMS', () => {
    const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]
    expect(
      inventoryItemsReducer([], {
        type: 'GET_INVENTORY_LIST_ITEMS',
        payload:  items
      })
    ).toEqual(items)
  })

  it('should handle ADD_INVENTORY_LIST_ITEM', () => {
    const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]
    expect(
      inventoryItemsReducer(items, {
        type: 'ADD_INVENTORY_LIST_ITEM',
        payload: {quantity: '1lb', description: 'baking soda'}
      })
    ).toEqual([...items, {quantity: '1lb', description: 'baking soda'}])
  })
})
