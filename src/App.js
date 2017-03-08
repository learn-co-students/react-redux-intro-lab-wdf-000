import React, { Component } from 'react';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';
import {connect} from 'react-redux';
import * as actions from './actions/inventoryItemsActions'
import {bindActionCreators} from 'redux'


class App extends Component {
  constructor(props){
    super(props);
    this.createItem = this.createItem.bind(this)
  } 

  componentWillMount(){
    this.props.actions.getInventoryListItems()
  }

  createItem(quantity, description){
    this.props.actions.addInventoryListItem(quantity, description)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>    
        </div>
          <InventoryList inventoryItems={this.props.inventoryItems}/>
          <NewInventoryItem createItem={this.createItem} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {inventoryItems: state.inventoryItems}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)
 
export default connectedComponent;