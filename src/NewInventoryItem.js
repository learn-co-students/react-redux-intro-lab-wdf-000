import React from 'react';

const NewInventoryItem = (props) => {
  return (
    <form onSubmit = {props.onSubmission}>
      <input type="text" name = "quantity" />
      <input type="text" name = "description" />
      <input type="submit" name = "Submit"/>
    </form>
  )
}

export default NewInventoryItem;
