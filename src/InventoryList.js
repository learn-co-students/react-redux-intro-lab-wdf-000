import React from 'react';

const InventoryList = (props) => {
  return (
    <ul>
    { props.inventoryItems.map((item, i)=>{
        return (<li key={i}>item: {item.description}, quantity: {item.quantity}</li>)
      })
    }
    </ul>
  )
}

export default InventoryList;