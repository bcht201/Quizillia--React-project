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

    //STEPS:
    //create mock function 
    //shallow rendered LandingPage and gave it a prop called mockEventHandler
    //simulated a 'change' and on said change gave it mock values
    //now we write expect state to see if mock values are passed on into state after change
    // it('Should call pickCat (prop function) after setting state', () => {
    //     const mockEventHandler = jest.fn();
    //     const mockReset = jest.fn();
    //     const wrapper2 = mount(<Router>
    //         <LandingPage handleChange={mockEventHandler} reset = {mockReset} />
    //         </Router>)
    //     const event = {target: {
    //         name: 'chosen_category',
    //         value: 'val'
    //     }}
    //     // wrapper.setProps({onChange : mockEventHandler});
    //     // wrapper.find('#categoryDropdown').simulate('change', {target: {value: ["val"], name: ["chosen_category"]}})
    //     wrapper2.find('#categoryDropdown').simulate('change', event);

    //     // wrapper.update();
    //     // expect(wrapper.state().chosen_category).toEqual('val');
    //     expect(mockEventHandler.calledOnce).toBe(true);
    // })

    it('should change setstate after onchange', () =>{
        const fakeCatCall = jest.fn();
        const mockEvent = {
            target : {
                name: "chosen_category",
                value : "test"
            }
        };
        const expected = {
            categories:[],
            chosen_category: "test", 
            difficulty: null,
            question_count_data: null,
            max_questions: null,
            numberOfPlayers: 1
        };
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state()).toEqual(expected);
    })

    // it('should display menu items after Api call', () => {
    //     loadData = async () => {

    //     }
    // })

    

    // it('should call pickCat propFunction after setting the state', () => {
    //     wrapper.update();
    //     wrapper.
    //     expect(wrapper.find('MenuItem').text()).toEqual('Pick a Category');
    // })

    it('should redirect to /quiz if a category is selected', () =>{
        // const wrapper2 = mount(<Router><LandingPage/></Router>);
        // wrapper2.setState({chosen_category: "entertainment: Whatever you want"});
        // const link = wrapper2.find(Link);
        // global.window = {location: {pathname : null}};
        // link.simulate('click');
        // expect(global.window.location.pathname).toEqual('/quiz');
    });

})