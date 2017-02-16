import React from 'react';

export default function NewInventoryItem(props) {

  function submitHandler(ev) {
    ev.preventDefault();
    const description = event.target.children[1].value;
    const quantity = event.target.children[3].value;
    props.createItem(description, quantity);

  }

  return(
    <form onSubmit={submitHandler}>
      <label>Description: </label><input type="text" />
      <label>Quantity: </label><input type="text" />
      <input type="submit" value="Submit" />
    </form>
  );
}