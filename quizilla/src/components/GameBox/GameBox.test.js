import React from 'react';
import {
        shallow, 
        mount
        } from 'enzyme';
import GameBox from './GameBox'

describe('GameBox.js', () => {
    let wrapper;
    let mockData;

    beforeEach(() => {
        mockData = {"category": "Mythology",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Talos, the mythical giant bronze man, was the protector of which island?",
        "correct_answer": "Crete",
        "incorrect_answers": ["Sardinia",
        "Sicily",
        "Cyprus"
        ]
        }
        wrapper= shallow(<GameBox gameInfo = {mockData} />);
    })
    //p tag should not render without being called
    it('to have a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
 
    
})

