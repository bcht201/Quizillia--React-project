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
    })

    it('should update state for number of players on mount', ()=> {
        const instance = mount(<Quiz players={"1"}/>).instance();
        const spy = jest.spyOn(instance, 'createScoreArray');
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled();
    })
    
    
    it('should have a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    
    it('should not render GameBox', () => {
        expect(wrapper.find('GameBox').length).toEqual(0);
    })
    
    it('should match snapshot', () => {
        const tree = renderer.create(<Quiz players={"1"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    // // We must call spyOn before we shallow render or mount
    // it('should do an api call', () 
     
    //     const getSpy = jest.spyOn(axios, 'get');
    //     wrapper= shallow(<Quiz />);
    //     expect(getSpy).toHaveBeenCalled();
    // })
    
    it('score state should have a length of 1', () => {
        expect(wrapper.state().score.length).toEqual(1);
    })

    it('testing GameStates if statement', () => {
        let wrapper2 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>)
        let fakeFxn = wrapper2.instance().generateResults = jest.fn();
        wrapper2.update();
        wrapper2.setState({index: 1 });
        expect(fakeFxn).toHaveBeenCalled();
    })

    it('testing GameStates else statement', () => {
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>)
        let fakeFxn = wrapper3.instance().generateNextQuestion = jest.fn();
        wrapper3.update();
        wrapper3.setState({data: [0, 0] });
        expect(fakeFxn).toHaveBeenCalled();
    })

    it('should render emojis', () => {
        let wrapper3 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>)
        wrapper3.setState({score: [0]});
        wrapper3.instance().generateResults();
        expect(wrapper3.find('.resultsMsg').text()).toEqual('Player 1 got 0/1')
    })

    // it('testing GameStates if both if and else statement are false', () => {
    //     let wrapper4 = shallow(<Quiz players={'1'} maxNumberOfQuestions={1}/>)
    //     let fakeFxn = wrapper3.instance().generateNextQuestion = jest.fn();
    //     wrapper3.update();
    //     wrapper3.setState({data: [0, 0] });
    //     expect(fakeFxn).toHaveBeenCalled();
    // })
    
}) 




