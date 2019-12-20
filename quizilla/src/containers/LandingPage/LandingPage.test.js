import React from 'react';
import {shallow, mount} from 'enzyme';
import LandingPage from './LandingPage';
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {Select, MenuItem} from '@material-ui/core';

describe('LandingPage', () =>{
    let wrapper;
    const mockReset = jest.fn();
    beforeEach(()=>{
        wrapper = shallow(<LandingPage reset = {mockReset}/>)
    });

    it('should match snapshot', () =>{
        const mockReset = jest.fn();
        const tree = renderer.create(<Router><LandingPage reset = {mockReset}/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('contains a 2 <div/> s, 1 is LandingPageContainer and the other is GameDropdown', () =>{
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.find('.LandingPageContainer').length).toEqual(1);
        expect(wrapper.find('.GameDropdown').length).toEqual(1);
    });

    it('should render our navbar', () => {
        expect(wrapper.find(Link).hasClass('quizButton')).toEqual(true);
    });

    it('should not redirect to /quiz when you click on start quiz link without selecting a category', () =>{
        const link = wrapper.find(Link);
        global.window = {location: {pathname : null}};
        expect(global.window.location.pathname).toEqual('/');
        link.simulate('click');
        expect(global.window.location.pathname).toEqual('/');
    });

    it('should render gameDropdown Menu', () => {
        wrapper.setState({
            category: 'ghosts', 
            categories: [
                {
                    id: 0, 
                    name: 'ghosts'
                },
                {
                    id: 1,
                    name: 'notghosts'
                }
            ]
        });

        wrapper.update();
        expect(wrapper.find('#categoryDropdown').length).toEqual(1);
        
    })

    it('should update state after handleChange is called', () => {
        const event = {target: {name: 'chosen_category', value: 'notghosts'}};
        wrapper.instance().handleChange(event, () => {
            expect(wrapper.state('chosen_category')).toEqual('notghosts');
        });
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'getQuestionCount');
        wrapper.setState({
            difficulty: 'easy',
            chosen_category: 'honestBurgers'
        });
        wrapper.instance().handleChange(event, () => {
            expect(wrapper.state('chosen_category')).toEqual('notghosts');
            expect(spy).toHaveBeenCalled();
        });

    })

    it('should render difficultyDropdown', () => {
        wrapper.setState({
            category: 'ghosts', 
            difficulty: 'easy'
        });
        wrapper.update();
        expect(wrapper.find('#difficultyDropdown').length).toEqual(1);
        
    })

    it('should update category on change in category dropDown', () => {
        const mockReset = jest.fn();
        let wrapper2 = shallow(<LandingPage reset={mockReset}/>)
        const event = {target: {name: 'chosen_category', value: 'notghosts'}}
        wrapper2.find('#categoryDropdown').simulate('change', event, () => {
            expect(wrapper2.state('chosen_category')).toEqual('notghosts')
        });
    })

    it('should update difficulty on change in difficulty select menu', () => {
        const mockReset = jest.fn();
        let wrapper3 = shallow(<LandingPage reset={mockReset}/>)
        const event = {target: {name: 'difficulty', value: 'easy'}}
        wrapper3.find('#difficultyDropdown').simulate('change', event, () => {
            expect(wrapper3.state('difficulty')).toEqual('easy')
        });
    })

    it('should update players on change in playerDropdown select menu', () => {
        const mockReset = jest.fn();
        let wrapper4 = shallow(<LandingPage reset={mockReset}/>)
        const event = {target: {name: 'numberOfPlayers', value: '1'}}
        wrapper4.find('#playerDropdown').simulate('change', event, () => {
            expect(wrapper4.state('numberOfPlayers')).toEqual('1')
        });
    })

    //STEPS:
    //create mock function 
    //shallow rendered LandingPage and gave it a prop called mockEventHandler
    //simulated a 'change' and on said change gave it mock values
    //now we write expect state to see if mock values are passed on into state after change

    // it('should call assingQuestionCount once', () => {
    //     const spy = jest.spyOn(LandingPage.prototype, "assignQuestionCount");
    //     let fakeReset = jest.fn();
    //     let wrapper2 = mount(<Router><LandingPage reset={fakeReset}/></Router>);
    //     wrapper2.setState= ({categories: 'ghosts'})
    //     wrapper2.instance().assignQuestionCount();
    //     wrapper2.update();
    //     expect(spy).toHaveBeenCalled();
    // })

    it('should change state and make a function call from props',() => {
        const fakeFunction = jest.fn();
        const fakeReset = jest.fn();
        const wrapper2 = shallow(<LandingPage pickCat={fakeFunction} reset={fakeReset}/>);
        const fakeData = 'easy';
        wrapper2.setState({question_count_data: {total_easy_question_count: 12}});
        wrapper2.instance().assignQuestionCount(fakeData);
        wrapper2.update();
        expect(wrapper2.state().max_questions).toEqual(12);
        expect(fakeFunction).toHaveBeenCalled();
    })



})