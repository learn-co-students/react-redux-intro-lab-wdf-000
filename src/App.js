import React, { Component } from 'react';
import NewInventoryItem from './NewInventoryItem';
import InventoryList from './InventoryList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addInventoryListItem} from './actions/inventoryItemsActions';

class App extends Component {
  constructor(props){
    super(props);
    this.handleItem = this.handleItem.bind(this);
  }

  handleItem(ev){
    ev.preventDefault();
    let d = ev.target.children.description.value;
    let q = ev.target.children.quantity.value;
    this.props.addInventoryListItem(q, d);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <NewInventoryItem onSubmit={this.handleItem}/>
          <InventoryList inventoryItems={this.props.inventoryItems}/>
        </div>
      </div>
    );
  }
}

// export default App;
function mapStateToProps(state) {
  return {inventoryItems: state.inventoryItems}
}

function mapDispatchToProps(dispatch) {
  return {addInventoryListItem: (q, d)=>(dispatch(addInventoryListItem(q, d)))};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;
