import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LandingPage from './LandingPage';
import { Link } from 'react-router-dom';

describe('LandingPage', () =>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<LandingPage/>)
    });

    it('contains a div', () =>{
        expect(wrapper.find('div')).to.have.lengthOf(1);
    });

    it('contains a button', () =>{
        expect(wrapper.find('button')).to.have.lengthOf(1);
    });

    it('contains a button with text Start Quiz', () =>{
        expect(wrapper.find('button')).text('Start Quiz!');
    });

    it('should render our navbar', () => {
        expect(wrapper.find(Link)).to.match('.quizButton');
    })
})