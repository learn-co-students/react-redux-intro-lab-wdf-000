import React from 'react'

const NewInventoryItem = (props) => {
  return(
    <form onSubmit={props.onChange}>
      <label id="name">Item Name:</label>
       <input />
      <label id="quantity">Item Quantity</label>
       <input />
      <input type="submit" value="Add Item"/>
    </form>
  )
}

export default NewInventoryItem
