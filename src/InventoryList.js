import React from 'react';

export default function InventoryList(props){
  return(
    <ul>
      {props.inventoryItems.map((item,i) => {
        return <li key={i}>item: {item.description}, quantity: {item.quantity}</li>
      })}
    </ul>
  )
}
