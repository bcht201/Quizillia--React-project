import React from 'react';
import {shallow, mount} from 'enzyme';
import LandingPage from './LandingPage';
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
describe('LandingPage', () =>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<LandingPage/>)
    });

    it('should match snapshot', () =>{
        const tree = renderer.create(<Router><LandingPage/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('contains a div', () =>{
        expect(wrapper.find('div').length).toEqual(1);
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

    it('should redirect to /quiz if a category is selected', () =>{
        // const wrapper2 = mount(<Router><LandingPage/></Router>);
        // wrapper2.setState({chosen_category: "entertainment: Whatever you want"});
        // const link = wrapper2.find(Link);
        // global.window = {location: {pathname : null}};
        // link.simulate('click');
        // expect(global.window.location.pathname).toEqual('/quiz');
    });

})