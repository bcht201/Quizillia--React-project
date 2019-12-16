import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from './App';

describe('App.js', () => {
  it('should render div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="App" />)).to.equal(true);
  })

  it('should have no other components', () => {
    
  })
})