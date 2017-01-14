import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getInventoryListItems, addInventoryListItem} from './actions/inventoryItemsActions';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem'

class App extends Component {

  addItem(ev){
    ev.preventDefault()
    let description = ev.target.children.name.value;
    let quantity = ev.target.children.quantity.value;
    addInventoryListItem(quantity, description);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.inventoryItems}/>
          <NewInventoryItem onChange={this.addItem.bind(this)}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {inventoryItems: state}
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
