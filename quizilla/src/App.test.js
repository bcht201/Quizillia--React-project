import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from './App';

describe('App.js', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<App />);
  })

  it('contains only one element with classname App', () => {
    expect(wrapper.find('.App')).to.have.lengthOf(1);
  })

  // app is not an empty div
  it('should have no other components', () => {
    expect(wrapper.find('.App')).to.not.be.blank();
  })
})