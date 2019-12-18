import React from 'react';
import {
        shallow, 
        mount
        } from 'enzyme';
import GameBox from './GameBox';
import Quiz from './../Quiz/Quiz';

describe('GameBox.js', () => {
    let wrapper;
    let mockData;
    let wrap;

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
       
       
        wrapper= shallow(<GameBox gameInfo = {mockData}   />);
    })
    //p tag should not render without being called
    it('to have a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('should have 4 buttons', () => {
        expect(wrapper.find('button').length).toEqual(4);
    })

    it('buttons should have answers as value', () => {
        expect(wrapper.find('#Crete').text()).to.equal('Crete')
    })

    it('should render the question', ()=> {
       expect(wrapper.contains('<h3>Talos, the mythical giant bronze man, was the protector of which island?</h3>'));
    });
})

