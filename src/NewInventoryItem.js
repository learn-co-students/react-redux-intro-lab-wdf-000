import React from 'react';

export default function NewInventoryItem(props){
  return(
    <form id="newItemForm" onSubmit={props.onSubmit}>
      <label>Item Description:</label>
      <input id="description"/>
      <label>Item quantity: </label>
      <input id="quantity"/>
      <input type="submit" value="Add Item" />
    </form>
  )
}
