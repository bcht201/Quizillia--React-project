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

    it('should call calculateScore on click', ()=> {
        // const fakeCalc = jest.spyOn(Quiz.prototype, 'calculateScore');
        wrap = shallow(<GameBox gameInfo = {mockData} calculateScore={fakeCalc}/>);
        const instance = wrap.instance()
        let button = wrapper.find('#Crete');
        button.simulate('click');
        expect(Quiz.prototype.calculateScore).toHaveBeenCalledTimes(1);
    })
})

