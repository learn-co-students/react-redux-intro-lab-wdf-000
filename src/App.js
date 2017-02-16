import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/inventoryItemsActions';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';


function mapStateToProps(state) {
  return {inventoryListItems: state.inventoryListItems}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


class App extends Component {
  constructor(props) {
    super(props)
    this.handleCreate = this.handleCreate.bind(this);

  }

  handleCreate(desc, quant) {
    this.props.actions.addInventoryListItem(description, quantity)
  }
   
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.inventoryListItems} />
          <NewInventoryItem createItem={this.handleCreate}/>
        </div>
      </div>
    );
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;