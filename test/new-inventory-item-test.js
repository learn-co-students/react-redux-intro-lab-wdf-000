import React from 'react'
import { shallow, mount } from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import ReactTestUtils from 'react-addons-test-utils'
import NewInventoryItem from '../src/NewInventoryItem'


describe('<NewInventoryItem/>', function () {

  it('should display a form for a new inventory item, with a form field for quantity and description', function () {
    const wrapper = shallow(<NewInventoryItem/>);
    expect(wrapper.find('label').length).toEqual(2);
    expect(wrapper.find('input').length).toEqual(3);
  });
});
















