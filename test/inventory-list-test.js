import React from 'react'
import { shallow, mount } from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import ReactTestUtils from 'react-addons-test-utils'
import InventoryList from '../src/InventoryList'

const items = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}]

describe('<InventoryList/>', function () {

  it('should display a list of inventory items with the item quantity and name', function () {
    const wrapper = shallow(<InventoryList inventoryItems={items}/>);
    expect(wrapper.find('li').length).toEqual(3);
    expect(wrapper.find('li').nodes[0].props.children).toEqual([ 'item: ', 'flour', ', quantity: ', '3lbs' ])
    expect(wrapper.find('li').nodes[1].props.children).toEqual([ 'item: ', 'eggs', ', quantity: ', '2 dozen' ])
    expect(wrapper.find('li').nodes[2].props.children).toEqual([ 'item: ', 'sugar', ', quantity: ', '2lbs' ])
  });

  it('should have props inventoryItems', function () {
    const wrapper = shallow(<InventoryList inventoryItems={items}/>);
    expect(wrapper.props().inventoryItems).toBe.defined;
  });
});
