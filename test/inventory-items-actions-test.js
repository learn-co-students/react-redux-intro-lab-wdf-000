import * as actions from '../src/actions/inventoryItemsActions'

describe('actions', () => {
  it('should create an action to get all inventory items', () => {
    const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]
    const expectedAction = {
      type: 'GET_INVENTORY_LIST_ITEMS',
      payload: items
    }
    expect(actions.getInventoryListItems()).toEqual(expectedAction)
  })

  it('should create an action to add a new inventory item', () => {
    const newItem = {quantity: '2 quarts', description: 'milk'}
    const expectedAction = {
      type: 'ADD_INVENTORY_LIST_ITEM', 
      payload: newItem
    }
    expect(actions.addInventoryListItem('2 quarts', 'milk')).toEqual(expectedAction)
  })
})