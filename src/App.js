import React, { Component } from 'react';
import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'
import {getInventoryItems} from './actions/InventoryListActions'
import {addInventoryListItem} from './actions/InventoryListActions'
import {connect} from 'react-redux';

class App extends Component {

  submitForm(ev){
    ev.preventDefault();
    var quantity = ev.target.children[0].value
    var description = ev.target.children[1].value
    this.props.addInventoryListItem(quantity, description)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList items={this.props.inventoryList}/>
          <NewInventoryItem onSubmission = {this.submitForm.bind(this)} value={""}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {inventoryList: state.inventoryItemsReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInventoryItems: (items) => dispatch(getInventoryItems(items)),
    addInventoryListItem: (quantity, description) => dispatch(addInventoryListItem(quantity, description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
