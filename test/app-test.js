import React from 'react'
import { shallow, mount} from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import ReactTestUtils from 'react-addons-test-utils'
import App from '../src/App'
import InventoryList from '../src/InventoryList'

import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';

const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]

function setup() {
  const props = {
    inventoryListItems: items
  }
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = shallow(<App {...props} store={store}/>)
  return {
    props,
    wrapper
  }
}

describe('<App/>', function () {

  it('should render the InventoryList component as a child', function () {
    const { wrapper } = setup()
    expect(wrapper.shallow().find('InventoryList').length).toEqual(1)
  });

  it('should render the NewInventoryItem component as a child', function () {
    const { wrapper } = setup()
    expect(wrapper.shallow().find('NewInventoryItem').length).toEqual(1)
  });

  it('should be connected to the store via the `connect` function', function() {
    const { wrapper } = setup()
    expect(wrapper.unrendered.type.displayName).toEqual('Connect(App)')
  })


});
