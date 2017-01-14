import React from 'react';

const InventoryList = (props) => {
  return (
    <ul>
      {props.items.map((item, i) => {
        return <li key={i}>{item.description}, quantity: {item.quantity}</li>
      })}
    </ul>
  )
}

export default InventoryList;
