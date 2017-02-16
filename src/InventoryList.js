import React from 'react';

export default function InventoryList(props) {
  return(
    <ul>
    {props.inventoryItems.map((item, index) => {
      return <li key={index}>item: {item.description}, quantity: {item.quantity}</li>
    })}
    </ul>
  );
}


