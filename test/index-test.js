import React from 'react'
import { shallow, mount } from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import ReactTestUtils from 'react-addons-test-utils'
import InventoryList from '../src/InventoryList'

const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]


describe('<InventoryList/>', function () {
  it('should display a list of inventory items with the item quantity and name', function () {
    const wrapper = shallow(<InventoryList inventoryItems={items}/>);
    expect(wrapper.find('li')).to.have.length(3);
  });

  it('should have props inventoryItems', function () {
    const wrapper = shallow(<InventoryList inventoryItems={items}/>);
    expect(wrapper.props().inventoryItems).to.be.defined;
  });
});