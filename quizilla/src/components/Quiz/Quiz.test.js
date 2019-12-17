import React from 'react';
import {
    shallow, 
    mount
} from 'enzyme';
import Quiz from './Quiz'
import GameBox from '../GameBox/GameBox'

describe('Quiz.js', () => {
    let wrapper;
    let score = Quiz.calculateScore;

    beforeEach(() => {
        wrapper= shallow(<Quiz />);
    })
    
    it('should have a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    
    it('should not render GameBox', () => {
        expect(wrapper.find('GameBox').length).toEqual(0);
    })

    
        
})



