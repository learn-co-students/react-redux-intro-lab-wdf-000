# React + Redux Lab: Flatiron Bakery

## Objectives

* Practice using Redux to retreive and display data from application state
* Implement the container component pattern
* Use Redux tools to build a feature in which a user can add an item to state.

## Instructions

#### Getting Started

Clone down this lab and run `npm install`.

Run the test suite via `npm test`. `mocha.run()` will not work.

#### Intro

You were just hired by the fast-growing international baking conglomerate, Flatiron Bakery. You're first assignment is to work on this simple React + Redux inventory application.The app should have the following features:

* Display a list of existing inventory items. The list should show each item's quantity and description
* Provide a simple form for a user to add a new item to the inventory

#### Step 1:

* First, you'll need to configure the Redux store and pass it to your component tree via the Redux `<Provider>`
* Then, build a root reducer using the `combineReducers` function. `combineReducers` should take in an `inventoryItemsReducer`, which you will build.
* Your `inventoryItemsReducer` should know how to respond to the following actions:
  * `"GET_INVENTORY_LIST_ITEMS"`
  * `"ADD_INVENTORY_LIST_ITEM"`
* Build two action creator functions
  * The `getInventoryItems` action creator should return an object that has a payload of the following items:

```js
[
  {quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}
]
```
  * The `addInventoryListItem` action creator should take in an argument of a quantity and description, and use that info to create a new inventory item object.

* Once you're action creators and reducer are in place, build out the `App` component and the `InventoryList` and `NewInventoryItem` components.
* The `App` component should be connected to the store via the `connect` function. It should use `mapStateToProps` to get the inventory items out of state and `mapDispatchToProps` to gain access to your action creator functions.
* `App` is a container component. It should pass the inventory items down to `InventoryList` to be rendered as a list.
* We've hardcoded a few items items to show up on the inventory list. You're need to dispatch the `"GET_INVENTORY_LIST_ITEMS"` action as part of `App`'s `componentWillMount`.
* `App` should contain `NewInventoryItem`, which is a form for a new inventory item. `NewInventoryItem` should use a prop as a callback function to tell `App` to dispatch the `"ADD_INVENTORY_LIST_ITEM"` action when the user submits the form.
