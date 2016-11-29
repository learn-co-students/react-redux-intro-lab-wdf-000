import React from 'react';

export default function NewInventoryItem(props){
  return(
    <form onSubmit={props.onSubmit}>
      <label>Item Description:</label>
      <input />
      <label>Item quantity: </label>
      <input />
      <input type="submit" value="Add Item" />
    </form>
  )
}
