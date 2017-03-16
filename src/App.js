import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
      </div>
    );
  }
}


const connector = connect()
const connectedComponent = connector(App)

export default connectedComponent;
