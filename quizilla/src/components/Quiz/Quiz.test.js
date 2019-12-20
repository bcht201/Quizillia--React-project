import React from 'react';
import {
    shallow, 
    mount
} from 'enzyme';
import Quiz from './Quiz'
import GameBox from '../GameBox/GameBox'
import axios from 'axios'
import renderer from 'react-test-renderer'

jest.mock('axios')

describe('Quiz.js', () => {
    let wrapper;

    beforeEach(() => {
      wrapper= shallow(<Quiz players={"1"}/>);
    });

    it('should update state for number of players on mount', ()=> {
        const instance = mount(<Quiz players={"1"}/>).instance();
        const spy = jest.spyOn(instance, 'createScoreArray');
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled();
    });
    
    
    it('should have a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
    
    it('should not render GameBox', () => {
        expect(wrapper.find('GameBox').length).toEqual(0);
    });
    
    it('should match snapshot', () => {
        const tree = renderer.create(<Quiz players={"1"} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('score state should have a length of 1', () => {
        expect(wrapper.state().score.length).toEqual(1);
    });

    it('testing GameStates if statement', () => {
        let wrapper2 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>)
        let fakeFxn = wrapper2.instance().generateResults = jest.fn();
        wrapper2.update();
        wrapper2.setState({index: 1 });
        expect(fakeFxn).toHaveBeenCalled();
    });

    it('testing GameStates else statement', () => {
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>)
        let fakeFxn = wrapper3.instance().generateNextQuestion = jest.fn();
        wrapper3.update();
        wrapper3.setState({data: [0, 0] });
        expect(fakeFxn).toHaveBeenCalled();
    });

    it('should return + 1 if the answer is correct', () =>{
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>);
        let mockData = [{
            "category": "Mythology",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Talos, the mythical giant bronze man, was the protector of which island?",
            "correct_answer": "Crete",
            "incorrect_answers": [
                "Sardinia",
                "Sicily",
                "Cyprus"
            ]
        }];
        wrapper3.setState({score: [0], counter: 0, numberOfPlayers: 1, data: mockData, index: 0});
        wrapper3.update();
        let fakeCalcScore = wrapper3.instance().calculateScore ('Crete');
        expect(fakeCalcScore[0]).toEqual(1);
    });

    it('should return + 1 if the answer is correct', () =>{
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>);
        let mockData = [{
            "category": "Mythology",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Talos, the mythical giant bronze man, was the protector of which island?",
            "correct_answer": "Crete",
            "incorrect_answers": [
                "Sardinia",
                "Sicily",
                "Cyprus"
            ]
        }];
        wrapper3.setState({score: [0], counter: 0, numberOfPlayers: 1, data: mockData, index: 0});
        wrapper3.update();
        let fakeCalcScore = wrapper3.instance().calculateScore ('Sicily');
        expect(fakeCalcScore[0]).toEqual(-1);
    });

    it('should return 1 if there is one player', () =>{
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>);
        let fakeUpdateQ = wrapper3.instance().updateQuestion();
        expect(fakeUpdateQ).toEqual(1);
    });

    it('should return 0 if there are 2 players and it is the first players turn', () =>{
        let wrapper3 = shallow(<Quiz players={'2'} maxNumberOfQuestions={1}/>);
        wrapper3.setState({counter: 0});
        wrapper3.update();
        let fakeUpdateQ = wrapper3.instance().updateQuestion();
        expect(fakeUpdateQ).toEqual(0);
    });
    
    it('should return 1 if there are 2 players and it is the second players turn', () =>{
        let wrapper3 = shallow(<Quiz players={'2'} maxNumberOfQuestions={1}/>);
        wrapper3.setState({counter: 1});
        wrapper3.update();
        let fakeUpdateQ = wrapper3.instance().updateQuestion();
        expect(fakeUpdateQ).toEqual(1);
    });

    it('gameState should run newScore, followed by nextQuestion', () =>{
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>);
        let mockData = [{
            "category": "Mythology",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Talos, the mythical giant bronze man, was the protector of which island?",
            "correct_answer": "Crete",
            "incorrect_answers": [
                "Sardinia",
                "Sicily",
                "Cyprus"
            ]
        }];
        wrapper3.setState({score: [0], counter: 0, numberOfPlayers: 1, data: mockData, index: 0});
        wrapper3.update();
        let fakeCalcScore = wrapper3.instance().calculateScore = jest.fn();
        let fakeUpdateQ = wrapper3.instance().updateQuestion = jest.fn();
        wrapper3.instance().nextGameState();
        expect(fakeCalcScore).toHaveBeenCalled();
        expect(fakeUpdateQ).toHaveBeenCalled();
    })
}) 




