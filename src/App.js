import React, { Component } from 'react';
import {connect} from 'react-redux';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';
import * as actions from './actions/inventoryItemsActions'
import {bindActionCreators} from 'redux'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.inventoryListItems} />
          <NewInventoryItem />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state) {
  return {inventoryListItems: state.inventoryListItems}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
