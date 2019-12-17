import React from 'react';
import {
    shallow, 
    mount
} from 'enzyme';
import Quiz from './Quiz'
import GameBox from '../GameBox/GameBox'
import axios from 'axios'

jest.mock('axios')

describe('Quiz.js', () => {
    let wrapper;
    

    beforeEach(() => {
        wrapper= shallow(<Quiz />);
    })
    
    it('should have a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    
    it('should not render GameBox', () => {
        expect(wrapper.find('GameBox').length).toEqual(0);
    })
    
    // We must call spyOn before we shallow render or mount
    it('should do an api call', () => {
        const getSpy = jest.spyOn(axios, 'get');
        wrapper= shallow(<Quiz />);
        expect(getSpy).toHaveBeenCalled();
    })
    
    
})



