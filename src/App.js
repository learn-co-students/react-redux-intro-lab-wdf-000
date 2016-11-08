import React, { Component } from 'react';
import {connect} from 'react-redux';
import InventoryList from './InventoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
        <InventoryList inventoryItems={this.props.inventoryListItems} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {inventoryListItems: state.inventoryListItems}
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;

// Bonus: show usual export default connect...
// Bonus: container vs. presentational components: build actual list in shopping list component
// with actions for next code-along, shoppingList here top level, dispatch action
// then, bonus: container vs. presentational, props as callback functions
