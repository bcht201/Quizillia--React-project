import React from 'react';
import {expect} from 'chai';
import {
        shallow, 
        mount
        } from 'enzyme';
import {
        Link,
        BrowserRouter as Router
      } from 'react-router-dom'
import Quiz from './Quiz'

describe('Quiz.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper= shallow(<Quiz />);
    })
    //p tag should not render without being called
    it('p tag is not rendered', () => {
        expect(wrapper.find('p')).to.not.exist
    })
    //api call test
    it('should render a p tag', () => {
        let component = mount(<Quiz />)
        expect(component.find('p')).to.exist
    })    
    
})

