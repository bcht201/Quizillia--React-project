import React from 'react';
import {
        shallow,
        } from 'enzyme';
import GameBox from './GameBox';
import Quiz from './../Quiz/Quiz';
import renderer from 'react-test-renderer'

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
       
       
        wrapper= shallow(<GameBox gameInfo = {mockData}  />);
    })

    it('should match snapshot', () => {
        const tree = renderer.create(<GameBox gameInfo = {mockData} />).toJSON();
        expect(tree).toMatchSnapshot();
    })


    //p tag should not render without being called
    it('to have 1 container <div /> and 1 for each answer button', () => {
        expect(wrapper.find('div').length).toEqual(5);
    })

    it('should have 4 answer buttons', () => {
        expect(wrapper.find('button').length).toEqual(4);
    })

    it('should have buttons with answers as the value', () => {
        expect(wrapper.find('#Crete').text()).toEqual('Crete');
    })

    it('should render the question', ()=> {
       expect(wrapper.contains('<h3>Talos, the mythical giant bronze man, was the protector of which island?</h3>'));
    });
})

