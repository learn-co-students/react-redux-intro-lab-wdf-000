import React, { Component } from 'react';
import NewInventoryItem from './NewInventoryItem';
import InventoryList from './InventoryList';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <NewInventoryItem />
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

const connector = connect(mapStateToProps);
const connectedComponent = connector(App);

export default connectedComponent;
